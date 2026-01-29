
### Before

```
frontend/
├── App.tsx
├── components/
│   ├── Home.tsx       (483 lines)
│   ├── Shop.tsx       (413 lines)
│   ├── Sell.tsx       (416 lines)
│   └── AboutUs.tsx    (556 lines)
└── assets/
```

### After

```
frontend/
├── App.tsx                          # Updated with SafeAreaProvider
├── types/
│   └── index.ts                     # Centralized TypeScript types
├── constants/
│   └── theme.ts                     # Design tokens (colors, spacing, etc.)
├── hooks/
│   └── useSpinAnimation.ts          # Extracted animation logic
├── components/
│   ├── common/
│   │   ├── index.ts                 # Barrel export
│   │   ├── Header.tsx               # Shared header component
│   │   ├── Footer.tsx               # Shared footer component
│   │   ├── ProductCard.tsx          # Reusable product card
│   │   └── SellerCard.tsx           # Reusable seller card
│   └── screens/
│       ├── index.ts                 # Barrel export
│       ├── HomeScreen.tsx           # Refactored home screen
│       ├── ShopScreen.tsx           # Refactored with working navigation
│       ├── SellScreen.tsx           # Fixed StyleSheet + navigation
│       └── AboutScreen.tsx          # Refactored with working navigation
└── assets/
```

### Why This Structure?

1. **Separation of Concerns**: Types, constants, hooks, and components are now in dedicated directories
2. **Scalability**: Easy to add new screens, hooks, or shared components
3. **Discoverability**: Developers can quickly find what they need
4. **Barrel Exports**: `index.ts` files enable clean imports like `import { Header } from '../common'`

---

## Issue 1: StyleSheet Performance Bug

### Problem

In `Sell.tsx`, `StyleSheet.create()` was called **inside** the component function:

```tsx
// ❌ Avoid: Sell.tsx (lines 18-237)
function Sell() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const styles = StyleSheet.create({  // Called on EVERY render!
    container: {
      backgroundColor: isDark ? '#111318' : '#F5F5F5',
    },
    // ... 200+ more lines of styles
  });

  return <View style={styles.container}>...</View>;
}
```

### Why you want to avoid this

- `StyleSheet.create()` is designed to be called **once** at module load time
- When called inside a component, it runs on every render
- This creates new style objects on every render, defeating React Native's style caching
- Causes unnecessary memory allocations and garbage collection
- Performance impact compounds with frequent re-renders (e.g., typing in inputs)

### Solution

Moved static styles outside the component and used `useMemo` for dynamic (theme-dependent) styles:

```tsx
// ✅ Preferred: SellScreen.tsx
function SellScreen({ navigation }: Props) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Dynamic styles only recompute when isDark changes
  const dynamicStyles = useMemo(() => ({
    container: {
      backgroundColor: isDark ? COLORS.dark.background : COLORS.background.secondary,
    },
    // ... other theme-dependent styles
  }), [isDark]);

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      ...
    </View>
  );
}

// Static styles - created ONCE at module load
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // ... other static styles
});
```

### Why `useMemo`?

- `useMemo` ensures dynamic styles only recalculate when `isDark` actually changes
- Without `useMemo`, the dynamic styles object would be recreated on every render
- The dependency array `[isDark]` makes the intent clear: "recalculate only when theme changes"

---

## Issue 2: Animation Code Duplication

### Problem

The spinning logo animation was copy-pasted across all 4 screens:

```tsx
// This exact code appeared in Home.tsx, Shop.tsx, Sell.tsx, and AboutUs.tsx
const spinLogo = useRef(new Animated.Value(0)).current;
useEffect(() => {
  Animated.loop(
    Animated.timing(spinLogo, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
}, [spinLogo]);

const spin = spinLogo.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
```

### Why yout want to avoid this

- **~30 lines × 4 files = ~120 lines of duplicated code**
- If you need to change the animation (e.g., duration, easing), you must update 4 files
- Easy to introduce inconsistencies if one file is updated but others aren't
- Violates DRY (Don't Repeat Yourself) principle

### Solution

Extracted to a custom hook:

```tsx
// hooks/useSpinAnimation.ts
import { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { ANIMATION } from '../constants/theme';

export function useSpinAnimation(duration = ANIMATION.spinDuration) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue, duration]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return { spin, spinValue };
}
```

### Usage

```tsx
// In any component
const { spin } = useSpinAnimation();

return (
  <Animated.View style={{ transform: [{ rotate: spin }] }}>
    <MaterialIcons name="cached" size={24} />
  </Animated.View>
);
```

### Benefits

- **Single source of truth**: Change animation in one place, updates everywhere
- **Configurable**: Can pass custom duration if needed
- **Testable**: Hook can be unit tested independently
- **Reusable**: Any new screen can easily add the spinning logo

---

## Issue 3: Broken Navigation

### Problem

`Shop.tsx` and `AboutUs.tsx` had navigation UI elements (tabs/links) that did nothing when tapped:

```tsx
// ❌ Shop.tsx (lines 50-58) - No onPress handlers!
<View style={styles.nav}>
  <TouchableOpacity>
    <Text style={styles.navLinkActive}>Shop</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.navLink}>Sell</Text>  {/* Does nothing */}
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.navLink}>About</Text>  {/* Does nothing */}
  </TouchableOpacity>
</View>
```

Additionally, these components didn't receive the `navigation` prop:

```tsx
// ❌ Component didn't accept navigation prop
function Shop() {  // No props!
  // ...
}
```

### Why you want to avoid this

- Users tap navigation links and nothing happens - broken UX
- Confusing because `Home.tsx` navigation worked correctly
- Users stuck on Shop/About screens with no way to navigate

### Solution

1. Added TypeScript props with navigation:

```tsx
// ✅ ShopScreen.tsx
type Props = NativeStackScreenProps<RootStackParamList, 'Shop'>;

export function ShopScreen({ navigation }: Props) {
  // ...
}
```

2.navigation handlers:

```tsx
// ✅ Navigation links now work
<View style={styles.nav}>
  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Text style={styles.navLink}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity>
    <Text style={styles.navLinkActive}>Shop</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
    <Text style={styles.navLink}>Sell</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
    <Text style={styles.navLink}>About</Text>
  </TouchableOpacity>
</View>
```

3. buttons in AboutScreen:

```tsx
// ✅ AboutScreen.tsx - CTA buttons now navigate
<TouchableOpacity
  style={styles.primaryButton}
  onPress={() => navigation.navigate('Shop')}
>
  <Text style={styles.primaryButtonText}>Start Shopping</Text>
</TouchableOpacity>
<TouchableOpacity
  style={styles.secondaryButton}
  onPress={() => navigation.navigate('Sell')}
>
  <Text style={styles.secondaryButtonText}>Become a Seller</Text>
</TouchableOpacity>
```

---

## Issue 4: No Shared Components

### Problem

Each screen implemented its own version of:
- Header (logo + navigation + icons)
- Footer (copyright + links)
- ProductCard (image + title + price + favorite)
- SellerCard (avatar + name + rating)

This resulted in:
- 4 different header implementations with slightly different styles
- Inconsistent spacing, colors, and behavior across screens
- ~400+ lines of duplicated component code

### Solution

Created reusable components in `components/common/`:

### Header.tsx

```tsx
export function Header({
  navigation,
  currentScreen,
  showSearch = false,
  showCart = true,
}: HeaderProps) {
  const { spin } = useSpinAnimation();

  return (
    <View style={styles.header}>
      {/* Logo with spinning icon */}
      <View style={styles.headerLeft}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <MaterialIcons name="cached" size={24} />
        </Animated.View>
        <Text style={styles.logo}>SECONDSPIN</Text>
      </View>

      {/* Navigation - highlights current screen */}
      <View style={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.name}
            onPress={() => navigation.navigate(item.name)}
          >
            <Text style={[
              styles.navText,
              currentScreen === item.name && styles.navTextActive
            ]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
```

### Why Shared Components?

| Benefit | Explanation |
|---------|-------------|
| Consistency | All screens have identical header/footer styling |
| Maintainability | Fix a bug or update design in one place |
| Type Safety | Props are typed, preventing misuse |
| Configurability | Props like `showSearch`, `showCart` enable flexibility |
| Automatic active state | `currentScreen` prop highlights current nav item |

---

## Issue 5: Weak TypeScript Types

### Problem

The codebase used `any` for image types:

```tsx
// ❌ Home.tsx
type Product = {
  id: number;
  image: any;  // Allows anything!
  title: string;
};

type ProductCardProps = {
  image: any;  // No type safety
};
```

### Why you want to avoid this

- `any` defeats the purpose of TypeScript
- No autocomplete or error checking for image props
- Could accidentally pass a string, number, or anything else
- Makes refactoring risky

### Solution

Created centralized types with proper React Native types:

```tsx
// types/index.ts
import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: number;
  image: ImageSourcePropType;  // ✅ Correct type
  title: string;
  user: string;
  price: number;
  condition: string;
}

export interface ProductCardProps {
  image: ImageSourcePropType;  // ✅ Enforced at compile time
  title: string;
  seller: string;
  price: string;
  onPress?: () => void;
  onFavorite?: () => void;
}
```

### What is `ImageSourcePropType`?

It's React Native's type that accepts:
- `require('./image.png')` - Local images
- `{ uri: 'https://...' }` - Remote images
- Numbers (asset IDs)

TypeScript will now error if you pass an invalid image source.

---

## Issue 6: Inconsistent SafeAreaView

### Problem

Only `Sell.tsx` used `SafeAreaView`. The other 3 screens used raw `<View>`:

```tsx
// ❌ Home.tsx, Shop.tsx, AboutUs.tsx
function Home() {
  return (
    <View style={styles.container}>  {/* No safe area handling */}
      <StatusBar barStyle="dark-content" />
      ...
    </View>
  );
}

// ✅ Sell.tsx (the only correct one)
function Sell() {
  return (
    <SafeAreaView style={styles.container}>
      ...
    </SafeAreaView>
  );
}
```

### Why you want to avoid this

On devices with notches (iPhone X+) or Dynamic Island (iPhone 14 Pro+):
- Content can render under the notch/island
- Status bar overlaps with app content
- Bottom content can be cut off by home indicator

### Solution

1. Added `SafeAreaProvider` wrapper in `App.tsx`:

```tsx
// App.tsx
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>  {/* ✅ Required for SafeAreaView to work */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          ...
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
```

2. Wrapped all screens with `SafeAreaView`:

```tsx
// All screens now use SafeAreaView
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      ...
    </SafeAreaView>
  );
}
```

### Why `edges={['top']}`?

- `edges` prop controls which edges get safe area insets
- `['top']` applies inset only at the top (for notch/Dynamic Island)
- Bottom navigation usually handles its own safe area
- This gives us control over where padding is applied

---

## Issue 7: Hardcoded Values

### Problem

Colors, spacing, and font sizes were hardcoded throughout all files:

```tsx
// ❌ Scattered across all files
backgroundColor: '#111318'  // What color is this?
paddingHorizontal: 16       // Is this consistent?
fontSize: 14                // What's the text hierarchy?
borderRadius: 8             // Standard or custom?
color: '#616f89'            // Brand color?
```

### Why This Is Bad

- No single source of truth for design values
- Changing a brand color requires finding/replacing across all files
- Risk of inconsistent values (e.g., `#111318` vs `#111319`)
- Hard to implement design changes consistently

### Solution

Created a theme constants file:

```tsx
// constants/theme.ts
export const COLORS = {
  primary: '#3B82F6',
  primaryLight: 'rgba(59, 130, 246, 0.1)',

  text: {
    primary: '#111318',
    secondary: '#616f89',
    muted: '#999',
    inverse: '#FFFFFF',
  },

  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#f0f2f4',
    card: '#F1F5F9',
  },

  border: {
    light: '#f0f2f4',
    medium: '#E2E8F0',
    dark: '#e5e5e5',
  },

  dark: {
    background: '#111318',
    surface: '#1a1a1a',
    border: '#2a2a2a',
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;

export const FONT_SIZES = {
  xs: 11,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
  xxl: 20,
  xxxl: 24,
  hero: 28,
  display: 32,
  jumbo: 36,
} as const;

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 20,
  full: 9999,
} as const;
```

### Usage

```tsx
// ✅ Clear, consistent, maintainable
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background.primary,
    padding: SPACING.lg,
  },
  title: {
    fontSize: FONT_SIZES.xxl,
    color: COLORS.text.primary,
  },
  card: {
    borderRadius: BORDER_RADIUS.md,
    borderColor: COLORS.border.light,
  },
});
```

### Benefits

| Benefit | Example |
|---------|---------|
| Single source of truth | Change `COLORS.primary` once, updates everywhere |
| Self-documenting | `COLORS.text.secondary` is clearer than `#616f89` |
| TypeScript support | `as const` enables autocomplete |
| Design system ready | Easy to implement Figma tokens or theme switching |
| Dark mode support | `COLORS.dark.*` values already organized |

---

## Issue 8: Right-Side Content Clipping

### Problem

Some screens used single-row layouts or horizontal-only sections that extended past the right edge on smaller devices. The main offenders were:

- Shop filters were in a horizontal-only row (with long pills), causing overflow.
- Home "Weekly Top Sellers" used a horizontal scroll with fixed card widths, which cropped on smaller screens.
- About navigation and footer columns used non-wrapping rows, pushing links off-screen.

### Why This Is Something to avoid

- Users can’t see or tap clipped controls.
- Horizontal-only rows are easy to miss when there’s no obvious scroll indicator.
- The experience breaks on smaller screen widths.

### Solution

1. **Shop filters and grid**: Replaced the horizontal filter `ScrollView` with a wrapped two-row layout and allowed the nav to wrap. Also adjusted the product grid to distribute columns within the available width.
2. **Home top sellers**: Replaced the horizontal seller scroller with a wrapped grid and resized seller cards to fit a two-column layout on small screens.
3. **About navigation/footer**: Allowed link rows to wrap so nothing overflows.

### Before / After (Brief)

- **Before**: Filter pills and seller cards extended past the right edge on small screens, and About links overflowed without wrapping.
- **After**: Filters, sellers, and About links wrap into multiple rows so all controls remain visible and tappable.

```tsx
// ShopScreen.tsx (filters now wrap)
<View style={styles.filterSection}>
  <View style={styles.categoryGroup}>...</View>
  <View style={styles.filterRow}>...</View>
</View>

const styles = StyleSheet.create({
  filterSection: { paddingHorizontal: SPACING.lg, paddingVertical: SPACING.md, gap: SPACING.md },
  categoryGroup: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
  filterRow: { flexDirection: 'row', flexWrap: 'wrap', gap: SPACING.sm },
});
```

```tsx
// HomeScreen.tsx (sellers now wrap into a grid)
<View style={styles.sellerGrid}>
  <SellerCard ... />
  ...
</View>

const styles = StyleSheet.create({
  sellerGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
});
```

```tsx
// SellerCard.tsx (two-column sizing on small screens)
const styles = StyleSheet.create({
  sellerCard: { width: '48%', marginBottom: SPACING.lg },
});
```
