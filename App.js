/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/components/HeaderComponent';
import AlbumList from './src/components/AlbumListComponent';
import {View} from 'react-native';


export default class App extends Component {

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  // componentWillUnmount() {
  //   AppState.removeEventListener('change', this._handleAppStateChange);
  // }

  _handleAppStateChange = (nextAppState) => {
    // if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      if (state === 'active') {
        console.log("---->","state active");
       }else if(state === 'background'){
        console.log("---->","background");
      }else{
        console.log("---->","nothing");
      }
    // }else{
    //   console.warn("----->","wth");
    // }
    // this.setState({appState: nextAppState});
  }

  render() {
    return (
        <View>
          <Header headerText={'My Music App'}/>
          <AlbumList/>
        </View>
    );
  }
}

