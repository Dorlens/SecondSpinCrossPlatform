import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header, Footer, ProductCard, SellerCard } from '../common';
import { COLORS, SPACING, FONT_SIZES, BORDER_RADIUS } from '../../constants/theme';
import { RootStackParamList } from '../../types';

const jacketsImage = require('../../assets/IMG_4457 copy.jpeg');
const ihpbaggyjorts = require('../../assets/IMG_4460 copy.jpeg');

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Header navigation={navigation} currentScreen="Home" showCart />

        {/* Auth Buttons */}
        <View style={styles.authContainer}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Resell. Rediscover. Repeat.</Text>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <MaterialIcons
              name="search"
              size={24}
              color={COLORS.text.secondary}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for brands, items, or sellers..."
              placeholderTextColor={COLORS.text.secondary}
            />
          </View>

          {/* Category Pills */}
          <View style={styles.categoryContainer}>
            {['Menswear', 'Womenswear', 'Accessories'].map((category) => (
              <TouchableOpacity key={category} style={styles.categoryPill}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trending Now */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <View style={styles.productGrid}>
            <ProductCard
              image={jacketsImage}
              title="Vintage Supreme Jacket"
              seller="@retrofinds"
              price="$500.00"
            />
            <ProductCard
              image={ihpbaggyjorts}
              title="IHP Baggy Jorts"
              seller="@sunnycloset"
              price="$160.00"
            />
          </View>
        </View>

        {/* Top Sellers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Top Sellers</Text>
          <View style={styles.sellerGrid}>
            <SellerCard name="@vintagevogue" rating="4.9" reviews="1.2k" />
            <SellerCard name="@streetstyleking" rating="5.0" reviews="890" />
            <SellerCard name="@minimalistchic" rating="4.8" reviews="2.5k" />
            <SellerCard name="@archivefashion" rating="4.9" reviews="742" />
            <SellerCard name="@gemsandthings" rating="5.0" reviews="3.1k" />
          </View>
        </View>

        <Footer showLogo={false} showLinks={false} />
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
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.md,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xl,
    marginTop: SPACING.xl,
  },
  signUpButton: {
    backgroundColor: COLORS.background.tertiary,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
  },
  signUpText: {
    color: COLORS.text.primary,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
  },
  loginButton: {
    backgroundColor: COLORS.background.tertiary,
    paddingHorizontal: SPACING.xl,
    paddingVertical: SPACING.md,
    borderRadius: BORDER_RADIUS.sm,
  },
  loginText: {
    color: COLORS.text.primary,
    fontWeight: 'bold',
    fontSize: FONT_SIZES.md,
  },
  heroSection: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xxl,
  },
  heroTitle: {
    fontSize: FONT_SIZES.jumbo,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.background.tertiary,
    borderRadius: BORDER_RADIUS.sm,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  searchIcon: {
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    paddingVertical: SPACING.md + 2,
    fontSize: FONT_SIZES.lg,
    color: COLORS.text.primary,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: SPACING.sm,
  },
  categoryPill: {
    backgroundColor: COLORS.background.tertiary,
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    borderRadius: BORDER_RADIUS.lg,
  },
  categoryText: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
    color: COLORS.text.primary,
  },
  section: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.xxl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: SPACING.lg,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  sellerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
