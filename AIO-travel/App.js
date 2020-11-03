import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import Startpage from './startPage';
import styles from './StyleSheet';

export default function App() {
  return (
    <View style={styles.container}>
      <Startpage/>
    </View>
  );
}
