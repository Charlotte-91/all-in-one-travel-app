//React Native elements//
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { Component, useState }  from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import 'react-native-gesture-handler';
//Stylesheets//
import styles from '../StyleSheet';
//Firebase//
import firebase from "firebase/app";
require("firebase/auth");
require("firebase/firestore");
//var database = firebase.database();

import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import StartDate from './StartDatePicker'
import EndDate from './EndDatePicker'

export default class AddTrip extends React.Component {
    state = {
        TripName: "",
        Location:"",
        StartDate: "",
        EndDate:"",
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
            <StartDate></StartDate> 
            <EndDate></EndDate>


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