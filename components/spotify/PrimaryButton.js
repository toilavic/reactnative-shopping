import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const PrimaryButton = (props) => {
  return (
    <TouchableHighlight style={styles.container} onPress={() => console.log('Primary Button pressed - ' + props.children) }>
      <View style={ [ styles.button, { height: props.height, width: props.width }] }>
        <Text style={ styles.text }>{ props.children }</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700'
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 60,
    paddingRight: 60,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: 'rgb(48, 179, 66)'
  },
  container: {
    marginTop: 0,
    marginBottom: 0,
    borderRadius: 30
  }
});

export default PrimaryButton
