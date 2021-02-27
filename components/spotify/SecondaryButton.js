import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

const SecondaryButton = (props) => {
  return (
    <TouchableHighlight style={styles.container} onPress={() => console.log('Secondary Button pressed - ' + props.children) }>
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
    fontWeight: '600',
    fontSize: 13
  },
  button: {
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.5)',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 20,
    justifyContent: 'center'
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
  }
});

export default SecondaryButton
