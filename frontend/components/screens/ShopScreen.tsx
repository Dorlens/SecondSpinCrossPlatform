import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSpinAnimation } from '../../hooks/useSpinAnimation';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants/theme';
import { RootStackParamList } from '../../types';

const jacketsImage = require('../../assets/IMG_4457 copy.jpeg');
const sweetshirtImage = require('../../assets/IMG_4429.jpeg');

type Props = NativeStackScreenProps<RootStackParamList, 'Shop'>;

export function ShopScreen({ navigation }: Props) {
  const { spin } = useSpinAnimation();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.headerLeft}>
              <View style={styles.logoContainer}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
                </Animated.View>
                <Text style={styles.logoText}>SECONDSPIN</Text>
              </View>
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
            </View>

            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color={COLORS.text.muted} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for items, brands, and users"
                placeholderTextColor={COLORS.text.muted}
              />
            </View>

            <View style={styles.iconButtons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="person-outline" size={24} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="mail-outline" size={24} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={24} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="bag-outline" size={24} color={COLORS.text.primary} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Category Filters */}
          <View style={styles.filterSection}>
            <View style={styles.categoryGroup}>
              <TouchableOpacity style={styles.categoryButtonActive}>
                <Text style={styles.categoryTextActive}>Women</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Men</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.categoryText}>Accessories</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.filterRow}>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Brand</Text>
                <Ionicons name="chevron-down" size={18} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Condition</Text>
                <Ionicons name="chevron-down" size={18} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Size</Text>
                <Ionicons name="chevron-down" size={18} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Price Range</Text>
                <Ionicons name="chevron-down" size={18} color={COLORS.text.primary} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.main}>
          <View style={styles.grid}>
            {/* Product Card 1 */}
            <View style={styles.productCard}>
              <ImageBackground
                source={jacketsImage}
                style={styles.productImage}
                imageStyle={styles.productImageStyle}
              >
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name="heart-outline" size={20} color={COLORS.text.primary} />
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>Vintage Supreme Jacket</Text>
                <Text style={styles.productUser}>@sarahstyles</Text>
                <Text style={styles.productPrice}>$500.00</Text>
                <Text style={styles.productCondition}>Gently Used</Text>
              </View>
            </View>

            {/* Product Card 2 */}
            <View style={styles.productCard}>
              <ImageBackground
                source={sweetshirtImage}
                style={styles.productImage}
                imageStyle={styles.productImageStyle}
              >
                <TouchableOpacity style={styles.favoriteButton}>
                  <Ionicons name="heart-outline" size={20} color={COLORS.text.primary} />
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>Hidden Season SweetShirt</Text>
                <Text style={styles.productUser}>@PeoplesFashion</Text>
                <Text style={styles.productPrice}>$200.00</Text>
                <Text style={styles.productCondition}>Gently Used</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerLogo}>
          <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
          </Animated.View>
          <Text style={styles.logoText}>SECONDSPIN</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 SecondSpin. All Rights Reserved.</Text>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.primary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.dark,
    backgroundColor: COLORS.background.primary,
  },
  headerTop: {
    padding: SPACING.lg,
  },
  headerLeft: {
    marginBottom: SPACING.lg,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.md,
  },
  logoText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  nav: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.xl,
  },
  navLinkActive: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text.primary,
  },
  navLink: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
    color: COLORS.text.muted,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: 10,
    marginBottom: SPACING.lg,
    gap: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: FONT_SIZES.md,
    color: COLORS.text.primary,
  },
  iconButtons: {
    flexDirection: 'row',
    gap: SPACING.md,
    justifyContent: 'flex-end',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterSection: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border.dark,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.md,
    gap: SPACING.md,
  },
  categoryGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  categoryButtonActive: {
    backgroundColor: COLORS.text.primary,
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  categoryTextActive: {
    color: COLORS.text.inverse,
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
  },
  categoryButton: {
    backgroundColor: 'transparent',
    borderRadius: BORDER_RADIUS.lg,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
  },
  categoryText: {
    color: COLORS.text.muted,
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: BORDER_RADIUS.lg,
    paddingLeft: SPACING.lg,
    paddingRight: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.xs,
  },
  filterButtonText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
    color: COLORS.text.primary,
  },
  main: {
    padding: SPACING.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  productCard: {
    width: '48%',
    marginBottom: SPACING.lg,
  },
  productImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: SPACING.md,
  },
  productImageStyle: {
    borderRadius: BORDER_RADIUS.sm,
  },
  favoriteButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    marginTop: SPACING.sm,
    gap: SPACING.xs,
  },
  productTitle: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
    color: COLORS.text.primary,
  },
  productUser: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.muted,
  },
  productPrice: {
    fontSize: FONT_SIZES.md,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  productCondition: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.muted,
  },
  footerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.sm,
    marginTop: SPACING.xxl,
    marginBottom: SPACING.lg,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border.dark,
    paddingVertical: SPACING.xl,
    paddingHorizontal: SPACING.lg,
    alignItems: 'center',
    gap: SPACING.lg,
  },
  footerText: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.muted,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: SPACING.xl,
  },
  footerLink: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.text.muted,
  },
});
