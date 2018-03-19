import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import { StackNavigator } from 'react-navigation';
import { AppLoading, Asset, Font } from 'expo';

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
  state = {
    isLoadingComplete: false,
  };
  render() {
  if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
return (
  <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
);
  }else {

      return (
    <RootStack/>
      );
  }
  }
  _loadResourcesAsync = async () => {
      return Promise.all([
        Asset.loadAsync([

        ]),
      ]);
    };

  _handleLoadingError = error => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    };
  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
