import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useSpinAnimation } from '../../hooks/useSpinAnimation';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants/theme';
import { HeaderProps, ScreenName } from '../../types';

const NAV_ITEMS: { name: ScreenName; label: string }[] = [
  { name: 'Home', label: 'Home' },
  { name: 'Shop', label: 'Shop' },
  { name: 'Sell', label: 'Sell' },
  { name: 'AboutUs', label: 'About Us' },
];

export function Header({
  navigation,
  currentScreen,
  showSearch = false,
  showCart = true,
}: HeaderProps) {
  const { spin } = useSpinAnimation();

  return (
    <View style={styles.header}>
      <View style={styles.headerTop}>
        <View style={styles.headerLeft}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
          </Animated.View>
          <Text style={styles.logo}>SECONDSPIN</Text>
        </View>

        <View style={styles.headerRight}>
          {showSearch && (
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="search-outline" size={22} color={COLORS.text.primary} />
            </TouchableOpacity>
          )}
          {showCart && (
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="cart-outline" size={22} color={COLORS.text.primary} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <TouchableOpacity
            key={item.name}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.name)}
          >
            <Text
              style={[
                styles.navText,
                currentScreen === item.name && styles.navTextActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.light,
    backgroundColor: COLORS.background.primary,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  logo: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  headerRight: {
    flexDirection: 'row',
    gap: SPACING.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.sm,
    backgroundColor: COLORS.background.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SPACING.lg,
    gap: SPACING.xl,
  },
  navItem: {
    paddingHorizontal: SPACING.sm,
  },
  navText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
    color: COLORS.text.muted,
  },
  navTextActive: {
    color: COLORS.text.primary,
  },
});
