import React, { Component } from 'react'
import {View, Text,Image,ImageBackground,StyleSheet,TextInput,Dimensions} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const {width:WIDTH} = Dimensions.get('window')
export default class PressInfo extends Component {
    render() {

        return (
            <View  style={styles.loginBackgroundContainer}>
                    <View style={styles.logoContnet} >
                        <Image style={styles.logo} /> 
                        <Text style={styles.textLogo}>BAMBOO QUEST</Text>
                    </View>
                    <View style={styles.loginView}>
                        <TextInput style={styles.loginInputLogo} placeholder={'Nhập mã phòng'} placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent'/>
                    </View>
                    <View  style={styles.loginView}>
                        <TextInput secureTextEntry={true} style={styles.loginInputLogo} placeholder={'Nhập tên'} placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent'/>
                    </View>
                    <View  style={styles.loginView}>
                        <TouchableOpacity style={styles.loginBtnLogin} >
                            <Text style={{fontSize:20,color:"#fff"}}>CHƠI</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.loginView}>
                        <Text onPress={() => this.props.navigation.goBack()} style={{fontSize:15,color:"#e5e5e5"}}>Quay lại</Text>
                    </View>
                    



            </View>
        )

    }
}
const styles = StyleSheet.create({
    
    loginBackgroundContainer: {
        flex: 1,
        backgroundColor:"#f43d3d",
        justifyContent:"center",
        alignItems:"center",

    },
    loginContainerView:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        height:null,
        width:null,
        backgroundColor:"#0a0a0a70"
    },
    loginView:{
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center",
    },
    logoContnet:{
        alignItems:"center",
        marginBottom:20
    },
    logo:{

    },
    textLogo:{
        color:"#fff",
        fontSize:30

    },
    loginInputLogo:{
        width:WIDTH-25,
        height:55,
        borderRadius:25,
        fontSize:16,
        paddingLeft: 20,
        backgroundColor:'#fff',
        color:'#000',
        marginHorizontal:25
    },
    loginIconAuth:{
        position:'absolute',
        width:25,
        height:25,
        top:15,
        left:37
    },
    loginBtnLogin:{
        width:WIDTH-25,
        height:55,
        borderRadius:25,
        backgroundColor:'#a00000',
        color:'#666666',
        marginHorizontal:25 ,        
        justifyContent:"center",
        alignItems:"center",
        fontSize:50,
        
    }
    
});
