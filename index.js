/**
 * @format
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import configureStore from './src/store/index';
import { Provider } from 'react-redux';
const store = configureStore();

  import Index from './src/screen/Index/Index'
  import Login from './src/screen/User/Login/Login'
  import Home from './src/screen/Home/Home'
  import InfoBook from './src/screen/Book/Info/Info'
  import ForgotPassword from './src/screen/User/ForgotPassword/ForgotPassword'

  const AppStack = createStackNavigator({ Home: Home },
    {
      // initialRouteName: 'Home',mode: 'modal',headerMode: 'none',    
      headerMode: 'none',          
    });
  const AuthStack = createStackNavigator({ Login: Login },
    {
      // initialRouteName: 'Home',mode: 'modal',headerMode: 'none',    
      headerMode: 'none',          
    });
  const AppNavigator = createStackNavigator(
    {
      Index: Index,
      Login:Login,
      Home:Home,
      ForgotPassword:ForgotPassword,
      InfoBook:InfoBook
    },
    {
      // initialRouteName: 'Home',mode: 'modal',headerMode: 'none',    
      initialRouteName: 'Index',headerMode: 'none',          
    }
  );
  const AppContainer = createAppContainer(AppNavigator);

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
