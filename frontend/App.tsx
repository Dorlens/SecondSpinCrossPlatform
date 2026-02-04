import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  HomeScreen,
  ShopScreen,
  SellScreen,
  AboutScreen,
  SignupScreen,
  LoginScreen,
} from './components/screens';
import { RootStackParamList } from './types';
import SplashScreen from './components/screens/SplashScreen';
import * as ExpoSplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [appIsReady, setAppIsReady] = React.useState(false);

    // Artificially delay for 1 second to simulate a slow loading
    useEffect(() => {
      const prepare = async () => {
       const timer =  setTimeout(() => onSplashFinish(), 1000);
        return () => clearTimeout(timer);
      };
      prepare();
      
    }, []);
  
    const onSplashFinish = async () => {
      setAppIsReady(true);
      await ExpoSplashScreen.hideAsync();
    };
  
    if (!appIsReady) {
      return <SplashScreen onFinish={onSplashFinish} />;
    }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Shop" component={ShopScreen} />
          <Stack.Screen name="Sell" component={SellScreen} />
          <Stack.Screen name="AboutUs" component={AboutScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
