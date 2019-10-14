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


// import { View, Text } from 'react-native';
// class HomeScreen extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//           <Text>Home Screen</Text>
//         </View>
//       );
//     }
//   }
  import Index from './src/screen/Index/Index'
  import Login from './src/screen/User/Login/Login'
  import Home from './src/screen/Home/Home'


  const AppNavigator = createStackNavigator(
    {
      Index: Index,
      Login:Login,
      Home:Home
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
