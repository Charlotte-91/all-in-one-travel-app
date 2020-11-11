//React Native elements//
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Text, View, AppRegistry } from 'react-native';
//React Navigation//
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
//Firebase//
import firebase from "firebase/app";
// import * as firebase from "firebase/app";
// import auth from '@react-native-firebase/auth';
// Stylesheets//
import styles from './StyleSheet';
//Screens//
import Login from './components/Login';
import SignUp from './components/signUp';
import Home from './components/Home';
import Loading from './components/Loading';



const Stack = createStackNavigator();

//Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAUOBa16C-kSrd8QEP0Qoblem87C0fdPqg",
  authDomain: "all-in-one-travel-app.firebaseapp.com",
  databaseURL: "https://all-in-one-travel-app.firebaseio.com",
  projectId: "all-in-one-travel-app",
  storageBucket: "all-in-one-travel-app.appspot.com",
  messagingSenderId: "465134482525",
  appId: "1:465134482525:web:32dfb18f9779f5b735c9b4",
  measurementId: "G-3EZ8RQ4477"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name = "Loading"
            component={Loading}
          />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name = "SignUp"
            component={SignUp}
          />
           <Stack.Screen
            name = "Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}
