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

export default class EndDate extends React.Component {
    state={ 
        visibility: false,
        EndDate: ""
    }

    handleConfirm=(date)=>{
        this.setState({EndDate:date.toDateString()})
        this.setState({visibility:false})
        this.props.updateData(this.state.EndDate)
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
            <Button title="Select an End Date" onPress={this.onPressButton}/>
            <Text style={{marginTop:"5%"}}>{this.state.EndDate}</Text>
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
