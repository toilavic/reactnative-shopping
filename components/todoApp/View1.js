import React from 'react'
import { View, Text, Button } from 'react-native'
import * as SecureStore from 'expo-secure-store'

const View1 = (props) => {
  // const hello = SecureStore.getItemAsync('itemKey', {'keychainService'})
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ fontSize: 50, fontWeight: '700' }}>Application content</Text>
      <Text>You have successfully logged in {1+1}</Text>
      <Button
        title="Go to Todo List View"
        onPress={() => props.navigation.navigate('Todos')}
      />
      <Button
        title="Logout"
        onPress={ props.onLogout }
      />
    </View>
  )
}

export default View1
