//React Native elements //
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Text, View, AppRegistry } from 'react-native';
// Stylesheets//
import styles from './StyleSheet';
//Screens//
import Startpage from './src/startPage';

export default class App extends React.Component {

  render(){
    return (
      <Startpage/>
    );
  }
}


