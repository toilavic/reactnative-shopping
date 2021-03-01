import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import View1 from './todoApp/View1'
import Home from '../screens/Home'
import EditItem from './EditItem'
import NewItem from './NewItem'

const Stack = createStackNavigator();

export default class TodoApp extends Component {

  constructor(props) {

    super(props);
    this.state = {
      itemToEdit: {}
    }    
  }

  onReceiveItemToEdit = (itemToEdit) => { this.setState({ itemToEdit }) }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="View1">
          { props => <View1 {...props} onReceiveItemToEdit = {this.onReceiveItemToEdit} userData={this.props.userData} apiURI={this.props.apiURI} onLogout={ this.props.onLogout }/>}
        </Stack.Screen>
        <Stack.Screen name="EditItem" options={{ title: 'Edit Item' }} >    
          { props => <EditItem {...props} itemToEdit={this.state.itemToEdit} userData={this.props.userData} apiURI={this.props.apiURI}/>}
        </Stack.Screen>
        <Stack.Screen name="NewItem" options={{ title: 'New Item' }} >    
          { props => <NewItem {...props} userData={this.props.userData} apiURI={this.props.apiURI}/>}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
        >
          { props => <Home {...props} apiURI={ this.props.apiURI }></Home>}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}
