import React, { Component } from 'react'
import {View, Text,Image,ImageBackground,StyleSheet,TextInput,Dimensions} from 'react-native'
import {AsyncStorage} from 'react-native';

export default class Home extends Component {
    componentWillMount = () => {
        AsyncStorage.getItem('token',(err, value)=>{
            if (value)
            {
            //    this.props.verify();
               console.log ("home"+value)
            }
        } );
     };
    render() {
        return (
            <View>
                <Text>aaaaaa</Text>
            </View>
        )
    }
}
