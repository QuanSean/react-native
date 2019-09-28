import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions,FlatList,Image, ImageBackground,TouchableOpacity} from 'react-native'
import card from './../../../Images/card.png'
import { Card,Button} from 'react-native-elements'

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');


export default class Item extends Component {
    render() {
        const props = this.props;
        return (
            <TouchableOpacity onPress={()=>alert(props)} style={styles.card}>
                <ImageBackground source={card} style={styles.image}/>
                <Text style={styles.text}>Ai là triệu phú</Text>
                <Text style={styles.descripsion}>Ai là triệu phú</Text>
            </TouchableOpacity>
        )
    }
}
var styles= StyleSheet.create({
    card:{
        width:width-20,
        backgroundColor:"#fff",
        paddingBottom:30,
        marginTop:20,
        borderRadius:10,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    image:{
        flex:2,
        height:height/4
    },
    text:{
        flex:1,
        padding:10,
        fontSize:18,
        fontWeight: "bold",
        color:"#34af89"
    },
    descripsion:{
        flex:1,
        padding:10,
        fontSize:15,
        fontWeight: "bold",
        color:"#878787" 
    }
})
