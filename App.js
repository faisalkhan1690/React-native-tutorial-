/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Header from './src/Components/Phaseone/HeaderComponent';
import AlbumList from './src/Components/Phaseone/AlbumListComponent';
import {View} from 'react-native';


export default class App extends Component {

  render() {
    return (
        <View>
          <Header headerText={'My Music App'}/>
          <AlbumList/>
        </View>
    );
  }
}

