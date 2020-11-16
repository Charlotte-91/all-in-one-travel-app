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
var database = firebase.database();

export default class AddTrip extends React.Component {
    state = {
        TripName: "",
        Location:"",
        StartDate: "",
        EndDate:"",
        Notes: ""
    }

    // handleTrip = () => {
    //     const { TripName, Location, StartDate, EndDate, Notes} = this.state
    //     firebase
           
    //     .then(() => this.props.navigation.navigate('Home'))
    //     .catch(error => this.setState({errorMessage: error.message}))
    //   }
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

            <input type="date" id="trip-start" name="trip-start"
                min="2020-01-01" max="2100-12-31">
            </input>

            <label for="start">End date:</label>
            <input type="date" id="trip-end" name="trip-end"
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
            <TouchableOpacity style={styles.loginBtn}>
            <Text 
                style={styles.loginText}
                onPress={this.handleTrip}>Add Trip
            </Text>
            </TouchableOpacity>
            </View>
        );
    }
}