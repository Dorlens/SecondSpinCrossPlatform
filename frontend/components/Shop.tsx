import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Easing,
  Animated,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // or react-native-vector-icons
const jacketsImage = require('../assets/IMG_4457 copy.jpeg');
const sweetshirtImage = require('../assets/IMG_4429.jpeg');
function Shop() {
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
          <View style={styles.headerTop}>
            <View style={styles.headerLeft}>
              <View style={styles.logoContainer}>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <MaterialIcons name="cached" size={24} color="#000000ff" />
                </Animated.View>
                <Text style={styles.logoText}>SECONDSPIN</Text>
              </View>
              <View style={styles.nav}>
                <TouchableOpacity>
                  <Text style={styles.navLinkActive}>Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.navLink}>Sell</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.navLink}>About</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.searchContainer}>
              <Ionicons name="search" size={20} color="#999" />
              <TextInput
                style={styles.searchInput}
                placeholder="Search for items, brands, and users"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.iconButtons}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="person-outline" size={24} color="#111" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="mail-outline" size={24} color="#111" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="heart-outline" size={24} color="#111" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="bag-outline" size={24} color="#111" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Category Filters */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
            contentContainerStyle={styles.filterContainer}
          >
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

            <View style={styles.filterDivider} />

            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Brand</Text>
              <Ionicons name="chevron-down" size={18} color="#111" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Condition</Text>
              <Ionicons name="chevron-down" size={18} color="#111" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Size</Text>
              <Ionicons name="chevron-down" size={18} color="#111" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Price Range</Text>
              <Ionicons name="chevron-down" size={18} color="#111" />
            </TouchableOpacity>
          </ScrollView>
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
                  <Ionicons name="heart-outline" size={20} color="#111" />
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
                  <Ionicons name="heart-outline" size={20} color="#111" />
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
          <Animated.View style={{transform: [{rotate: spin}]}}>
                <MaterialIcons name="cached" size={24} color="#000000ff" />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
  },
  headerTop: {
    padding: 16,
  },
  headerLeft: {
    marginBottom: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
  },
  nav: {
    flexDirection: 'row',
    gap: 24,
  },
  navLinkActive: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  navLink: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 16,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#111',
  },
  iconButtons: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-end',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterScroll: {
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  filterContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  categoryGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#111',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryTextActive: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryButton: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categoryText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  filterDivider: {
    width: 1,
    height: 32,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 8,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 12,
    paddingVertical: 8,
    gap: 4,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
  },
  main: {
    padding: 16,
    flexDirection: 'row',
    
  },
  grid: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 16,
  },
  productCard: {
    width: '48%',



  },
  productImage: {
    width: '100%',
    aspectRatio: 3 / 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 12,

  },
  productImageStyle: {
    borderRadius: 8,

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
    marginTop: 8,
    gap: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111',
  },
  productUser: {
    fontSize: 12,
    color: '#999',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111',
  },
  productCondition: {
    fontSize: 12,
    color: '#999',
  },
  footerLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 32,
    marginBottom: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 16,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  footerLink: {
    fontSize: 12,
    color: '#999',
  },
});

export default Shop;
