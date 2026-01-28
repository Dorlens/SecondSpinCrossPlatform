import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import  Shop  from './components/Shop';
import Sell from './components/Sell';
import About from './components/AboutUs';
export type RootStackParamList = {
    Home: undefined;
    Shop: undefined;
    Sell: undefined;
    AboutUs: undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();
const App: React.FC = () =>
 {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Sell" component={Sell} />
         <Stack.Screen name="AboutUs" component={About} />

      </Stack.Navigator>

    </NavigationContainer>
  );
};
export default App;