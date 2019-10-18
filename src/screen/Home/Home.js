import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action';
import Drawer from 'react-native-drawer'
import { Header } from 'react-native-elements';
import { Images } from '../../assets/Images';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    UNSAFE_componentWillMount = () => {
        // console.log ("aaaaaa")
        //  AsyncStorage.getItem('token', (err, value) => {
        //     if (value) {
        //         // console.log ("TOKEN")
        //         this.props.verify()
        //         if (this.props.user.token.length===0) {

        //             this.setState({
        //               authenticated: false
        //             })
        //           } else {

        //             this.setState({
        //               authenticated: true
        //             })
        //             // this.props.getInfo()

        //           }
        //     }
        //     else
        //     {
        //         // navigate('Login')
        //     }
        // });
        // console.log ("this.props.user.running")

        AsyncStorage.getItem('token', (err, value) => {
            if (value) {
                this.props.getInfo()
            }
            else {

            }
        })



    }

    logout = () => {
        // const { navigate } = this.props.navigation;
        // navigate('Login')
        AsyncStorage.removeItem('token')
    }
    render() {
        console.log(this.props.user)
        const { navigate } = this.props.navigation;
        if (this.props.user) {
            return (
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    tapToClose={true}
                    openDrawerOffset={0.3}
                    content={
                        <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }}>


                        </View>}
                >
                    <View style={styles.container}>
                        <Header
                            containerStyle={styles.header}
                            leftComponent={<TouchableOpacity onPress={this.openControlPanel}><ImageBackground source={Images.ICMENU} style={{width:24, height:24}}></ImageBackground></TouchableOpacity>}
                            centerComponent={<Text style={{color:"#fff", fontWeight:"bold", fontSize:18}}>Bitto Solution</Text>}
                            // rightComponent={<MyCustomRightComponent />}
                        />
                        <View style={styles.card}>
                            <Text>{this.props.user.info.name}</Text>
                            <TouchableOpacity style={styles.buttonEdit}>
                                <Text>Edit</Text>
                            </TouchableOpacity >
                            <TouchableOpacity onPress={() => {
                                this.props.logout()
                                navigate('Login')

                            }} style={styles.buttonLogin}>
                                <Text>Logout</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.openControlPanel()

                            }} style={styles.buttonLogin}>
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Drawer>

            )
        }




    }
}
const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
    registerFB: authAction.registerFB,
    loginFB: authAction.loginFB,
    verify: authAction.verify,
    getInfo: authAction.getInfo,
    logout: authAction.logout
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    card: {
        marginTop: 100,
        height: 250,
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 20

    },
    buttonEdit: {
        width: Dimensions.get('window').width - 40,
        height: 45,
        backgroundColor: '#34af89',
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    header:{
        backgroundColor:"#EBBF0E"
    },
    buttonLogin: {
        width: Dimensions.get('window').width - 40,
        height: 45,
        backgroundColor: '#c4c4c4',
        marginTop: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }
})