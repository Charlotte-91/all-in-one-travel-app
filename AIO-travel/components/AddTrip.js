//React Native elements//
import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { Component, useState }  from 'react';
import { render } from 'react-dom';
import {Button, Text, View, TextInput, TouchableOpacity, SafeAreaView, Platform, useEffect } from 'react-native';
import 'react-native-gesture-handler';
//Stylesheets//
import styles from '../StyleSheet';
//Firebase//
import {db} from '../config';


import DateTimePicker from '@react-native-community/datetimepicker';
import Modal from 'react-native-modal';
import Start from './StartDatePicker'
import EndDate from './EndDatePicker'




export default class AddTrip extends React.Component {
    state = {
        TripName:"",
        Location:"",
        StartDate:"",
        EndDate:"",
        Notes:""
    };

    callbackFunction = (StartDate) => {
        this.setState({StartDate: StartDate})
    }

    handleTrip = () => {
        let userRef = db.ref('users/' + 'trip/'); 
        userRef.set(
            this.state
        )
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => this.setState({errorMessage: error.message}))
    };
    render() {

        return (
        <View style={styles.container}>
            <View style={styles.inputView}>  
            <TextInput
          style={styles.inputText}
          placeholder="Trip Name"
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
            <Start parentCallBack = {this.callbackFunction}/>
            
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