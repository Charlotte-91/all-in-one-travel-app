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

export default class AddTrip extends Component {
    state = {
        TripName: "",
        Location:"",
        StartDate: "",
        EndDate:"",
        Notes: "",
        date: new Date(),
        mode:'date',
        show: false,
        //
        showDate:false
    }
    setDate =(event, date)=>{
        date=date||this.state.state
        this.setState({
            show: Platform.OS==='ios'?true:false,
            date,
        });
    }
    show= mode=>{
        this.setState({
            show:true,
            mode,
        });
    }
    datepicker=()=>{
        this.show('date');
    }
    timepicker=()=>{
        this.show('time');
    }

    showDatepicker=()=>{
        this.setState({ showDate:!this.state.showDate, mode:'date'});
    }
    showTimepicker=()=>{
        this.setState({ showDate:!this.state.showDate, mode:'time'});
    }
    checkAndoroidIos(show, date, mode){
        if(Platform.OS==='ios'){
            return(
                <View>
                    <View>
                        <Button onPress={this.showDatepicker} title="Show date picker!" />
                    </View>
                    <View> 
                        <Button onPress={this.showTimepicker} title="Show time picker!" />
                    </View>
                        <View style={{height:300}}>
                            <Modal
                            isVisible={this.state.showDate}>
                                <View style={{backgroundColor:"#fff", height:250,
                                justifyContent:'center',
                                margin:200
                            }}>
                                <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate}
                        />
                        <Button title="Hide Modal" onPress={this.showDatepicker}>

                        </Button>
                                </View>
                            </Modal>
                    </View>
                </View>
            )
        }else{
            return(
                <View>
                    <View>
                        <Button onPress={this.showDatepicker} title="Show date picker!" />
                    </View>
                    <View> 
                        <Button onPress={this.showTimepicker} title="Show time picker!" />
                    </View>
                    {show && (
                        <DateTimePicker
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.setDate}
                        />
                    )}
                    </View>
                    
            )
        }
    };
    render() {
        
        const { show, date, mode } = this.state;
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
            <SafeAreaView>
                {this.checkAndoroidIos(show, date, mode)}
                </SafeAreaView>     


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