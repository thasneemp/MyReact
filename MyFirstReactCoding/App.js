import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { StackNavigator } from 'react-navigation';


const RootStack = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
  Registration:{
    screen:RegisterScreen,
  },

},
{
  initialRouteName: 'Login',
}
);
export default class App extends React.Component {
  render() {
    return (
<RootStack/>
    );
  }
}
