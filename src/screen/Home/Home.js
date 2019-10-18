import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native'
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
            authenticated: false,
            dataSource: ["1", "2", "3"]
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
        console.log(this.props.user.vi)
        const { navigate } = this.props.navigation;
        if (this.props.user) {
            return (
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    tapToClose={true}
                    openDrawerOffset={0.3}
                    content={
                        <View style={{ flex: 1, backgroundColor: "#fff" }}>
                        <Header
                            containerStyle={styles.header}
                            centerComponent={<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Bitto Solution</Text>}
                        />

                        </View>}
                >
                    <View style={styles.container}>
                        {
                            (this.props.user.vi)?
                            (
                                <Header
                                containerStyle={styles.header}
                                leftComponent={<TouchableOpacity onPress={this.openControlPanel}><ImageBackground source={Images.ICMENU} style={{ width: 20, height: 20 }}></ImageBackground></TouchableOpacity>}
                                centerComponent={<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Bitto Solution</Text>}
                                rightComponent={<TouchableOpacity onPress={this.props.vi}><ImageBackground source={Images.vi} style={{ width: 24, height: 24 }}></ImageBackground></TouchableOpacity>}
                            />
                            )
                            :
                            (
                                <Header
                                containerStyle={styles.header}
                                leftComponent={<TouchableOpacity onPress={this.openControlPanel}><ImageBackground source={Images.ICMENU} style={{ width: 20, height: 20 }}></ImageBackground></TouchableOpacity>}
                                centerComponent={<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Bitto Solution</Text>}
                                rightComponent={<TouchableOpacity onPress={this.props.vi}><ImageBackground source={Images.en} style={{ width: 24, height: 24 }}></ImageBackground></TouchableOpacity>}
                                />
                            )

                        }

                        <View style={styles.content}>
                            <FlatList
                                data={data}
                                renderItem={(rowData) =>

                                    (this.props.user.vi) ? (
                                        <TouchableOpacity style={styles.card}>
                                            <ImageBackground style={{ flex: 2 }} source={rowData.item.image} />
                                            <View style={{ flex: 1, padding: 10, fontWeight: "bold", fontSize: 25 }}><Text style={{ fontWeight: "bold", fontSize: 20 }}>{rowData.item.vi}</Text></View>
                                        </TouchableOpacity>)

                                        :
                                        (
                                            <TouchableOpacity style={styles.card}>
                                                <ImageBackground style={{ flex: 2 }} source={rowData.item.image} />
                                                <View style={{ flex: 1, padding: 10, fontWeight: "bold", fontSize: 25 }}><Text style={{ fontWeight: "bold", fontSize: 20 }}>{rowData.item.en}</Text></View>
                                            </TouchableOpacity>
                                        )


                                }

                            />
                        </View>


                        {/* <View style={styles.card}>
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
                        </View> */}
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
    logout: authAction.logout,
    vi: authAction.vi
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
        backgroundColor: '#efefef',
        paddingBottom: 20
    },
    card: {
        marginTop: 20,
        width: Dimensions.get('window').width - 20,
        height: Dimensions.get('window').height / 3,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 10

    },
    content: {
        flex: 1,
        backgroundColor: "#eaeaea",
        alignItems: 'center'
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
    header: {
        backgroundColor: "#EBBF0E",
        shadowColor: "#d8d100",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
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

const data = [
    { image: Images.Card, vi: "Giải pháp", en: "Solution" },
    { image: Images.System, vi: "Hệ Thống", en: "System" },
    { image: Images.Training, vi: "Đào tạo", en: "Training" },
    { image: Images.Ai, vi: "Trí tuệ nhân tạo", en: "AI" },

]