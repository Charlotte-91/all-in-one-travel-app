import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Text, View } from 'react-native';
import styles from './StyleSheet';

function Startpage() {
    return (
      <View style={styles.container}>
        <Button
          title="Log in"
          color="#0ADFC8"
          onPress={() => Alert.alert('Will log user in')}
        />
        <Button
          title="Sign up"
          color="#0ADFC8"
          onPress={() => Alert.alert('Will take user to sign up page')}
        />
      </View>
    );
  }
  
  
export default Startpage;