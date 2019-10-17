import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Dimensions, TouchableOpacity, Text, Image, View } from 'react-native'
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
    UNSAFE_componentWillMount = () => {
        AsyncStorage.getItem('token', (err, value) => {
            if (value) {
                // this.props.verify();
                console.log(value)
            }
        });
    }
    makeEmail(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
    initUser(token,userID) {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture,friends&access_token=' + token)
            .then((response) => response.json())
            .then((json) => {
                // console.log ("okoko")

                if (json.email)
                {
                    this.props.registerFB(json.email,json.name,token,userID)
                    this.props.loginFB(userID)
                }
                else
                {
                    this.props.registerFB(this.makeEmail(10),json.name,token,userID)
                    this.props.loginFB(userID)
                }
                
            })
            .catch(() => {
                reject('ERROR GETTING DATA FROM FACEBOOK')
            })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={Images.Background} style={{ flex: 1 }}>
                {/* <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#18a58c4f', '#1aa98f7a','#2bb3b77d','#30c9cea1','#28d2d8a3','#1ecdd2c7','#1ecdd2db','#19c0c5','#19c0c5']} style={styles.container}>
                    <ImageBackground source={Logo} style={styles.logo} />
                    <TouchableOpacity onPress={() => navigate('PressInfo')} style={styles.buttonPlay}>
                        <Text style={{color:'#18a58c8a',fontWeight: 'bold', fontSize:17}}>CHƠI NGAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.buttonLogin}>
                        <Text style={{color:'#fff',fontWeight: 'bold', fontSize:15}}>LOGIN</Text>
                    </TouchableOpacity>
                </LinearGradient> */}

                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['#18a58c4f', '#1aa98f7a', '#2bb3b77d', '#30c9cea1', '#28d2d8a3', '#1ecdd2c7', '#1ecdd2db', '#19c0c5', '#19c0c5']} style={styles.container}>
                    <ImageBackground source={Images.Logo} style={styles.logo} />
                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.buttonPlay}>
                        <Text style={{ color: '#18a58c8a', fontWeight: 'bold', fontSize: 17 }}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.buttonLogin}>
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 15 }}>Đăng nhập bằng facebook</Text>
                    </TouchableOpacity>
                    <LoginButton
                        publishPermissions={['publish_actions']}
                        readPermissions={['public_profile']}
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(

                                        (data) => {
                                            const { accessToken,userID } = data
                                            // console.log (userID)
                                            this.initUser(accessToken,userID)
                                            navigate('Home')

                                        }
                                    )
                                }
                            }
                        }
                        onLogoutFinished={() => console.log("logout.")} />
                </LinearGradient>
            </ImageBackground>
        )
    }
}
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    registerFB:authAction.registerFB,
    loginFB:authAction.loginFB
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
