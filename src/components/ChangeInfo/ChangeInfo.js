import React, { Component } from 'react'
import {View, Text} from 'react-native'

export default class ChangeInfo extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'yellow',}}>
                <Text>ChangeInfo</Text>
                <Text onPress={() => this.props.navigation.navigate({routeName: 'Home', transitionStyle: 'inverted'})} >
                    Home
                </Text>
            </View>
        )
    }
}
