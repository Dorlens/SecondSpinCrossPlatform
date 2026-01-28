import React from 'react';
import {
  View,
  Text,
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

type Props = NativeStackScreenProps<RootStackParamList, 'AboutUs'>;

export function AboutScreen({ navigation }: Props) {
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
          <View style={styles.headerContent}>
            {/* Logo */}
            <View style={styles.logoContainer}>
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
              </Animated.View>
              <Text style={styles.logoText}>SECONDSPIN</Text>
            </View>

            {/* Header Icons */}
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="search-outline" size={22} color={COLORS.text.primary} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="cart-outline" size={22} color={COLORS.text.primary} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation */}
          <View style={styles.navigation}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
              <Text style={styles.navLink}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Sell')}>
              <Text style={styles.navLink}>Sell</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.navLink, styles.navLinkActive]}>About Us</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Hero Section */}
        <ImageBackground
          source={{
            uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKY3EdUqTfpCisA_eKu89WNZK3fROYYu9ur-hlYrkKoYeWNnzHeaVkDb1moTVUKQDvhyZ3z47ZQCE1kOwIzpV-MYgbBbqiJ5AZj_TC2JLfRDgMf3HTdafUVERUzMh7k_A7q2AARhCY9--Nl3gt7sfijE36bfR0Q8JH6i_3BRweda7vqrloyzOb_nOvVQSWVcwDBCKgwnkyQYoUcVa4f_8m42dd3ryCK2oEeTXiBTGDMXQONoGIClvS9NkeOIB0wud73euj3nnEJLGp',
          }}
          style={styles.heroSection}
          imageStyle={styles.heroImage}
        >
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Rethink Fashion. Rewear Style.</Text>
            <Text style={styles.heroSubtitle}>
              Join the movement towards a more sustainable and stylish future. Buy and
              sell pre-loved fashion with confidence.
            </Text>
          </View>
        </ImageBackground>

        {/* Mission Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            Our mission is to make sustainable fashion accessible to everyone. We
            believe in the power of circularity to reduce waste and inspire a new
            generation of conscious consumers. SecondSpin is more than a marketplace;
            it's a community dedicated to extending the life of great style.
          </Text>
        </View>

        {/* Values Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesContainer}>
            <View style={styles.valueCard}>
              <View style={styles.valueIconContainer}>
                <Ionicons name="leaf-outline" size={32} color={COLORS.accent.blue} />
              </View>
              <Text style={styles.valueTitle}>Sustainability First</Text>
              <Text style={styles.valueDescription}>
                We champion a circular economy to reduce fashion waste and promote
                conscious consumption.
              </Text>
            </View>

            <View style={styles.valueCard}>
              <View style={styles.valueIconContainer}>
                <Ionicons name="people-outline" size={32} color={COLORS.accent.blue} />
              </View>
              <Text style={styles.valueTitle}>Community-Driven</Text>
              <Text style={styles.valueDescription}>
                We build a trusted space where style enthusiasts can connect, share, and
                inspire each other.
              </Text>
            </View>

            <View style={styles.valueCard}>
              <View style={styles.valueIconContainer}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={32}
                  color={COLORS.accent.blue}
                />
              </View>
              <Text style={styles.valueTitle}>Style Authenticity</Text>
              <Text style={styles.valueDescription}>
                Show off your personal style and discover authentic, high-quality pieces
                from sellers you can trust.
              </Text>
            </View>
          </View>
        </View>

        {/* How It Works Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <View style={styles.stepsContainer}>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepTitle}>List Your Item</Text>
              <Text style={styles.stepDescription}>
                Snap photos, add details, and set your price. Listing is simple and free.
              </Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepTitle}>Ship to Buyer</Text>
              <Text style={styles.stepDescription}>
                Once your item sells, use our prepaid label to ship it out to its new
                home.
              </Text>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepTitle}>Get Paid</Text>
              <Text style={styles.stepDescription}>
                After the buyer confirms receipt, your earnings are securely transferred
                to you.
              </Text>
            </View>
          </View>
        </View>

        {/* Trust & Safety Section */}
        <View style={[styles.section, styles.trustSection]}>
          <Text style={styles.sectionTitle}>Trust & Safety</Text>
          <View style={styles.trustContainer}>
            <View style={styles.trustItem}>
              <Ionicons
                name="shield-checkmark-outline"
                size={36}
                color={COLORS.accent.blue}
              />
              <Text style={styles.trustTitle}>Buyer Protection</Text>
              <Text style={styles.trustDescription}>
                Shop with peace of mind. We protect your purchase every step of the way.
              </Text>
            </View>

            <View style={styles.trustItem}>
              <Ionicons name="car-outline" size={36} color={COLORS.accent.blue} />
              <Text style={styles.trustTitle}>Seller Security</Text>
              <Text style={styles.trustDescription}>
                We verify transactions and ensure you get paid for every sale you make.
              </Text>
            </View>

            <View style={styles.trustItem}>
              <Ionicons
                name="checkmark-done-circle-outline"
                size={36}
                color={COLORS.accent.blue}
              />
              <Text style={styles.trustTitle}>Authenticity Guarantee</Text>
              <Text style={styles.trustDescription}>
                Our experts review items to ensure you receive genuine, high-quality
                pieces.
              </Text>
            </View>
          </View>
        </View>

        {/* Call to Action Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Join the SecondSpin Community</Text>
          <Text style={styles.ctaText}>
            Ready to give your wardrobe a second life? Start buying or selling today.
          </Text>
          <View style={styles.ctaButtons}>
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
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerBrand}>
              <View style={styles.footerLogoContainer}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                  <MaterialIcons name="cached" size={24} color={COLORS.text.primary} />
                </Animated.View>
                <Text style={styles.footerLogoText}>SECONDSPIN</Text>
              </View>
              <Text style={styles.footerTagline}>
                The future of fashion is circular.
              </Text>
            </View>

            <View style={styles.footerLinks}>
              <View style={styles.footerColumn}>
                <Text style={styles.footerColumnTitle}>Shop</Text>
                <Text style={styles.footerLink}>Accessories</Text>
                <Text style={styles.footerLink}>Womens</Text>
                <Text style={styles.footerLink}>Mens</Text>
              </View>

              <View style={styles.footerColumn}>
                <Text style={styles.footerColumnTitle}>Company</Text>
                <Text style={styles.footerLink}>About Us</Text>
                <Text style={styles.footerLink}>Careers</Text>
              </View>

              <View style={styles.footerColumn}>
                <Text style={styles.footerColumnTitle}>Support</Text>
                <Text style={styles.footerLink}>Help Center</Text>
                <Text style={styles.footerLink}>Contact Us</Text>
              </View>
            </View>
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
    backgroundColor: COLORS.background.primary,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border.medium,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  logoText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  headerIcons: {
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
  navigation: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.sm,
    gap: SPACING.lg,
  },
  navLink: {
    fontSize: FONT_SIZES.md,
    fontWeight: '500',
    color: COLORS.text.muted,
  },
  navLinkActive: {
    color: COLORS.text.primary,
  },
  heroSection: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    borderRadius: 0,
  },
  heroOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  heroTitle: {
    fontSize: FONT_SIZES.display,
    fontWeight: 'bold',
    color: COLORS.text.inverse,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  heroSubtitle: {
    fontSize: FONT_SIZES.lg,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    paddingHorizontal: SPACING.lg,
    paddingVertical: SPACING.xxxl,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.hero,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  missionText: {
    fontSize: FONT_SIZES.lg,
    lineHeight: 26,
    color: 'rgba(17, 19, 24, 0.8)',
    textAlign: 'center',
  },
  valuesContainer: {
    gap: SPACING.lg,
  },
  valueCard: {
    backgroundColor: COLORS.background.primary,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border.medium,
    padding: SPACING.xxl - SPACING.md,
    alignItems: 'center',
  },
  valueIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  valueTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: FONT_SIZES.md,
    lineHeight: 22,
    color: 'rgba(17, 19, 24, 0.7)',
    textAlign: 'center',
  },
  stepsContainer: {
    gap: SPACING.xxl,
  },
  stepItem: {
    alignItems: 'center',
  },
  stepNumber: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.accent.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  stepNumberText: {
    fontSize: FONT_SIZES.xxxl,
    fontWeight: 'bold',
    color: COLORS.text.inverse,
  },
  stepTitle: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  stepDescription: {
    fontSize: FONT_SIZES.md,
    lineHeight: 22,
    color: 'rgba(17, 19, 24, 0.7)',
    textAlign: 'center',
  },
  trustSection: {
    backgroundColor: COLORS.background.primary,
    borderRadius: BORDER_RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.border.medium,
    marginHorizontal: SPACING.lg,
  },
  trustContainer: {
    gap: SPACING.xl,
  },
  trustItem: {
    alignItems: 'center',
  },
  trustTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginTop: SPACING.md,
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  trustDescription: {
    fontSize: FONT_SIZES.md,
    lineHeight: 22,
    color: 'rgba(17, 19, 24, 0.7)',
    textAlign: 'center',
  },
  ctaText: {
    fontSize: FONT_SIZES.lg,
    lineHeight: 24,
    color: 'rgba(17, 19, 24, 0.8)',
    textAlign: 'center',
    marginBottom: SPACING.xl,
  },
  ctaButtons: {
    gap: SPACING.md,
  },
  primaryButton: {
    backgroundColor: COLORS.accent.blue,
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.md + 2,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.text.inverse,
  },
  secondaryButton: {
    backgroundColor: COLORS.background.card,
    borderRadius: BORDER_RADIUS.sm,
    paddingVertical: SPACING.md + 2,
    paddingHorizontal: SPACING.xl,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: FONT_SIZES.lg,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  footer: {
    backgroundColor: COLORS.background.primary,
    borderTopWidth: 1,
    borderTopColor: COLORS.border.medium,
    paddingVertical: SPACING.xxxl,
    paddingHorizontal: SPACING.lg,
  },
  footerContent: {
    gap: SPACING.xxl,
  },
  footerBrand: {
    gap: SPACING.md,
  },
  footerLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  footerLogoText: {
    fontSize: FONT_SIZES.xl,
    fontWeight: 'bold',
    color: COLORS.text.primary,
  },
  footerTagline: {
    fontSize: FONT_SIZES.md,
    color: 'rgba(17, 19, 24, 0.7)',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: SPACING.lg,
  },
  footerColumn: {
    gap: SPACING.sm,
  },
  footerColumnTitle: {
    fontSize: FONT_SIZES.md,
    fontWeight: '600',
    color: COLORS.text.primary,
    marginBottom: SPACING.sm,
  },
  footerLink: {
    fontSize: FONT_SIZES.md,
    color: 'rgba(17, 19, 24, 0.7)',
  },
});
