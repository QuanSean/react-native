import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import * as authAction from '../../store/auth/action';
import * as bookAction from '../../store/book/action';

import Drawer from 'react-native-drawer'
import { Header } from 'react-native-elements';
import { Images } from '../../assets/Images';
import { Languages } from '../../languages/Languages'
import TabNavigator from 'react-native-tab-navigator';
import Carousel from 'react-native-snap-carousel';
import Swiper from 'react-native-swiper'
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            dataSource: ["1", "2", "3"],
            selectedTab: "home",
        }
    }
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('token');
        // console.log (userToken)
        if (!userToken) {

            this.props.navigation.navigate('Login')
        }

    };
    componentDidMount = async () => {
        AsyncStorage.getItem('token', (err, value) => {
            if (value) {
                this.props.getInfo()
            }
            else {

            }
        })
        this.props.getAllBook()
        this.props.changeStatusRunning(true)
        this._loadItemCart()
    }

    logout = () => {
        const { navigate } = this.props.navigation;
        // navigate('Login')
        this.props.logout()

        this.closeControlPanel()

    }
    _renderItem({ item, index }) {
        return (
            <View style={{ height: 150, width: 150, backgroundColor: "#000" }}>
                <Text style={styles.title}>ijnjinjinijnijnij</Text>
            </View>
        );
    }
    _loadItemCart = async () => {

        const cartToken = await AsyncStorage.getItem('cart');
        if (cartToken) {
            var arrData = JSON.parse(cartToken)
            arrData
            
        }
        else
        {
            console.log ("NONONOONONONON")
        }
    }

    render() {
        this._bootstrapAsync()
        this._loadItemCart()
        const { navigate } = this.props.navigation;
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                openDrawerOffset={0.3}
                content={
                    <View style={{ flex: 1, backgroundColor: "#fff" }}>
                        <Header
                            containerStyle={styles.header}
                            centerComponent={<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Easy Talk</Text>}
                        />
                        <View style={styles.containerSlide}>
                            <View >
                                <Text><Text style={{ fontSize: 20 }}>Tên: </Text><Text style={{ fontSize: 20 }}>{this.props.user.info.name ? this.props.user.info.name : null}</Text></Text>
                                <Text><Text style={{ fontSize: 18 }}>ID: </Text><Text style={{ fontSize: 18 }}>{this.props.user.info._id ? this.props.user.info._id : null}</Text></Text>

                            </View>
                            <TouchableOpacity onPress={this.logout} style={styles.btnLogout}>
                                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
                                    {
                                        this.props.user.vi ? Languages.logout.vi : Languages.logout.en
                                    }
                                </Text>
                            </TouchableOpacity>

                        </View>

                    </View>}
            >

                <View style={styles.container}>

                    <Header
                        containerStyle={styles.header}
                        leftComponent={<TouchableOpacity onPress={this.openControlPanel}><ImageBackground source={Images.ICMENU} style={{ width: 20, height: 20 }}></ImageBackground></TouchableOpacity>}
                        centerComponent={<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Easy Talk</Text>}
                        rightComponent={<TouchableOpacity onPress={this.props.vi}><ImageBackground source={this.props.user.vi ? Images.en : Images.vi} style={{ width: 24, height: 24 }}></ImageBackground></TouchableOpacity>}
                    />


                    <TabNavigator
                        tabBarStyle={{ flex: 1 }}
                        tabBarStyle={{ backgroundColor: "#fff" }}
                    >
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'home'}
                            title={this.props.user.vi ? Languages.home.vi : Languages.home.en}
                            renderIcon={() => <Image source={Images.IconHome} style={{ width: 24, height: 24 }} />}
                            renderSelectedIcon={() => <Image source={Images.IconHomeSelected} style={{ width: 24, height: 24 }} />}
                            // badgeText="1"
                            onPress={() => this.setState({ selectedTab: 'home' })}
                            titleStyle={{ color: "#969696" }}
                            selectedTitleStyle={{ color: "#87ad14" }}
                        >
                            <View style={styles.containerHome}>
                                <ScrollView>
                                    <View style={styles.slideBanner}>
                                        <Swiper activeDotStyle={{ backgroundColor: "#87ad14" }} autoplay={true} autoplayTimeout={3.5} index={0} style={styles.wrapper} >
                                            <ImageBackground style={styles.banner} source={Images.Banner} />
                                            <ImageBackground style={styles.banner} source={Images.Banner1} />

                                        </Swiper>
                                    </View>
                                    <View style={styles.cardCategory}>
                                        <View style={styles.firstCardCategory}>
                                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.user.vi ? Languages.hotBook.vi : Languages.hotBook.en}</Text>

                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <TouchableOpacity style={{ width: Dimensions.get('window').width / 4, height: 30, backgroundColor: "#87ad14", justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>{this.props.user.vi ? Languages.more.vi : Languages.more.en}</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                        <View style={styles.category}>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                {
                                                    this.props.book.allBook.length > 0 ? this.props.book.allBook.map(item => {
                                                        return (<TouchableOpacity onPress={() => this.props.navigation.navigate('InfoBook', { idBook: item._id })} style={styles.itemCategory}>
                                                            <View style={styles.avatar}>
                                                                <Image resizeMode={'contain'} style={styles.avatarBook} source={{ uri: item.images[0] }} />
                                                            </View>
                                                            <View style={styles.infoBook}>
                                                                <Text>{item.name}</Text>
                                                                <Text style={{ color: "red" }}>{item.price}</Text>
                                                            </View>
                                                        </TouchableOpacity>)

                                                    }) : null
                                                }
                                            </ScrollView>
                                        </View>
                                    </View>
                                    <View style={styles.cardCategory}>
                                        <View style={styles.firstCardCategory}>
                                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.user.vi ? Languages.newBook.vi : Languages.newBook.en}</Text>

                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <TouchableOpacity style={{ width: Dimensions.get('window').width / 4, height: 30, backgroundColor: "#87ad14", justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>{this.props.user.vi ? Languages.more.vi : Languages.more.en}</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                        <View style={styles.category}>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                {
                                                    this.props.book.allBook.length > 0 ? this.props.book.allBook.map(item => {
                                                        return (<TouchableOpacity onPress={() => navigate('InfoBook', { idBook: item._id })} style={styles.itemCategory}>
                                                            <View style={styles.avatar}>
                                                                <Image resizeMode={'contain'} style={styles.avatarBook} source={{ uri: item.images[0] }} />
                                                            </View>
                                                            <View style={styles.infoBook}>
                                                                <Text>{item.name}</Text>
                                                                <Text style={{ color: "red" }}>{item.price}</Text>
                                                            </View>
                                                        </TouchableOpacity>)

                                                    }) : null
                                                }
                                            </ScrollView>
                                        </View>
                                    </View>

                                    <View style={styles.cardCategory}>
                                        <View style={styles.firstCardCategory}>
                                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.user.vi ? Languages.discount.vi : Languages.discount.en}</Text>

                                            </View>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                                <TouchableOpacity style={{ width: Dimensions.get('window').width / 4, height: 30, backgroundColor: "#87ad14", justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#fff' }}>{this.props.user.vi ? Languages.more.vi : Languages.more.en}</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                        <View style={styles.category}>
                                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                                <TouchableOpacity style={styles.itemCategory}>
                                                    <View style={styles.avatar}>
                                                        <Image resizeMode={'contain'} style={styles.avatarBook} source={Images.AvatarBook} />
                                                    </View>
                                                    <View style={styles.infoBook}>
                                                        <Text>Bút chấm đọc Tot-Talk 2 GIAI ĐOẠN VÀNG (Bé 4-6 tuổi)</Text>
                                                        <Text style={{ color: "red" }}>100 000đ</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.itemCategory}>
                                                    <View style={styles.avatar}>
                                                        <Image resizeMode={'contain'} style={styles.avatarBook} source={Images.AvatarBook} />
                                                    </View>
                                                    <View style={styles.infoBook}>
                                                        <Text>Bút chấm đọc Tot-Talk 2 GIAI ĐOẠN VÀNG (Bé 4-6 tuổi)</Text>
                                                        <Text style={{ color: "red" }}>100 000đ</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.itemCategory}>
                                                    <View style={styles.avatar}>
                                                        <Image resizeMode={'contain'} style={styles.avatarBook} source={Images.AvatarBook} />
                                                    </View>
                                                    <View style={styles.infoBook}>
                                                        <Text>Bút chấm đọc Tot-Talk 2 GIAI ĐOẠN VÀNG (Bé 4-6 tuổi)</Text>
                                                        <Text style={{ color: "red" }}>100 000đ</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.itemCategory}>
                                                    <View style={styles.avatar}>
                                                        <Image resizeMode={'contain'} style={styles.avatarBook} source={Images.AvatarBook} />
                                                    </View>
                                                    <View style={styles.infoBook}>
                                                        <Text>Bút chấm đọc Tot-Talk 2 GIAI ĐOẠN VÀNG (Bé 4-6 tuổi)</Text>
                                                        <Text style={{ color: "red" }}>100 000đ</Text>
                                                    </View>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.itemCategory}>
                                                    <View style={styles.avatar}>
                                                        <Image resizeMode={'contain'} style={styles.avatarBook} source={Images.AvatarBook} />
                                                    </View>
                                                    <View style={styles.infoBook}>
                                                        <Text>Bút chấm đọc Tot-Talk 2 GIAI ĐOẠN VÀNG (Bé 4-6 tuổi)</Text>
                                                        <Text style={{ color: "red" }}>100 000đ</Text>
                                                    </View>
                                                </TouchableOpacity>

                                            </ScrollView>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>

                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === 'profile'}
                            title={this.props.user.vi ? Languages.cart.vi : Languages.cart.en}
                            renderIcon={() => <Image source={Images.IconCart} style={{ width: 24, height: 24 }} />}
                            renderSelectedIcon={() => <Image source={Images.IconCartSelected} style={{ width: 24, height: 24 }} />}
                            // renderBadge={() => <CustomBadgeView />}
                            selectedTitleStyle={{ color: "#87ad14" }}

                            onPress={() => {
                                this.setState({ selectedTab: 'profile' })
                                // this._loadItemCart()
                            }}>
                            <View style={styles.containerCart}>
                                <View style={styles.contentCart}>
                                    <ScrollView>
                                        <View style={styles.pay}>
                                            <View style={{ flexDirection: 'row', width: WIDTH, height: 48 }}>
                                                <Image source={Images.Pay} style={{ width: 48, height: 48 }} />
                                                <View style={{ width: 48, height: 48, flex: 1, justifyContent: 'center', marginLeft: 15 }}><Text style={{ fontSize: 16 }}>Thanh toán khi nhận hàng</Text></View>
                                            </View>
                                        </View>
                                        <View>
                                            {
                                                 (this.state.arrCart)? 
                                                    this.state.arrCart.map(item => {
                                                        return (
                                                            <View style={styles.itemProduct}>
                                                                <Image resizeMode={'contain'} style={styles.imageProduct} source={Images.AvatarBook} />
                                                                <View style={styles.itemProductInfo}>
                                                                    <Text style={{ color: "#7c7c7c" }}>Bút chấm đọc Tot-Talk 2 GIÁO DỤC SỚM (Bé 1-3 tuổi)</Text>
                                                                    <View style={styles.numberProduct}>
                                                                        <TouchableOpacity style={styles.minus}>
                                                                            <Text>-</Text>
                                                                        </TouchableOpacity>
                                                                        <View style={styles.minus}>
                                                                            <Text>10</Text>
                                                                        </View>
                                                                        <TouchableOpacity style={styles.minus}>
                                                                            <Text>+</Text>
                                                                        </TouchableOpacity>
                                                                        <Text style={{ color: "red", marginLeft: 10 }}>100000đ</Text>
                                        
                                                                    </View>
                                                                </View>
                                        
                                                            </View>
                                                        )
                                                    }):<View></View>
                                                
                                            }
                                            {/* <View style={styles.itemProduct}>
                                                <Image resizeMode={'contain'} style={styles.imageProduct} source={Images.AvatarBook} />
                                                <View style={styles.itemProductInfo}>
                                                    <Text style={{ color: "#7c7c7c" }}>Bút chấm đọc Tot-Talk 2 GIÁO DỤC SỚM (Bé 1-3 tuổi)</Text>
                                                    <View style={styles.numberProduct}>
                                                        <TouchableOpacity style={styles.minus}>
                                                            <Text>-</Text>
                                                        </TouchableOpacity>
                                                        <View style={styles.minus}>
                                                            <Text>10</Text>
                                                        </View>
                                                        <TouchableOpacity style={styles.minus}>
                                                            <Text>+</Text>
                                                        </TouchableOpacity>
                                                        <Text style={{ color: "red", marginLeft: 10 }}>100000đ</Text>

                                                    </View>
                                                </View>

                                            </View> */}
                                        </View>

                                    </ScrollView>

                                </View>
                                <View style={styles.buy}>
                                    <View style={styles.buyLeft}>
                                        <Text><Text style={{ fontSize: 13 }}>{this.props.user.vi ? Languages.total.vi : Languages.total.en}: </Text><Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>100000 đ</Text></Text>
                                    </View>
                                    <View style={styles.buyRight}>
                                        <TouchableOpacity style={styles.btnBuy}>
                                            <Text style={{ color: "#fff" }}> {this.props.user.vi ? Languages.buy.vi : Languages.buy.en}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                        </TabNavigator.Item>
                    </TabNavigator>

                </View >
            </Drawer >

        )
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
    vi: authAction.vi,
    getAllBook: bookAction.getAllBook,
    changeStatusRunning: authAction.changeStatusRunning
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
    wrapper: {
        height: Dimensions.get('window').height / 4,

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        // paddingBottom: 20
    },
    containerSlide: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',


    },
    slideBanner:
    {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,

    },
    banner: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 4,

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
    containerCart: {
        flex: 1,
        backgroundColor: "#eaeaea",
        alignItems: 'center'
    },

    containerHome: {
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center'
    },
    cardCategory: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        backgroundColor: "#fff",
        padding: 10,
        marginTop: 20
    },
    firstCardCategory: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: "#000",
        flexDirection: 'row'
    },


    category: {
        flex: 4,
        backgroundColor: "#fff",
    },
    itemCategory: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 4,
        // backgroundColor: "#000",
        marginLeft: 10,
        padding: 5
    },
    wrapper: {},

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
    avatar: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarBook: {
        width: Dimensions.get('window').width / 4,
        height: Dimensions.get('window').height / 6,


    },
    infoBook: {
        flex: 1,
        padding: 5,
        alignItems: 'center'
    },
    header: {
        backgroundColor: "#87ad14",
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
    },
    btnLogout: {
        width: Dimensions.get('window').width * 0.7 - 20,
        height: 50,
        backgroundColor: "#87ad14",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#d8d100",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 10
    },
    pay: {
        width: WIDTH,
        height: HEIGHT / 13,
        backgroundColor: "#e0c24c",
        padding: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    contentCart: {
        flex: 1,

    },

    itemProduct: {
        width: WIDTH,
        height: HEIGHT / 7,
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 15,
        marginBottom: 1


    },
    imageProduct: {
        flex: 1,
        height: HEIGHT / 7 - 30,
        alignSelf: 'stretch',
    },
    itemProductInfo: {
        flex: 4,
        paddingLeft: 10,
    },
    numberProduct: {
        height: HEIGHT / 7 - 60,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row', flexWrap: 'wrap',
    },
    minus: {
        borderWidth: 1,
        height: HEIGHT / 7 - 90,
        width: HEIGHT / 7 - 90,
        borderColor: "#aaaaaa",
        justifyContent: "center",
        alignItems: 'center'
    },

    price: {
        flex: 2
    },
    buy: {
        width: WIDTH,
        height: 50,
        backgroundColor: "#fff",
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        flexDirection: "row",
        elevation: 5,
    },
    buyLeft: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        justifyContent: "center",
    },
    buyRight: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
        justifyContent: "center",
    },
    btnBuy: {
        width: WIDTH / 2 - 30,
        height: 35,
        borderRadius: 5,
        backgroundColor: "#0A68A6",
        justifyContent: "center",
        alignItems: "center"

    }

})

const data = [
    { image: Images.Card, vi: "Giải pháp", en: "Solution" },
    { image: Images.System, vi: "Hệ Thống", en: "System" },
    { image: Images.Training, vi: "Đào tạo", en: "Training" },
    { image: Images.Ai, vi: "Trí tuệ nhân tạo", en: "AI" },

]