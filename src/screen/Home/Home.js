import React, { Component } from 'react'
import {View, Text,Image,ImageBackground,StyleSheet,TextInput,Dimensions,TouchableOpacity} from 'react-native'
import {AsyncStorage} from 'react-native';
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action';


 class Home extends Component {
     constructor(props)
     {
         super(props);
         this.state={
             authenticated:false
         }
     }
    UNSAFE_componentWillMount = async() => {
        AsyncStorage.getItem('token', (err, value) => {
            if (value) {
                this.props.verify()
                if (this.props.user.token.length===0) {
                    
                    this.setState({
                      authenticated: false
                    })
                  } else {
                    
                    this.setState({
                      authenticated: true
                    })
                    this.props.getInfo()

                  }
            }
            else
            {
                // navigate('Login')
            }
        });
    }
    logout=()=>{
        // const { navigate } = this.props.navigation;
        navigate('Login')
        AsyncStorage.removeItem('token')
    }
    render() {
        console.log (this.state.authenticated)
        const { navigate } = this.props.navigation;
        if (this.props.user)
        {
            // var in=this.props.user
            console.log (this.props.user)
            return (
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text>{this.props.user.info.name}</Text>
                        <TouchableOpacity style={styles.buttonEdit}>
                            <Text>Edit</Text>
                        </TouchableOpacity >
                        <TouchableOpacity onPress={()=>{
                            navigate('Login')
                            this.props.logout()
                        }} style={styles.buttonLogin}>
                            <Text>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        

        

    }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    registerFB:authAction.registerFB,
    loginFB:authAction.loginFB,
    verify:authAction.verify,
    getInfo:authAction.getInfo,
    logout:authAction.logout
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#e0e0e0'
    },
    card:{
        marginTop:100,
        height:250,
        backgroundColor:"#fff",
        borderRadius:20,
        padding:20

    },
    buttonEdit:{
        width: Dimensions.get('window').width-40,
        height:45,
        backgroundColor:'#34af89',
        marginTop:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        color:'#fff'
    },
    buttonLogin:{
        width: Dimensions.get('window').width-40,
        height:45,
        backgroundColor:'#c4c4c4',
        marginTop:10,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        color:'#fff'
    }
})