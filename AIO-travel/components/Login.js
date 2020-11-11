//React Native elements//
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
//Stylesheets//
import styles from '../StyleSheet';
//Firebase//
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

export default class Login extends React.Component {
  
  state = {
    email:"",
    password:"",
    errorMessage: null
  }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => this.props.navigation.navigate('Home'))
    .catch(error => this.setState({errorMessage: error.message}))
  }
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.logo}>Log in</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
          secureTextEntry
          autoCapitalize="none"
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          />
        </View>
        
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}
            onPress={this.handleLogin}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text 
              onPress={() => this.props.navigation.navigate('SignUp')} 
              style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
      </View>
    );
  };
}; 