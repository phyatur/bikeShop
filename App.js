import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import CartList from './components/CartList';

export default function App() {

  const MainNavigator = createStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
          <MainNavigator.Screen name='Login' component={Login} />
          <MainNavigator.Screen name='Home' component={Home} />
          <MainNavigator.Screen name='CartList' component={CartList} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

