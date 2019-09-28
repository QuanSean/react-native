/*
 * @format
 */
import React, { Component } from 'react'
import {name as appName} from './app.json';
import {AppRegistry,Text,View,Button,TouchableOpacity,StatusBar} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import store from './src/redux/store/store'
import {Provider} from 'react-redux'
import {Index} from './src/screen/Index/index'
import {Login} from './src/screen/User/Login/index'
import {PressInfoClient} from './src/screen/Client/PressInfo/index'
import {Home} from './src/screen/Home/index'
import NewProject from './src/screen/Project/NewProject/NewProject'
const AppNavigator = createStackNavigator(
    {
      Index: Index,
      Home:Home,
      Login: Login,
      PressInfo:PressInfoClient,
      NewProject:NewProject
    },
    {
      // initialRouteName: 'Home',mode: 'modal',headerMode: 'none',    
      initialRouteName: 'Index',headerMode: 'none',          
    }
  );
const AppContainer = createAppContainer(AppNavigator);
// StatusBar.setHidden(true);

export default class index extends Component {

    render() {
    return(
      <Provider store = {store}>
        <AppContainer/>
      
      </Provider>
        ) ;
    }
}
AppRegistry.registerComponent(appName, () => index);
