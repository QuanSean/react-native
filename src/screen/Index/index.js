import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Text, Image, View,ActivityIndicator,StatusBar } from 'react-native'
// import Background from '../../Images/background6.jpg'
import LinearGradient from 'react-native-linear-gradient';
// import Logo from '../../Images/logo.png'
import { connect } from 'react-redux'
import { Images } from './../../assets/Images/index'
const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')
import { AsyncStorage } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import * as authAction from '../../store/auth/action';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            a: ''
        }
    }
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        console.log (userToken)
        if (userToken)
        { 
            await this.props.changeVe()
            await this.props.getInfo();
        }
        else
        {
            this.props.navigation.navigate('Login');

        }
        console.log (this.props.user)

      };
  
    
    UNSAFE_componentWillMount(){
        
        this._bootstrapAsync()
        
    }
 

    render() {
        
        if (this.props.user.getinfo)
        {
            if (this.props.user.info.name)
            {
                if (!this.props.user.running)
                {
                    this.props.navigation.navigate("Home")
                }
            }
            else
            {
                this.props.navigation.navigate(this.props.user.login? 'Home' : 'Login');
            }

        }
        
        return (
            <View source={Images.Background} style={{ flex: 1 }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    changeStatusRunning: authAction.changeStatusRunning,
    resetResult: authAction.resetResult,
    login: authAction.login,
    verify: authAction.verify,
    registerFB: authAction.registerFB,
    loginFB: authAction.loginFB,
    changeStatusRunning: authAction.changeStatusRunning,
    v:authAction.v,
    changeVe:authAction.changeVe,
    getInfo: authAction.getInfo,
    changeStatusLogin:authAction.changeStatusLogin

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index)
const styles = StyleSheet.create({
    logo: {
        width: HEIGHT / 4,
        height: HEIGHT / 4,
        marginBottom: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonPlay: {
        height: HEIGHT / 10,
        width: WIDTH - 25,
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        justifyContent: 'center',
        alignItems: "center"
    },
    buttonLogin: {
        height: HEIGHT / 12,
        width: WIDTH - 25,
        backgroundColor: '#1ecdd200',
        margin: 10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: "center"

    }

});
