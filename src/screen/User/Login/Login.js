import React, { Component } from 'react'
import {View, Text,Image,ImageBackground,StyleSheet,TextInput,Dimensions} from 'react-native'
import {Images} from './../../../assets/Images/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import {AsyncStorage} from 'react-native';
import * as authAction from '../../../store/auth/action';

const {width:WIDTH} = Dimensions.get('window')
 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password:'',            
            submited:false,
            login:false};
    }
    componentWillMount = () => {
         AsyncStorage.getItem('token',(err, value)=>{
             if (value)
             {
                this.props.verify();
                // console.log (value)
             }
         } );
      };

      submit=()=>{
        var {password, email} = this.state
        if (password.length>0&&email.length>0)
        {      
            this.props.changeStatusRunning(true);
            this.props.login(email,password);
            this.setState({
                submited: true
              })
            setTimeout(() =>{
                this.setState({
                  submited: false
                })
              },1000);
        }
        else
        {
            alert('Vui lòng nhập đầy đủ thông tin')
        }
    }
    render() {
        const { submited } = this.state;
        const { result, running } = this.props.user;
        // console.log (result)
        const {navigate} = this.props.navigation;
        if (submited && !running)
        {
            if (result)
            {
                navigate('Home')
            }
            else
            {
                alert("Bạn đã nhập sai tên hoặc mật khẩu")
            }
        }
        console.log (this.props.user)
        if (this.props.user.token)
        {
            // let { from } = this.props.location.state || { from: { pathname: "/dashboard" } };
            // return <Redirect to={from} />
            navigate('Home')
        }
        // AsyncStorage.setItem('key', "quan");
        return (
            <ImageBackground source={Images.BackgroundLogin}  style={styles.loginBackgroundContainer}>
                <View style={styles.loginContainerView}>
                    <View style={styles.logoContnet} >
                        <Image style={styles.logo} /> 
                        <Text style={styles.textLogo}>BAMBOO QUEST</Text>
                    </View>
                    <View style={styles.loginView}>
                        <TextInput style={styles.loginInputLogo} placeholder={'Email'} onChangeText={(email) => this.setState({email})} value={this.state.email}  placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent'/>
                        <Image  source={Images.IconUser} style={styles.loginIconAuth} />
                    </View>
                    <View  style={styles.loginView}>
                        <TextInput secureTextEntry={true} style={styles.loginInputLogo} placeholder={'Mật khẩu'} onChangeText={(password) => this.setState({password})} value={this.state.password}  placeholderTextColor={'#b2b2b2'} underlineColorAndroid='transparent'/>
                        <Image  source={Images.IconLockL} style={styles.loginIconAuth} />
                    </View>
                    <View  style={styles.loginView}>
                        <TouchableOpacity onPress={this.submit} style={styles.loginBtnLogin} >
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
const mapStateToProps = (state) => ({
    ...state
  })
  

const mapDispatchToProps = {
  changeStatusRunning: authAction.changeStatusRunning,
  resetResult: authAction.resetResult,
  login: authAction.login,
  verify:authAction.verify
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
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
