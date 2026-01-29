import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useSpinAnimation } from '../../hooks/useSpinAnimation';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/theme';
import { FooterProps } from '../../types';

export function Footer({ showLogo = true, showLinks = true }: FooterProps) {
  const { spin } = useSpinAnimation();

  return (
    <View style={styles.footer}>
      {showLogo && (
        <View style={styles.footerLogo}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
          </Animated.View>
          <Text style={styles.logoText}>SECONDSPIN</Text>
        </View>
      )}

      <Text style={styles.footerText}>
        {'\u00A9'} 2026 SECONDSPIN. All rights reserved.
      </Text>

      {showLinks && (
        <View style={styles.footerLinks}>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Policies</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingVertical: SPACING.xxl,
    paddingHorizontal: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border.light,
    alignItems: 'center',
  },
  footerLogo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
  },
  logoText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  footerText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.secondary,
    marginBottom: SPACING.lg,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: SPACING.xl,
  },
  footerLink: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.secondary,
  },
});
