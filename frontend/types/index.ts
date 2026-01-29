import { ImageSourcePropType } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Navigation types
export type RootStackParamList = {
  Home: undefined;
  Shop: undefined;
  Sell: undefined;
  AboutUs: undefined;
};

export type ScreenName = keyof RootStackParamList;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, keyof RootStackParamList>;

// Product types
export interface Product {
  id: number;
  image: ImageSourcePropType;
  title: string;
  user: string;
  price: number;
  condition: string;
}

// Component prop types
export interface ProductCardProps {
  image: ImageSourcePropType;
  title: string;
  seller: string;
  price: string;
  onPress?: () => void;
  onFavorite?: () => void;
}

export interface SellerCardProps {
  name: string;
  rating: string;
  reviews: string;
  onPress?: () => void;
}

export interface HeaderProps {
  navigation: NavigationProp;
  currentScreen: ScreenName;
  showSearch?: boolean;
  showCart?: boolean;
}

export interface FooterProps {
  showLogo?: boolean;
  showLinks?: boolean;
}
