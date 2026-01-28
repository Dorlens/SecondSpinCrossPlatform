export const COLORS = {
  // Primary palette
  primary: '#3B82F6',
  primaryLight: 'rgba(59, 130, 246, 0.1)',

  // Neutral palette
  text: {
    primary: '#111318',
    secondary: '#616f89',
    muted: '#999',
    inverse: '#FFFFFF',
  },

  // Background colors
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#f0f2f4',
    card: '#F1F5F9',
  },

  // Border colors
  border: {
    light: '#f0f2f4',
    medium: '#E2E8F0',
    dark: '#e5e5e5',
  },

  // Accent colors
  accent: {
    star: '#fbbf24',
    favorite: '#ef4444',
    blue: '#3B82F6',
  },

  // Dark mode colors
  dark: {
    background: '#111318',
    surface: '#1a1a1a',
    border: '#2a2a2a',
    text: '#FFFFFF',
    textMuted: '#9CA3AF',
    inputBorder: '#4B5563',
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

export const FONT_WEIGHTS = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: 'bold' as const,
  black: '900' as const,
};

export const BORDER_RADIUS = {
  sm: 8,
  md: 12,
  lg: 20,
  full: 9999,
} as const;

export const ANIMATION = {
  spinDuration: 2000,
} as const;
