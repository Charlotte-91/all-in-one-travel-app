//React Native elements//
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
//Stylesheets//
import styles from '../StyleSheet';
//Firebase
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

export default class signUp extends React.Component {
  state = {
    email:"",
    password:"",
    errorMessage: null
  }
handleSignUp = () => {
  const { email, password } = this.state
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate('Home'))
    .catch(error => this.setState({errorMessage: error.message}))
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Sign up</Text>
          {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {this.state.errorMessage}
            </Text>}
          
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="#003f5c"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="#003f5c"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
        </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text 
              onPress = {this.handleSignUp} 
              style={styles.loginText}>Sign up
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text 
              onPress={() => { this.props.navigation.goBack() }} 
              style={styles.loginText}>Back
            </Text>
          </TouchableOpacity>
      </View>
    );
  };
}; 