import {
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { navigationRef } from '../store/NavigationService';

//navigation screens 
import Home from '../screens/NavigationScreens/Home/Home';

import DetailScreen from '../screens/NavigationScreens/Home/DetailScreen';

const Stack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const HomeStackScreen = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = props => {
  return (
    <NavigationContainer
      initialRouteName={'HomeStack'}
      ref={navigationRef}>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="HomeStack" component={HomeStackScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
