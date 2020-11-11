//React Native elements//
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
// Stylesheets//
import styles from '../StyleSheet';

//Firebase//
import firebase from "firebase/app";

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


export default class Loading extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged( user => {
            this.props.navigation.navigate( user ? 'Home' : 'Login')
        })
    }
    render() {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
          {/* <ActivityIndicator size="large" /> */}
        </View>
      )
    }
  }