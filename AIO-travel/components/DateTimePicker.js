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

export default class DatePicker extends Component {
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
                <SafeAreaView>
                    {this.checkAndoroidIos(show, date, mode)}
                    </SafeAreaView>     
            );
        }
    }