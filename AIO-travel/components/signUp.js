import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../StyleSheet';


export default class signUp extends React.Component {
  state = {
    email:"",
    password:""
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Sign up</Text>
        <View style={styles.inputView}>
          <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({email:text})}/>
        </View>

        <View style={styles.inputView}>
          <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}/>
        </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text onPress={() => { this.props.navigation.goBack() }} 
            style={styles.loginText}>Back</Text>
          </TouchableOpacity>
      </View>
    );
  };
}; 