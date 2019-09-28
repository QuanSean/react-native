import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import Shop from './../../components/Home/ShopMain/Shop'
import { Text, View, Image, Dimensions, StyleSheet,TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements';
import avatar from './../../Images/Avatar.jpg'
const {width:WIDTH} = Dimensions.get('window')
const {height:HEIGHT} = Dimensions.get('window')
import Index from '../../components/Home/Home/Index'
export default class Main extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                openDrawerOffset={0.3}
                content={
                <View style={{flex:1, backgroundColor:"#209b74", justifyContent:'center',alignItems:'center'}}>
                    <Avatar
                        size="xlarge"
                        rounded
                        source={avatar}
                        showEditButton
                        containerStyle={styles.avatar}
                        />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NewProject')} style={styles.buttonPlay}>
                        <Text style={{color:'#18a58c8a',fontWeight: 'bold', fontSize:14}}>Chỉnh sửa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigate('Index')}} style={styles.buttonLogin}>
                        <Text style={{color:'#fff',fontWeight: 'bold', fontSize:14}}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>}>
                <Shop createProject={() => navigate('NewProject')} open={this.openControlPanel.bind(this)}/>
                {/* <Index  /> */}
            </Drawer>
        )
    }
}


var styles= StyleSheet.create({
    avatar:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11
    },
    buttonPlay:{
        height:HEIGHT/15,
        width:WIDTH*0.7-25,
        backgroundColor:'#fff',
        margin:10,
        marginTop:50,
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
        justifyContent:'center',
        alignItems:"center"
    },
    buttonLogin:{
        height:HEIGHT/15,
        width:WIDTH*0.7-25,
        backgroundColor:'#1ecdd200',
        margin:10,
        borderRadius:15,
        borderWidth:2,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems:"center"

    }
})