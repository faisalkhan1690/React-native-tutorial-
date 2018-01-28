import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetailsComponent';
import Card from './CardComponent';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    const url = "https://rallycoding.herokuapp.com/api/music_albums";

    axios.get(url).then(response => {
      console.warn(response);
      this.setState({ albums: response.data });
    });
  }

  renderAlbum() {
    return this.state.albums.map(album => 

    <AlbumDetails key={album.title} album={album}/>
    );
  }
  render() {
    console.warn(this.state.albums);
    return (
      <View>
        {this.renderAlbum()}
      </View>
    );
  }
}

export default AlbumList;
