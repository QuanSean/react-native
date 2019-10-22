import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, Dimensions, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { Header } from 'react-native-elements';
import { Images } from '../../../assets/Images';
const HEIGHT = Dimensions.get('window').height
const WIDTH = Dimensions.get('window').width
import Swiper from 'react-native-swiper'
import { Infobook } from './../../../data/Infobook'
import { Table, Row, Rows } from 'react-native-table-component';
import { Languages } from './../../../languages/Languages'
import { connect } from 'react-redux'
import Carousel from 'react-native-snap-carousel';

class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2'],
            tableData: [
                ['1qjnbewrajknaejkrnbjkeaKJNVljkwenvjknawjkgnvjkawe', '2'],
                ['a', 'b'],
                ['1', '2'],
                ['a', 'b'],
                ['a', 'b']
            ]
        }
    }
    _renRow() {
        const info = Infobook.info;
        var infoData = []
        info.map(item => {
            var data = Object.entries(item)[0];
            infoData.push(data)
        })
        const state = this.state;

        return (
            <Table borderStyle={{}}>
                {
                    infoData.map((rowData, index) => (
                        <Row
                            key={index}
                            data={rowData}
                            widthArr={state.widthArr}
                            style={[styles.row, index % 2 && { backgroundColor: '#fff' }]}
                            textStyle={styles.text}
                        />
                    ))
                }
            </Table>
        )
    }
    _renderItem({ item, index }) {
        return (
            <View style={styles.page}>
                <ScrollView>
                    <Text style={{fontWeight:"bold", fontSize:16}}>Đắc nhâm tâm </Text>
                    <Text style={styles.title}>Đắc nhân tâm, tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới</Text>
                </ScrollView>
            </View>
        );
    }
    render() {
        const state = this.state;
        const { navigate } = this.props.navigation;



        return (

            <View style={styles.container}>
                <Header
                    containerStyle={styles.header}
                    leftComponent={<TouchableOpacity onPress={() => this.props.navigation.goBack()}><Image source={Images.IconBack} style={{ width: 24, height: 24 }} /></TouchableOpacity>}

                    centerComponent={<Text style={{ color: "#87ad14", fontWeight: "bold", fontSize: 18 }}>Bitto Solution</Text>}
                    rightComponent={<Image source={Images.IconC} style={{ width: 28, height: 28 }} />}

                />
                <View style={styles.content}>
                    <ScrollView>

                        <View style={styles.overview}>
                            <View style={styles.imagOoverview}>
                                <Swiper activeDotStyle={{ backgroundColor: "#87ad14" }} autoplay={true} autoplayTimeout={3.5} index={0} style={styles.wrapper} >
                                    {
                                        Infobook.images.map(item => {
                                            return <Image style={styles.imageItemOverview} resizeMode={'contain'} source={item} />
                                        })
                                    }


                                </Swiper>
                            </View>
                            <View style={styles.infoOverview}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{Infobook.title}</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>{Infobook.price} đ  </Text>
                                <TouchableOpacity style={styles.btnBuy}>
                                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>MUA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.pay}>
                            <Text style={{ textAlign: 'center', marginBottom: 15, fontSize: 18 }}>Hình thức thanh toán</Text>
                            <View style={{ flexDirection: 'row', width: WIDTH, height: 48 }}>
                                <Image source={Images.Pay} style={{ width: 48, height: 48 }} />
                                <View style={{ width: 48, height: 48, flex: 1, justifyContent: 'center', marginLeft: 15 }}><Text style={{ fontSize: 16 }}>Thanh toán khi nhận hàng</Text></View>
                            </View>
                        </View>

                        <View style={styles.info}>
                            <Text style={{ marginBottom: 15, fontSize: 18 }}>{this.props.user.vi ? Languages.info.vi : Languages.info.en}</Text>

                            <ScrollView horizontal={true}>
                                <View style={{ height: HEIGHT / 3 }}>
                                    <ScrollView style={styles.dataWrapper}>
                                        {this._renRow()}
                                        {/* <Table borderStyle={{ }}>
                                            {
                                                this.state.tableData.map((rowData, index) => (
                                                    <Row
                                                        key={index}
                                                        data={rowData}
                                                        widthArr={state.widthArr}
                                                        style={[styles.row, index % 2 && { backgroundColor: '#fff' }]}
                                                        textStyle={styles.text}
                                                    />
                                                ))
                                            }
                                        </Table> */}
                                    </ScrollView>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.readbook}>
                            <Carousel
                                // ref={(c) => { this._carousel = c; }}
                                data={this.state.tableData}
                                renderItem={this._renderItem}
                                sliderWidth={WIDTH}
                                itemWidth={WIDTH - 80}
                            />
                        </View>

                        <View style={styles.cardCategory}>
                            <View style={styles.firstCardCategory}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{this.props.user.vi ? Languages.genericproducts.vi : Languages.genericproducts.en}</Text>
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
                                            <ImageBackground style={styles.avatarBook} source={Images.AvatarBook} />
                                        </View>
                                        <View style={styles.infoBook}>
                                            <Text>Đắc nhân tâm</Text>
                                            <Text style={{ color: "red" }}>100 000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.itemCategory}>
                                        <View style={styles.avatar}>
                                            <ImageBackground style={styles.avatarBook} source={Images.AvatarBook1} />
                                        </View>
                                        <View style={styles.infoBook}>
                                            <Text>Tony buổi sáng</Text>
                                            <Text style={{ color: "red" }}>90 000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.itemCategory}>
                                        <View style={styles.avatar}>
                                            <ImageBackground style={styles.avatarBook} source={Images.AvatarBook2} />
                                        </View>
                                        <View style={styles.infoBook}>
                                            <Text>Tuổi trẻ đáng giá bao nhiêu</Text>
                                            <Text style={{ color: "red" }}>100 000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.itemCategory}>
                                        <View style={styles.avatar}>
                                            <ImageBackground style={styles.avatarBook} source={Images.AvatarBook} />
                                        </View>
                                        <View style={styles.infoBook}>
                                            <Text>Đắc nhân tâm</Text>
                                            <Text style={{ color: "red" }}>100 000đ</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.itemCategory}>
                                        <View style={styles.avatar}>
                                            <ImageBackground style={styles.avatarBook} source={Images.AvatarBook} />
                                        </View>
                                        <View style={styles.infoBook}>
                                            <Text>Đắc nhân tâm</Text>
                                            <Text style={{ color: "red" }}>100 000đ</Text>
                                        </View>
                                    </TouchableOpacity>

                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = {
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info)
const styles = StyleSheet.create({
    header: { height: 50, backgroundColor: '#fff' },

    container: {
        flex: 1,
        backgroundColor: "#efefef"
    },
    header: {
        // backgroundColor: "#87ad14",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    content: {
        flex: 1
    },
    overview:
    {
        width: WIDTH,
        height: HEIGHT / 2,
        backgroundColor: "#fff"
    },
    imagOoverview:
    {
        flex: 2,
    },
    imageItemOverview: {
        flex: 1,
        alignSelf: 'stretch',
        width: WIDTH,
        height: HEIGHT / 4,
    },
    infoOverview:
    {
        flex: 1,
        padding: 15
    },
    btnBuy: {
        width: WIDTH - 30,
        height: 50,
        backgroundColor: "red",
        marginTop: 10,
        justifyContent: 'center',
        alignItems: "center"
    },
    pay: {
        width: WIDTH,
        marginTop: 10,
        height: HEIGHT / 6,
        backgroundColor: "#fff",
        padding: 15

    },
    info: {

        width: WIDTH,
        backgroundColor: "#fff",
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: 'center'
    },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { width: WIDTH, height: 50, backgroundColor: '#f2f2f2' },

    readbook: {
        width: WIDTH,
        height: HEIGHT - 250,
        marginTop: 20,
        backgroundColor: "#f2f2f2",
        padding:15
    },
    page: {
        height: HEIGHT - 290, width: WIDTH - 80, backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,
        padding:15

    },
    itemCategory: {
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').height / 4,
        // backgroundColor: "#000",
        marginLeft: 10,
        padding: 5
    },


    category: {
        flex: 4,
        backgroundColor: "#fff",
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
    }

})