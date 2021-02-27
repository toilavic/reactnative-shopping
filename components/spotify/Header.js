import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Header = (props) => {
  return (
    <View style={ [styles.main, { height: props.height }] }>
      <MaterialIcons name='chevron-left' color='white' size={props.height} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  }
})

export default Header
