import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

const DownloadToggle = () => {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View style={ styles.container }>
      <Text style={ styles.text }>Download</Text>
      <Switch
        value={switchValue}
        onValueChange={v => {
          setSwitchValue(v);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%'
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  }
});

export default DownloadToggle
