import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

function About() {
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
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {/* Logo */}
            <View style={styles.logoContainer}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
            <MaterialIcons name="cached" size={24} color="#000000ff" />
            </Animated.View>
              <Text style={styles.logoText}>SECONDSPIN</Text>
            </View>

            {/* Header Icons */}
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="search-outline" size={22} color="#111318" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="cart-outline" size={22} color="#111318" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Navigation */}
          <View style={styles.navigation}>
            <TouchableOpacity>
              <Text style={styles.navLink}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navLink}>Shop</Text>
            </TouchableOpacity>
            <TouchableOpacity>
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
              Join the movement towards a more sustainable and stylish future. Buy and sell pre-loved fashion with confidence.
            </Text>
          </View>
        </ImageBackground>

        {/* Mission Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            Our mission is to make sustainable fashion accessible to everyone. We believe in the power of circularity to reduce waste and inspire a new generation of conscious consumers. SecondSpin is more than a marketplace; it's a community dedicated to extending the life of great style.
          </Text>
        </View>

        {/* Values Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Values</Text>
          <View style={styles.valuesContainer}>
            {/* Value Card 1 */}
            <View style={styles.valueCard}>
              <View style={styles.valueIconContainer}>
                <Ionicons name="leaf-outline" size={32} color="#3B82F6" />
              </View>
              <Text style={styles.valueTitle}>Sustainability First</Text>
              <Text style={styles.valueDescription}>
                We champion a circular economy to reduce fashion waste and promote conscious consumption.
              </Text>
            </View>

            {/* Value Card 2 */}
            <View style={styles.valueCard}>
              <View style={styles.valueIconContainer}>
                <Ionicons name="people-outline" size={32} color="#3B82F6" />
              </View>
              <Text style={styles.valueTitle}>Community-Driven</Text>
              <Text style={styles.valueDescription}>
                We build a trusted space where style enthusiasts can connect, share, and inspire each other.
              </Text>
            </View>

            {/* Value Card 3 */}
            <View style={styles.valueCard}>
              <View style={styles.valueIconContainer}>
                <Ionicons name="checkmark-circle-outline" size={32} color="#3B82F6" />
              </View>
              <Text style={styles.valueTitle}>Style Authenticity</Text>
              <Text style={styles.valueDescription}>
                Show off your personal style and discover authentic, high-quality pieces from sellers you can trust.
              </Text>
            </View>
          </View>
        </View>

        {/* How It Works Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>
          <View style={styles.stepsContainer}>
            {/* Step 1 */}
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <Text style={styles.stepTitle}>List Your Item</Text>
              <Text style={styles.stepDescription}>
                Snap photos, add details, and set your price. Listing is simple and free.
              </Text>
            </View>

            {/* Step 2 */}
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <Text style={styles.stepTitle}>Ship to Buyer</Text>
              <Text style={styles.stepDescription}>
                Once your item sells, use our prepaid label to ship it out to its new home.
              </Text>
            </View>

            {/* Step 3 */}
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <Text style={styles.stepTitle}>Get Paid</Text>
              <Text style={styles.stepDescription}>
                After the buyer confirms receipt, your earnings are securely transferred to you.
              </Text>
            </View>
          </View>
        </View>

        {/* Trust & Safety Section */}
        <View style={[styles.section, styles.trustSection]}>
          <Text style={styles.sectionTitle}>Trust & Safety</Text>
          <View style={styles.trustContainer}>
            {/* Buyer Protection */}
            <View style={styles.trustItem}>
              <Ionicons name="shield-checkmark-outline" size={36} color="#3B82F6" />
              <Text style={styles.trustTitle}>Buyer Protection</Text>
              <Text style={styles.trustDescription}>
                Shop with peace of mind. We protect your purchase every step of the way.
              </Text>
            </View>

            {/* Seller Security */}
            <View style={styles.trustItem}>
              <Ionicons name="car-outline" size={36} color="#3B82F6" />
              <Text style={styles.trustTitle}>Seller Security</Text>
              <Text style={styles.trustDescription}>
                We verify transactions and ensure you get paid for every sale you make.
              </Text>
            </View>

            {/* Authenticity Guarantee */}
            <View style={styles.trustItem}>
              <Ionicons name="checkmark-done-circle-outline" size={36} color="#3B82F6" />
              <Text style={styles.trustTitle}>Authenticity Guarantee</Text>
              <Text style={styles.trustDescription}>
                Our experts review items to ensure you receive genuine, high-quality pieces.
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
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Start Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryButton}>
              <Text style={styles.secondaryButtonText}>Become a Seller</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.footerBrand}>
              <View style={styles.footerLogoContainer}>
               <Animated.View style={{transform: [{rotate: spin}]}}>
                    <MaterialIcons name="cached" size={24} color="#000000ff" />
                </Animated.View>
                <Text style={styles.footerLogoText}>SECONDSPIN</Text>
              </View>
              <Text style={styles.footerTagline}>The future of fashion is circular.</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  // Header Styles
  header: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingTop: 12,
    paddingBottom: 8,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111318',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  navLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999',
  },
  navLinkActive: {
    color: '#111318',
  },
  // Hero Section
  heroSection: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
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
    paddingHorizontal: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: 24,
  },
  // Section Styles
  section: {
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111318',
    textAlign: 'center',
    marginBottom: 24,
  },
  // Mission Section
  missionText: {
    fontSize: 16,
    lineHeight: 26,
    color: 'rgba(17, 19, 24, 0.8)',
    textAlign: 'center',
  },
  // Values Section
  valuesContainer: {
    gap: 16,
  },
  valueCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 20,
    alignItems: 'center',
  },
  valueIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111318',
    marginBottom: 8,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(17, 19, 24, 0.7)',
    textAlign: 'center',
  },
  // Steps Section
  stepsContainer: {
    gap: 32,
  },
  stepItem: {
    alignItems: 'center',
  },
  stepNumber: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#3B82F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  stepNumberText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111318',
    marginBottom: 8,
    textAlign: 'center',
  },
  stepDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(17, 19, 24, 0.7)',
    textAlign: 'center',
  },
  // Trust Section
  trustSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginHorizontal: 16,
  },
  trustContainer: {
    gap: 24,
  },
  trustItem: {
    alignItems: 'center',
  },
  trustTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111318',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  trustDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(17, 19, 24, 0.7)',
    textAlign: 'center',
  },
  // CTA Section
  ctaText: {
    fontSize: 16,
    lineHeight: 24,
    color: 'rgba(17, 19, 24, 0.8)',
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaButtons: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111318',
  },
  // Footer
  footer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingVertical: 40,
    paddingHorizontal: 16,
  },
  footerContent: {
    gap: 32,
  },
  footerBrand: {
    gap: 12,
  },
  footerLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerLogoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111318',
  },
  footerTagline: {
    fontSize: 14,
    color: 'rgba(17, 19, 24, 0.7)',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerColumn: {
    gap: 8,
  },
  footerColumnTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111318',
    marginBottom: 8,
  },
  footerLink: {
    fontSize: 14,
    color: 'rgba(17, 19, 24, 0.7)',
  },
});

export default About;