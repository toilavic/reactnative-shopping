import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import IconButton from './IconButton'

const FooterControls = () => {
  return (
    <View style={ styles.container }>
      <IconButton active={false} name="Home" iconName="home"></IconButton>
      <IconButton active={true} name="Search" iconName="search"></IconButton>
      <IconButton active={false} name="Your Library" iconName="layers"></IconButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: '#525252',
    backgroundColor: '#282828',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default FooterControls
