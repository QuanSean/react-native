import React, { Component } from 'react'
import {View, Text,Image,ImageBackground,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import * as authAction from '../../../store/auth/action';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            key:'',
            password:'',
            submited:false
        };
    }
    sendEmail=()=>{
        this.props.getKey(this.state.email)
    }
    changPassword=()=>{
        
        
    }
    render() {
        console.log (this.props.user.key)
        const {navigate} = this.props.navigation;

        return (
           
            <View style={styles.container}>
                {
                    this.props.user.key?(
                        <View style={styles.container}>
                            <TextInput editable={false} selectTextOnFocus={false} onChangeText={(email) => this.setState({email})} value={this.state.email}  placeholder="Email" style={styles.textInput}/>
                            <TextInput onChangeText={(key) => this.setState({key})} value={this.state.key}  placeholder="Mã xác nhận" style={styles.textInput}/>
                            <TextInput onChangeText={(password) => this.setState({password})} value={this.state.password}  placeholder="Nhập mật khẩu mới" style={styles.textInput}/>                
                            <TouchableOpacity onPress={()=>{
                                this.props.changePassword(this.state.email, this.state.password, this.state.key)
                                navigate('Login')
                            }} style={styles.button}><Text style={{color:'#fff'}}>Đồng ý</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{marginTop:10}}><Text>Trở lại</Text></TouchableOpacity>
                        </View>
                    ):(                        
                        <View style={styles.container}>
                            <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email}  placeholder="Email" style={styles.textInput}/>
                            {/* <TextInput onChangeText={(key) => this.setState({key})} value={this.state.key}  placeholder="Mã xác nhận" style={styles.textInput}/>
                            <TextInput onChangeText={(password) => this.setState({password})} value={this.state.password}  placeholder="Nhập mật khẩu mới" style={styles.textInput}/>                 */}
                            <TouchableOpacity onPress={this.sendEmail} style={styles.button}><Text style={{color:'#fff'}}>Đồng ý</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{marginTop:10}}><Text>Trở lại</Text></TouchableOpacity>
                        </View>)
                }

            </View>
        )
    }
}
const mapStateToProps = (state) => ({
    ...state
  })
const mapDispatchToProps = {
    getKey:authAction.getKey,
    changePassword:authAction.changePassword
  }
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(ForgotPassword)
const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f97578'
    },
    textInput:{
        width: Dimensions.get('window').width-40,
        height:50,
        marginTop:10,
        borderRadius:15,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    button:{
        width: Dimensions.get('window').width-40,
        height:50,
        marginTop:10,
        borderRadius:15,        
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#c4585a'  
    }
})