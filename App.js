import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthDemo from './AuthDemo';


export default function App() {

  let output;
  

  // Step 11 - Mobile client with JWT interacting with API
  // The API server intended to be used with this demo can be found from here
  // https://github.com/lassehav-oamk/api-authentications-demos
  // To test this you need to modify the targetURI below to match your machine IP.
  // You can see the IP of your machine for example in the metro server tab in browser, which opens
  // when you execute 'expo start' command.

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
