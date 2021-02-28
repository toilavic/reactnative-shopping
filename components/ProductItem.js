import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, Button, StyleSheet } from 'react-native'
export default class ProductItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <View >
        <Text>Here is product Item {this.props.apiURI}</Text>
      </View>
    )
  }
}
