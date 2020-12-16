//React Native elements//
import React from 'react';
import { render } from 'react-dom';
import {Button, Text, View } from 'react-native';
import 'react-native-gesture-handler';
//Stylesheets//                                   
import styles from '../StyleSheet';
//Firebase//
require("firebase/auth");
require("firebase/firestore");
//var database = firebase.database();

import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class StartDate extends React.Component {sendData =() => {
    this.props.parentCallback(this.state.StartDate);
}; 
    state={ 
        visibility: false,
        StartDate: ""
    }
    

    handleConfirm=(date)=>{
        this.setState({StartDate:date.toDateString()})
        this.setState({visibility:false})
    }

    onPressCancel=()=>{
        this.setState({visibility:false})
    }

    onPressButton=()=>{
        this.setState({visibility:true})
    }

    render() {
        return(
        <View style={{alignItems:"center", justifyContent: "center"}}>
            <Button title="Select a Start Date" onPress={this.onPressButton}/>
            <Text style={{marginTop:"5%"}}>{this.state.StartDate}</Text>
            <DateTimePickerModal
            isVisible={this.state.visibility}
            onConfirm={this.handleConfirm}
            onCancel={this.onPressCancel}
            mode="date"
            />
        </View>
        )
    };
};
