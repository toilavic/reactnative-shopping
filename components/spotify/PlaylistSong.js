import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlaylistSong = (props) => {
  return (
    <View style={ styles.container }>
      <Image style={ styles.coverImage } source={ props.image }></Image>
      <View style={ styles.songArtistName }>
        <Text style={ styles.songName}>{ props.name}</Text>
        <Text style={ styles.artistName}>{ props.artist}</Text>
      </View>
      <MaterialCommunityIcons name='dots-horizontal' color='white' size={25} color="gray"></MaterialCommunityIcons>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10

  },
  songArtistName: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10

  },
  coverImage: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  songName: {
    color: 'white',
    fontSize: 16
  },
  artistName: {
    color: 'gray'
  }
})

export default PlaylistSong
