import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';
import { Entypo } from '@expo/vector-icons';
import DownloadToggle from './DownloadToggle';
import PlaylistSongs from './PlaylistSongs';




const Playlist = (props) => {
  return (


    <View style={ styles.main }>
      <Image source={ props.coverImage } style={ styles.coverImage } resizeMode="cover"></Image>
      <Text style={ [styles.radioName, styles.textColor] }>{ props.name }</Text>

      <SecondaryButton height={35}>FOLLOW</SecondaryButton>
      <Text style={ styles.muted }>{ props.followers} Followers <Entypo name='dot-single'></Entypo> by { props.creatorName}</Text>

      <View style={ styles.pageIndicatorContainer}>
        <Entypo name='dot-single' color='white' size={30}></Entypo>
        <Entypo name='dot-single' color='gray' size={30} style={{ marginLeft: -15}}></Entypo>
      </View>
      <PrimaryButton>SHUFFLE PLAY</PrimaryButton>
      <DownloadToggle></DownloadToggle>
      <PlaylistSongs songs={ props.songs } style={ styles.playlistSongs }></PlaylistSongs>
    </View>


  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    paddingRight: 10,
    paddingLeft: 10

  },
  coverImage: {
    width: 150,
    height: 150,
    marginTop: 5
  },
  radioName: {
    fontWeight: '700',
    fontSize: 25,
    padding: 15
  },
  muted: {
    color: 'rgb(180,180,180)',
    marginBottom: 5,
    marginTop: 5

  },
  textColor: {
    color: 'white'
  },
  stationContentHeader: {
    fontSize: 15,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 20
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  playlistSongs: {
    marginTop: 25
  }
})

export default Playlist

