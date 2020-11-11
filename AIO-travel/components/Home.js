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

export default class Home extends React.Component {
  state = {currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }
  handleLogout = () => {
    firebase
    .auth()
    .signOut()
    .then(() => this.props.navigation.navigate('Loading'))
    .catch(error => this.setState({ errorMessage: error.message }));
    };
  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
        Hi
        </Text>
        <TouchableOpacity style={styles.loginBtn}>
          <Text 
            style={styles.loginText}
            onPress={this.handleLogout}>Log out
          </Text>
        </TouchableOpacity>
        
      </View>
    );
  };
}; 