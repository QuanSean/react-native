import React, { Component } from 'react'
import {ImageBackground,StyleSheet,Dimensions,TouchableOpacity,Text,Image} from 'react-native'
import Background from '../../Images/background6.jpg'
import { SocialIcon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../Images/logo.png'

import {connect} from 'react-redux'
const {width:WIDTH} = Dimensions.get('window')
const {height:HEIGHT} = Dimensions.get('window')


 class Home extends Component {
    
    render() {

        const {navigate} = this.props.navigation;
        this.props.dispatch({
            type:'ADD_PROPS_NAVIGATE',
            navigate:navigate
        })
        return (
            <ImageBackground source={Background}   style={{flex:1}}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#18a58c4f', '#1aa98f7a','#2bb3b77d','#30c9cea1','#28d2d8a3','#1ecdd2c7','#1ecdd2db','#19c0c5','#19c0c5']} style={styles.container}>
                    <ImageBackground source={Logo} style={styles.logo} />
                    <TouchableOpacity onPress={() => navigate('PressInfo')} style={styles.buttonPlay}>
                        <Text style={{color:'#18a58c8a',fontWeight: 'bold', fontSize:17}}>CHƠI NGAY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('Login')} style={styles.buttonLogin}>
                        <Text style={{color:'#fff',fontWeight: 'bold', fontSize:15}}>LOGIN</Text>
                    </TouchableOpacity>
                </LinearGradient>
             </ImageBackground>
        )
    }
}
export default connect()(Home)
const styles = StyleSheet.create({
    logo:{
        width:HEIGHT/4,
        height:HEIGHT/4,
        marginBottom:10
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonPlay:{
        height:HEIGHT/10,
        width:WIDTH-25,
        backgroundColor:'#fff',
        margin:10,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        justifyContent:'center',
        alignItems:"center"
    },
    buttonLogin:{
        height:HEIGHT/12,
        width:WIDTH-25,
        backgroundColor:'#1ecdd200',
        margin:10,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:"center"

    }
    
});