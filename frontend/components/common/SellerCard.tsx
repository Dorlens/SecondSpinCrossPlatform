import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/theme';
import { SellerCardProps } from '../../types';

export function SellerCard({ name, rating, reviews, onPress }: SellerCardProps) {
  return (
    <TouchableOpacity style={styles.sellerCard} onPress={onPress}>
      <View style={styles.sellerAvatar}>
        <MaterialIcons name="person" size={40} color={COLORS.text.secondary} />
      </View>
      <Text style={styles.sellerName} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
      <View style={styles.ratingContainer}>
        <MaterialIcons name="star" size={16} color={COLORS.accent.star} />
        <Text style={styles.ratingText}>
          {rating} ({reviews})
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sellerCard: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
    width: '48%',
  },
  sellerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  sellerName: {
    fontSize: FONT_SIZES.sm,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: SPACING.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
  },
  ratingText: {
    fontSize: FONT_SIZES.xs,
    color: COLORS.text.secondary,
  },
});
