import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PlaylistSong from './PlaylistSong';

const PlaylistSongs = (props) => {
  return (
    <View style={ [styles.container, props.style] }>
      { props.songs.map(s => <PlaylistSong key={s.id} name={s.name} artist={s.artist} image={s.coverImage}></PlaylistSong>) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export default PlaylistSongs
