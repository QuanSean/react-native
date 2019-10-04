import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions,FlatList,Image, ImageBackground, TouchableOpacity} from 'react-native'
const { height } = Dimensions.get('window');
import CardItem from './Card'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import iconAdd from './../../../Images/iconAdd.png'
import {connect} from 'react-redux'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state={
            dataSource:[{"name":"Quan"},{"name":"Quan"},{"name":"Quan"},{"name":"Quan"}]
        }
    }
    render() {
        // const {navigate} = this.props.navigation;
        console.log ("aaa")
        console.log(this.props.navigate.navigate)
        
        return (

            <View style={{flex:1, backgroundColor:'#ededed', justifyContent:'center', alignItems:'center'}}>
                {/* <View onPress={()=>console}><Text>AAAA</Text></View> */}
                <FlatList data={
                    this.state.dataSource
                }
                    renderItem={({Card}) => <CardItem/>}
                />
                {/* <TouchableOpacity style={styles.buttonStyle} onPress={this.props.createProject}> */}
                <TouchableOpacity style={styles.buttonStyle} onPress={()=>this.props.navigate.navigate(('NewProject'))}>

                        <ImageBackground  source={iconAdd} style={{width:25, height:25}} />
                    
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state
})
export default connect(mapStateToProps)(Index);
var styles= StyleSheet.create({
    buttonStyle:{
        width:45,
        height:45,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#34af89',
        position: 'absolute',
        bottom:15,
        right:15,
        margin:0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
