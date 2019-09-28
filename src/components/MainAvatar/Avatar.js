import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet,TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements';
const {width:WIDTH} = Dimensions.get('window')
const {height:HEIGHT} = Dimensions.get('window')
export default class Avatar extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:"#209b74", justifyContent:'center',alignItems:'center'}}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    }}
                    showEditButton
                    />
                <TouchableOpacity onPress={() => navigate('PressInfo')} style={styles.buttonPlay}>
                    <Text style={{color:'#18a58c8a',fontWeight: 'bold', fontSize:17}}>CHƠI NGAY</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
var styles= StyleSheet.create({
    buttonPlay:{
        height:HEIGHT/10,
        width:WIDTH-25,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        justifyContent:'center',
        alignItems:"center"
    }
})

