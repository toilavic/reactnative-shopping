import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, Image, FlatList, Alert } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants';
import { Icon } from 'react-native-elements'

const View1 = (props) => {
  const [items, setItems] = React.useState([])
  const [user, setUser] = React.useState([])


  function APIItems() {
    let id = 0
    if (props.userData === null) {
      return id
    } else id = props.userData.userID
    fetch(props.apiURI + '/items' + `/${id}`, {
      method: 'GET',
    })
      .then(response => {
        if (response.ok == false) {
          throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
        }
        return response.json();
      })
      .then(json => {
        setItems(json)
        if (props.userData == null) setUser([])
        else setUser(props.userData)
        console.log(json)
      })
      .catch(error => {
        console.log("Error message:")
        console.log(error.message)
      });
  }

  async function onDeleteItem(id) {
    console.log('delete', id)
    await fetch(props.apiURI + '/items' + `/${id}`, {
      method: 'DELETE',
      headers: {
        "Authorization": "Bearer " + user.token,
        // "Content-Type": "application/json"
      },
    })
      .then(response => {
        if (response.ok == false) {
          throw new Error("HTTP Code " + response.status + " - " + JSON.stringify(response.json()));
        }
        return response.json();
      })
      .then(json => {
      })
      .catch(error => {
        APIItems();
        console.log("Error message:")
        console.log(error.message)
      });
  }

  function onEdit(item) {
    props.onReceiveItemToEdit(item)
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'EditItem' }],
    })
  }

  useEffect(() => {APIItems()}, []);

  function renderItem(item, index) {
    return (
      <TouchableOpacity
        style={{ flex: 1, flexDirection: 'row' }}
      >
        <TouchableOpacity >
          <Icon
            raised
            iconStyle={{ fontSize: 19 }}
            name='trash'
            type='font-awesome'
            color='#f50'
            onPress={() => Alert.alert(
              'Delete item',
              'Are you sure to delete this item ?',
              [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                { text: 'OK', onPress: () => onDeleteItem(item.id) },
              ],
              { cancelable: false }
            )}
          />
          <Icon
            raised
            iconStyle={{ fontSize: 19 }}
            name='edit'
            type='font-awesome'
            color='#0000ff'
            onPress={() => onEdit(item)} />
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Image
            source={item.images}
            resizeMode="contain"
            style={{
              width: 130,
              height: 100,
            }}
          />
        </View>
        <View style={{ flex: 1.5, marginLeft: SIZES.radius, justifyContent: "center" }}>

          <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{item.title}</Text>
          <Text style={{ color: COLORS.lightGray, ...FONTS.body5 }}>{item.description}</Text>
          <Text style={{ ...FONTS.h3 }}>{item.price}$</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 40, fontWeight: '500' }}>Cpanel</Text>
      <Text style={{ fontSize: 20, fontWeight: '300' }}>Welcome back, {user.name}</Text>
      <Button
        title="POST A NEW ITEM"
        onPress={() => props.navigation.navigate('NewItem')}
      />
      <Button
        title="Logout"
        onPress={props.onLogout}
      />
      <Button
        title="HOME"
        onPress={() => props.navigation.navigate('Home')}
      />
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => renderItem(item, index)}
        />
      </View>
    </View>

  )
}

export default View1
