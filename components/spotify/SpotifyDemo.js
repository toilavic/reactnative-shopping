import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from './Header';
import Playlist from "./Playlist";
import img from '../../assets/blues-radio-cover.jpg';
import { LinearGradient } from 'expo-linear-gradient';
import listCoverImg from '../../assets/nightwishCover.jpg';
import FooterControls from './FooterControls';


const playlistSongs = [
  {
    id: 1,
    name: "Valittu Kansa",
    artist: "Antti Tuisku",
    coverImage: listCoverImg
  },
  {
    id: 2,
    name: "Noise",
    artist: "Nightwish",
    coverImage: listCoverImg
  },
  {
    id: 3,
    name: "Intentions",
    artist: "Justin Bieber",
    coverImage: listCoverImg
  },
  {
    id: 4,
    name: "Majakka",
    artist: "Juno",
    coverImage: listCoverImg
  },

];

export default class SpotifyDemo extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LinearGradient
            colors={['#5f7897', '#2d3743', '#000000']}
            style={ styles.root}>
          <Header height={ 30 }></Header>
          <ScrollView>
            <Playlist
              name="New Music Friday Suomi"
              coverImage={ img }
              followers="74 483"
              creatorName="Spotify"
              songs={ playlistSongs }
              >
            </Playlist>
          </ScrollView>
        </LinearGradient>
        <FooterControls />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 18
  }
});