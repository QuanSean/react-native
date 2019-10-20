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
            console.log(this.props.user.info)
            // if (this.props.user.info.name)
            // {
            //     this.props.navigation.navigate('Home');

            // }
            // else
            // {
            //     this.props.navigation.navigate('Login');
            // }
        }
        else
        {
            this.props.navigation.navigate('Login');

        }
        // this.props.navigation.navigate(userToken? 'Home' : 'Login');
        console.log (this.props.user)

      };
    // UNSAFE_componentWillMount = () => {
    //     this._bootstrapAsync();
    // }
    
    UNSAFE_componentWillMount(){
        // var {navigate}=this.props.navigation
        // this.props.navigation.navigate(this.props.user.email ? 'Home' : 'Login');
        this._bootstrapAsync()
        
    }
    // re =async()=>{
    //     var {navigate}=this.props.navigation
    //     var {email}= await this.props.user
    //     if (email)
    //     {
    //         navigate('Home')

    //     }  
    //     else
    //     {
            
    //             navigate('Login')
            

    //     }
    // }

    render() {
        // this.re()
        // this.props.navigation.navigate(this.props.user.email ? 'Home' : 'Login');
        console.log ("INDEX")
        console.log (this.props.user)
        if (this.props.user.getinfo)
        {
            if (this.props.user.info.name)
            {
                this.props.navigation.navigate("Home")
            }
            else
            {
                this.props.navigation.navigate(this.props.user.login? 'Home' : 'Login');

            }

        }
        // this.props.navigation.navigate(this.props.user.email ? 'Home');
        // this.re()
        // const { navigate } = this.props.navigation;
        // if (this.props.user.running)
        // {
        //     console.log(this.props.user.ve)
        //     if (this.props.user.ve)
        //     {

        //         // console.log (this.props.user.email)
        //         if(this.props.user.email)
        //         {
        //             navigate('Home')
        //             console.log ("HOME")
        //         }
        //         else
        //         {
        //             navigate('Login')
        //             console.log ("LGOUN")
        //         }
        //     }
        // }
        
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
