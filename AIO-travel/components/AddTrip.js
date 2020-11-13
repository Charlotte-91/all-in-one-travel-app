//React Native elements//
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { Component }  from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
//Stylesheets//
import styles from '../StyleSheet';
//Firebase//
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");

export default class AddTrip extends React.Component {
    state = {
        TripName: "",
        Location:"",
        Dates: "",
        Notes: ""
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.inputView}>  
            <TextInput
          style={styles.inputText}
          placeholder="Trip name"
          placeholderTextColor="#003f5c"
          onChangeText={TripName => this.setState({ TripName })}
          value={this.state.TripName}
          />
          </View>
          <View style={styles.inputView}> 
             <TextInput
          style={styles.inputText}
          placeholder="Location"
          placeholderTextColor="#003f5c"
          onChangeText={Location => this.setState({ Location })}
          value={this.state.Location}
          />
          </View>

          <label for="start">Start date:</label>

            <input type="date" id="start" name="trip-start"
                value="2020-07-22"
                min="2020-01-01" max="2100-12-31">
            </input>

            <label for="start">End date:</label>
            <input type="date" id="end" name="trip-end"
                value="2020-07-22"
                min="2020-01-01" max="2100-12-31">
            </input>

            <View style={styles.inputView}> 
             <TextInput
          style={styles.inputText}
          placeholder="Notes"
          placeholderTextColor="#003f5c"
          onChangeText={Notes => this.setState({ Notes })}
          value={this.state.Notes}
          />
            </View>
            </View>
        );
    }
}