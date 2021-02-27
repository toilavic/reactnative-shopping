import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import LoginScreen from './components/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUpScreen from './components/SignUpScreen'
import SignUpCompleted from './components/SignUpCompleted'
import * as SecureStore from 'expo-secure-store'
import LoadingScreen from './components/LoadingScreen'
import TodoApp from './components/TodoApp'

const Stack = createStackNavigator();
const secureStoreTokenName = "demoAppJWT2";   

export default class AuthDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCheckingTokenStorage: true,
      activeJWT: null
    };
  }

  componentDidMount() {
    // Check for stored JWT when the application loads
    SecureStore.getItemAsync(secureStoreTokenName)
      .then(response => {
        console.log("SecureStore.getItemAsync success")        
        this.setState({ activeJWT: response, isCheckingTokenStorage: false })
      })
      .catch(error => {
        console.log("SecureStore.getItemAsync error")
        console.log(error);
      });
  }

  
  onLoginReceiveJWT = (responseJWT) => {
    // Deal with successful login by storing the token into secure store
    SecureStore.setItemAsync(secureStoreTokenName, responseJWT)
      .then(response => {
        console.log(response);
        this.setState({ activeJWT: responseJWT, isCheckingTokenStorage: false })
      })    
  }

  

  authLogic = () => {
    const authScreens = (
      <>
        <Stack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          { props => <LoginScreen {...props} onLoginReceiveJWT={ this.onLoginReceiveJWT } apiURI={ this.props.apiURI }></LoginScreen> }
        </Stack.Screen>
        <Stack.Screen
          name="Signup"
          options={{
            headerShown: false,
          }}
        >
          { props => <SignUpScreen {...props} apiURI={ this.props.apiURI }></SignUpScreen>}
        </Stack.Screen>
        <Stack.Screen
          name="SignupCompleted"
          options={{
            headerShown: false,
          }}
        >
          { props => <SignUpCompleted {...props}></SignUpCompleted>}
        </Stack.Screen>
      </>
    );

    const app = (
      <Stack.Screen 
        name="TodoApp" 
        options={{
          headerShown: false,
        }}>
          { props => <TodoApp 
                        {...props} 
                        jwt={ this.state.activeJWT } 
                        apiURI={ this.props.apiURI }
                        onLogout={ this.onLogout }
                      ></TodoApp>}
      </Stack.Screen>
    )

    

    const checkingForTokenStorage = (
      <Stack.Screen name="Loading" component={LoadingScreen} />
    )

    if(this.state.isCheckingTokenStorage)
    {
      console.log('Checking is token stored');
      return checkingForTokenStorage;
    }
    else
    {
      if(this.state.activeJWT != null)
      {
        console.log('JWT Token found, displaying application logged in views');
        return app;
      }
      else
      {
        console.log('JWT Token not found, displaying application authentication views');
        return authScreens;
      }
    }
    console.error('Incorrect authLogic function processing');
  }

  onLogout = () => {
    console.log("Logout clicked");
    this.setState({ activeJWT: null });
    SecureStore.deleteItemAsync(secureStoreTokenName);
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            { this.authLogic() }
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  }
}
