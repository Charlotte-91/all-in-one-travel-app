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
import SignUp from './components/SignUp';
import Home from './components/Home';
import Loading from './components/Loading';
import AddTrip from './components/AddTrip';



const Stack = createStackNavigator();

//Firebase configuration
import firebaseConfig from "./firebase"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var config = {
  databaseURL: "https://all-in-one-travel-app.firebaseio.com/",
  projectId: "all-in-one-travel-app",
};


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
           <Stack.Screen
            name = "AddTrip"
            component={AddTrip}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  }
}
