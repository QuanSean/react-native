import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Dimensions } from 'react-native'
import { Images } from './../../../assets/Images/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native';
import * as authAction from '../../../store/auth/action';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';

const { width: WIDTH } = Dimensions.get('window')
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submited: false,
            login: false,
            facebook: false
        };
        // this.log=this.log.bind(this)
    }
    UNSAFE_componentWillMount() {
        AsyncStorage.getItem('token', (err, value) => {
            if (value) {
                this.props.verify();
                // console.log (value)
            }
        });
        console.log ("aaaaaa")
    };
    makeEmail(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    initUser(token, userID) {
        fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture,friends&access_token=' + token)
            .then((response) => response.json())
            .then((json) => {
                // console.log ("okoko")

                if (json.email) {
                    this.props.registerFB(json.email, json.name, token, userID)
                    // this.props.loginFB(userID)
                }
                else {
                    this.props.registerFB(this.makeEmail(10), json.name, token, userID)
                    // this.props.loginFB(userID)
                }

            })
            .catch(() => {
                reject('ERROR GETTING DATA FROM FACEBOOK')
            })
    }
    componentDidMount(){
        this._signInAsync(this.props.user.result)
        console.log ()
    }
    _signInAsync = async () => {
        if (this.props.user.result)
        {
            this.props.navigation.navigate('Home');
        };
    }
    submit = () => {
        // console.log ("aaaa")
        var { password, email } = this.state
        if (password.length > 0 && email.length > 0) {
            // this.props.changeStatusRunning(true);
            // this.props.login(email, password); 
            // this.setState({
            //     submited: true
            // })
            // setTimeout(() => {
            //     this.setState({
            //         submited: false
            //     })
            // }, 1000);
            this.props.login (email,password)
        }
        else {
            alert('Vui lòng nhập đầy đủ thông tin')
        }
    }

    log() {
        console.log("aaaa")
    }
    handleFacebookLogin() {
        console.log('OKE')

        LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(

            (result) => {
                if (result.isCancelled) {
                    console.log("login is cancelled.");
                } else {
                    AccessToken.getCurrentAccessToken().then(

                        (data) => {
                            const { accessToken, userID } = data
                        }
                    )
                }
            }
        )
    }

    render() {
        // console.log (this.props.user.result)
        const { navigate } = this.props.navigation;
        if (this.props.user.result)
        {
            navigate("Home")
        }
        const { submited } = this.state;
        const { result, running } = this.props.user;
        // console.log (result)
        if (submited && !running) {
            if (result) {
                navigate('Home')
            }
            else {
                alert("Bạn đã nhập sai tên hoặc mật khẩu")
            }
        }
        return (
            <View style={styles.loginContainerView}>
                <View style={styles.logoContnet} >
                    <ImageBackground source={Images.Logo} style={styles.logo} ></ImageBackground>
                </View>
                <View style={styles.loginView}>
                    <TextInput style={styles.loginInputLogo} placeholder={'Email'} onChangeText={(email) => this.setState({ email })} value={this.state.email} placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent' />
                    <Image source={Images.IconUser} style={styles.loginIconAuth} />
                </View>
                <View style={styles.loginView}>
                    <TextInput secureTextEntry={true} style={styles.loginInputLogo} placeholder={'Mật khẩu'} onChangeText={(password) => this.setState({ password })} value={this.state.password} placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent' />
                    <Image source={Images.IconLockL} style={styles.loginIconAuth} />
                </View>
                <View style={styles.loginView}>
                    <TouchableOpacity onPress={this.submit} style={styles.loginBtnLogin} >
                        <Text style={{ fontSize: 20, color: "#fff" }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => { navigate('ForgotPassword') }}><Text onPress={() => { this.console() }} style={{ fontSize: 15, color: "#bcbcbc" }}>Quên  mật khẩu?</Text></TouchableOpacity>
                </View>
                <View>
                    <Text style={{color:'#bcbcbc', marginTop:10, marginBottom:15}}>..... Hoặc .....</Text>
                </View>
                {/* <LoginButton
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
                                        const { accessToken, userID } = data
                                        // console.log (userID)

                                        this.initUser(accessToken, userID)
                                        this.props.loginFB(userID)
                                        navigate('Home')

                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} /> */}

                <TouchableOpacity  onPress={() => {
                    LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(

                        (result) => {
                            if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(

                                    (data) => {
                                        const { accessToken, userID } = data
                                        this.initUser(accessToken, userID)
                                        this.props.loginFB(userID)
                                        navigate('Home')
                                    }
                                )
                            }
                        }
                    )



                }} >
                   <View style={styles.facebook}>
                        <ImageBackground source={Images.LogoFb} style={{width:36, height:36}}/>
                   </View>
                </TouchableOpacity>


            </View>

        )
    }
}
const mapStateToProps = (state) => ({
    ...state
})


const mapDispatchToProps = {
    changeStatusRunning: authAction.changeStatusRunning,
    resetResult: authAction.resetResult,
    login: authAction.login,
    verify: authAction.verify,
    registerFB: authAction.registerFB,
    loginFB: authAction.loginFB,
    
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
const styles = StyleSheet.create({

    loginBackgroundContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loginContainerView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: null,
        width: null,
    },
    loginView: {
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    logoContnet: {
        alignItems: "center",
        marginBottom: 30
    },
    logo: {
        width:110,
        height:110
    },
    textLogo: {
        color: "#fff",
        fontSize: 30

    },
    loginInputLogo: {
        width: WIDTH - 25,
        height: 55,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: '#fff',
        color: '#000',
        marginHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    loginIconAuth: {
        position: 'absolute',
        width: 25,
        height: 25,
        top: 15,
        left: 37
    },
    loginBtnLogin: {
        width: WIDTH - 25,
        height: 55,
        borderRadius: 25,
        backgroundColor: '#EBBF0E',
        color: '#666666',
        marginHorizontal: 25,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 50
    },
    facebook:{
        width:36,
        height:36,
        borderRadius:23,
        backgroundColor:"#4267B2",
        
    }

});
