import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../StyleSheet';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default class Login extends React.Component {
  
  state = {
    email:"",
    password:""
  }
  render() {
    return (
      
      <View style={styles.container}>
        <Text style={styles.logo}>Log in</Text>
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
        
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text 
              onPress={() => this.props.navigation.navigate('SignUp')} 
              style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
      </View>
    );
  };
}; 