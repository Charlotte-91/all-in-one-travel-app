//React Native elements//
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Text, View, AppRegistry } from 'react-native';
//React Navigation//
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// Stylesheets//
import styles from './StyleSheet';
//Screens//
import Login from './components/Login';
import SignUp from './components/signUp';


const Stack = createStackNavigator();


export default class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name = "SignUp"
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}
