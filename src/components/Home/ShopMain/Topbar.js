import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet,TouchableOpacity, Platform,} from 'react-native'
import ImageMenu from './../../../Images/images-master/appIcon/ic_menu.png'
import Logo from './../../../Images/bamboo.png'
import { Header } from 'react-native-elements';
const { height } = Dimensions.get('window');

export default class Topbar extends Component {
    constructor(props){
        super(props)
    }
    open()
    {
        const {open}= this.props
        open();
    }
    render() {
        return (
            <Header
                containerStyle={styles.container}
                leftComponent={                
                    <TouchableOpacity onPress={this.open.bind(this)}>
                        <Image source={ImageMenu} style={{width:20,height:20,marginLeft:20}} />
                    </TouchableOpacity>}
                centerComponent={
                    <Text style={{color:'#fff',fontWeight: 'bold'}}>
                        BAMBOO QUEST
                    </Text>
                }
                rightComponent={
                    <Image source={Logo} style={{width:23,height:23,marginRight:20}} />
                }
            />


        )
    }
}

var styles = StyleSheet.create({
    container:{
        backgroundColor: '#34af89',
        justifyContent: 'space-around',
        shadowColor: "#35b69f",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    }
})
