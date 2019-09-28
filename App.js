import React, { Component } from 'react'
import {Navigator,Text,View} from 'react-native'
export default class App extends Component {
  renderScene(route,navigator){
    switch(route.name)
    {
      case "A":
        {
          return (<Text>AAAA</Text>)
        }
    }
  }
  render() {
    return (
      <Text>aa</Text>

  
    )
  }
}

// AppRegistry.registerComponent(appName, () => App);