import { Image, StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Currency from './src/screens/Currency';
import Time from './src/screens/Time';
import Crypto from './src/screens/Crypto';
const Stack = createNativeStackNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Currency" component={Currency} />
          <Stack.Screen name="Time" component={Time} />
          <Stack.Screen name="Crypto" component={Crypto} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
