import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants/theme';
import { ProductCardProps } from '../../types';

const { width } = Dimensions.get('window');

export function ProductCard({
  image,
  title,
  seller,
  price,
  onPress,
  onFavorite,
}: ProductCardProps) {
  return (
    <TouchableOpacity
      style={styles.productCard}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image source={image} style={styles.productImage} />
      <View style={styles.productOverlay}>
        <TouchableOpacity style={styles.favoriteButton} onPress={onFavorite}>
          <MaterialIcons name="favorite-border" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.productInfo}>
          <Text style={styles.productTitle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.productSeller}>{seller}</Text>
          <Text style={styles.productPrice}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  productCard: {
    width: (width - 44) / 2,
    borderRadius: BORDER_RADIUS.md,
    overflow: 'hidden',
    marginBottom: SPACING.md,
  },
  productImage: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  productOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: SPACING.md,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  favoriteButton: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: SPACING.sm,
    borderRadius: BORDER_RADIUS.lg,
  },
  productInfo: {
    marginTop: SPACING.xl,
  },
  productTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.text.inverse,
    marginBottom: 2,
  },
  productSeller: {
    fontSize: FONT_SIZES.sm,
    color: '#e5e7eb',
    marginBottom: SPACING.xs,
  },
  productPrice: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text.inverse,
  },
});
