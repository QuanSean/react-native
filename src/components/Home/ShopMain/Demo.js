import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator';
import Topbar from './Topbar'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import Index from '../Home/Index'
const { height } = Dimensions.get('window');
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home"
        }
    }
    open()
    {
        const {open}= this.props
        open();
    }
    render() {
        // const {navigate} = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <Topbar open={this.open.bind(this)}/>
                <TabNavigator  tabBarStyle={{}}>
                    <TabNavigator.Item
                        titleStyle="red"
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color:"#34af89"}}
                        title="Home"
                        renderIcon={() => <Image source={require("./../../../Images/home.png")} style={{ width: 20, height: 20 }} />}
                        renderSelectedIcon={() => <Image source={require("./../../../Images/home-active.png")} style={{ width: 20, height: 20 }} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        {/* <Index   createProject1={this.props.createProject}/> */}
                        <Text onPress={()=>console.log("aaaa")} style={{color:'#18a58c8a',fontWeight: 'bold', fontSize:14}}>Chỉnh sửa</Text>

                    </TabNavigator.Item>

                   
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'library'}
                        selectedTitleStyle={{color:"#34af89"}}
                        title="Library"
                        renderIcon={() => <Image source={require("./../../../Images/community.png")} style={{ width: 20, height: 20 }} />}
                        renderSelectedIcon={() => <Image source={require("./../../../Images/communitySeleted.png")} style={{ width: 20, height: 20 }} />}
                        onPress={() => this.setState({ selectedTab: 'library' })}>
                        <Index />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    topbar:{
        height:height/8
    }
    
})

