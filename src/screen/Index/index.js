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
    componentDidMount() {
        this._bootstrapAsync();
      }
    
      // Fetch the token from storage then navigate to our appropriate place
      _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        this.props.navigation.navigate(userToken ? 'Home' : 'Login');
      };
    // UNSAFE_componentWillMount = () => {

    //     AsyncStorage.getItem('token', (err, value) => {

    //         this.props.changeStatusRunning(true)
    //         if (value) {
    //             // console.log(value)
    //             this.props.verify()

    //         }
    //         else {
    //             this.props.changeVe()
    //         }
    //     });

    // }
    render() {
        console.log ("INDEX")
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
    changeVe:authAction.changeVe
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
