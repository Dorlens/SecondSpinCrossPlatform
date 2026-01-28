import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {Animated, Easing} from 'react-native';
import{useEffect, useRef} from 'react';
const jacketsImage = require('../assets/IMG_4457 copy.jpeg');
// const sweetshirtImage = require('./assets/IMG_4429.jpeg');
const ihpbaggyjorts = require('../assets/IMG_4460 copy.jpeg');
// const varsityjacket = require('./assets/IMG_4469.jpeg');

const { width } = Dimensions.get('window');


type HomeScreenProps ={
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>
};


type Product = {
  id: number;
  image: any;
  title: string;
  user: string;
  price: number;
  condition: string;
};

const products: Product[] = [
  {
    id: 1,
    image: jacketsImage,
    title: 'Jacket',
    user: 'John Doe',
    price: 100,
    condition: 'New',
  },

  {
    id: 2,
    image: ihpbaggyjorts,
    title: 'Baggy Jorts',
    user: 'Jane Smith',
    price: 50,
    condition: 'Used',
  },
]
type SellerCardProps = {
  name: string;
  rating: string;
  reviews: string;
};

type ProductCardProps = {
  image: any;
  title: string;
  seller: string;
  price: string;
};

const HomeScreen = ({navigation}: HomeScreenProps) =>{
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
          <View style={styles.headerLeft}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
            <MaterialIcons name="cached" size={24} color="#000000ff" />
            </Animated.View>
            <Text style={styles.logo}>SECONDSPIN</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.cartButton}>
                <Ionicons name="cart-outline" size={22} color="#111318" />
              </TouchableOpacity>
          </View>
        </View>

        {/* Navigation */}
        <View style={styles.nav}>
          <TouchableOpacity 
            style={styles.navItem}
            onPress={() => navigation.navigate('Shop')}
            >
            <Text style={styles.navText} >Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity 
             style={styles.navItem} onPress={() => navigation.navigate('Sell')}>
              
              
            <Text style={styles.navText}>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.navText}>About Us</Text>
          </TouchableOpacity>
        </View>

        {/* Auth Buttons */}
        <View style={styles.authContainer}>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Log In</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Resell. Rediscover. Repeat.</Text>
          
          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color="#616f89" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search for brands, items, or sellers..."
              placeholderTextColor="#616f89"
            />
          </View>

          {/* Category Pills */}
          <View style={styles.categoryContainer}>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryText}>Menswear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryText}>Womenswear</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryPill}>
              <Text style={styles.categoryText}>Accessories</Text>
            </TouchableOpacity>
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
            {/* <ProductCard
              image={sweetshirtImage}
              title="Hidden Season Sweatshirt"
              seller="@dapperthreads"
              price="$200.00"
            /> */}
            <ProductCard
              image={ihpbaggyjorts}
              title="IHP Baggy Jorts"
              seller="@sunnycloset"
              price="$160.00"
            />
            {/* <ProductCard
              image={varsityjacket}
              title="Varsity Jacket"
              seller="@luxeexchange"
              price="$250.00"
            /> */}
          </View>
        </View>

        {/* Top Sellers */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Top Sellers</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sellerScroll}>
            <SellerCard name="@vintagevogue" rating="4.9" reviews="1.2k" />
            <SellerCard name="@streetstyleking" rating="5.0" reviews="890" />
            <SellerCard name="@minimalistchic" rating="4.8" reviews="2.5k" />
            <SellerCard name="@archivefashion" rating="4.9" reviews="742" />
            <SellerCard name="@gemsandthings" rating="5.0" reviews="3.1k" />
          </ScrollView>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 SECONDSPIN. All rights reserved.</Text>
        </View>
      </ScrollView>
    </View>
  );
}


const ProductCard = ({ image, title, seller, price }: ProductCardProps) => (
  <View style={styles.productCard}>
    <Image source={image} style={styles.productImage} />
    <View style={styles.productOverlay}>
      <TouchableOpacity style={styles.favoriteButton}>
        <MaterialIcons name="favorite-border" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle} numberOfLines={1}>{title}</Text>
        <Text style={styles.productSeller}>{seller}</Text>
        <Text style={styles.productPrice}>{price}</Text>
      </View>
    </View>
  </View>
);

const SellerCard = ({ name, rating, reviews }: SellerCardProps) => (
  <View style={styles.sellerCard}>
    <View style={styles.sellerAvatar}>
      <MaterialIcons name="person" size={40} color="#616f89" />
    </View>
    <Text style={styles.sellerName}>{name}</Text>
    <View style={styles.ratingContainer}>
      <MaterialIcons name="star" size={16} color="#fbbf24" />
      <Text style={styles.ratingText}>{rating} ({reviews})</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f2f4',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
    marginTop:50
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111318',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  cartButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 24,
  },
  navItem: {
    paddingHorizontal: 8,
  },
  navText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111318',
  },
  authContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  signUpButton: {
    backgroundColor: '#f0f2f4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  signUpText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#f0f2f4',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  loginText: {
    color: '#111318',
    fontWeight: 'bold',
    fontSize: 14,
  },
  heroSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#111318',
    textAlign: 'center',
    marginBottom: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f2f4',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111318',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  categoryPill: {
    backgroundColor: '#f0f2f4',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111318',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111318',
    marginBottom: 16,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  productCard: {
    width: (width - 44) / 2,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
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
    padding: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  favoriteButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 8,
    borderRadius: 20,
  },
  productInfo: {
    marginTop: 24,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  productSeller: {
    fontSize: 12,
    color: '#e5e7eb',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  sellerScroll: {
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  sellerCard: {
    alignItems: 'center',
    marginRight: 20,
    width: 100,
  },
  sellerAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f2f4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  sellerName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111318',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 11,
    color: '#616f89',
  },
  footer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f2f4',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#616f89',
  },
});

export default HomeScreen;