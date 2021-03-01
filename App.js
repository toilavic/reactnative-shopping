import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthDemo from './AuthDemo';

export default function App() {
  let output;
  output = (
  <View style={ styles.container }>
    <AuthDemo apiURI='https://stormy-meadow-11036.herokuapp.com'></AuthDemo>
  </View>)
  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 18
  },
});
