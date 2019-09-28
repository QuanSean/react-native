import React, { Component } from 'react'
import {View, Text,Image,ImageBackground,StyleSheet,TextInput,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons'
import IconUser from '../../../Images/user.png'
import IconLock from '../../../Images/lock.png'
import Background from '../../../Images/background1.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler'
const {width:WIDTH} = Dimensions.get('window')
export default class Login extends Component {
    console(){
        console.log("AAAAAAAAAAAAAA")
    }
    render() {

        return (
            <ImageBackground source={Background}  style={styles.loginBackgroundContainer}>
                <View style={styles.loginContainerView}>
                    <View style={styles.logoContnet} >
                        <Image style={styles.logo} /> 
                        <Text style={styles.textLogo}>BAMBOO QUEST</Text>
                    </View>
                    <View style={styles.loginView}>
                        <TextInput style={styles.loginInputLogo} placeholder={'Tên đăng nhập'} placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent'/>
                        <Image  source={IconUser} style={styles.loginIconAuth} />
                    </View>
                    <View  style={styles.loginView}>
                        <TextInput secureTextEntry={true} style={styles.loginInputLogo} placeholder={'Mật khẩu'} placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent'/>
                        <Image  source={IconLock} style={styles.loginIconAuth} />
                    </View>
                    <View  style={styles.loginView}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate({routeName: 'Home', transitionStyle: 'inverted'})} style={styles.loginBtnLogin} >
                            <Text  style={{fontSize:20,color:"#fff"}}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.loginView}>
                        <Text onPress={()=>{this.console()}} style={{fontSize:15,color:"#bcbcbc"}}>Bạn có muốn đăng kí ?</Text>
                    </View>
                </View>
            </ImageBackground>
        )

    }
}
const styles = StyleSheet.create({
    
    loginBackgroundContainer: {
        flex: 1,
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
        paddingLeft: 45,
        backgroundColor:'rgba(25, 24, 24, 0.6)',
        color:'#fff',
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
        backgroundColor:'#770027',
        color:'#666666',
        marginHorizontal:25,        
        justifyContent:"center",
        alignItems:"center",
        fontSize:50
    }
    
});
