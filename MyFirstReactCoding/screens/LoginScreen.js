import React from 'react'

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  AsyncStorage,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


import DButton from '../components/DButton';
import DButtonLink from '../components/DButtonLink';
import DViewHolder from '../components/DViewHolder';
import DTextFieldConatiner from '../components/DTextFieldConatiner';
import HomeScreen from '../screens/HomeScreen';
import DefaultStyles from '../constants/DefaultStyles';

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class LoginScreen extends React.Component {

    constructor(props){
      super(props)
      this._bootstrapAsync();
      this.state = {
        TextInputName:'',
        TextInputPassword : '',
      };
    }
    // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@UserName:key');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    if(userToken !=''){
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  };
  static navigationOptions = {
    header: null,
  };
  render (){
    return(
     <DViewHolder>
        <DTextFieldConatiner>
<TextInput  style={styles.textInput} placeholder="Enter User Name" underlineColorAndroid='transparent' onChangeText={(TextInputName) => this.setState({TextInputName})}/>
<TextInput  style={styles.textInput} placeholder="Enter Password" secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(TextInputPassword) => this.setState({TextInputPassword})}/>
<DButton text="Login" onPress={this.cheOnSubmit}></DButton>
</DTextFieldConatiner>
<DButtonLink text='Not Yet Registred?' onPress={this.goToRegistration}></DButtonLink>
      </DViewHolder>
    );
  }

  // checking weather the field is empty or not
  cheOnSubmit= () =>{
    const {TextInputName}= this.state;
    const {TextInputPassword} = this.state;

  			if (TextInputName == '' || TextInputPassword == '') {
          alert("Please fill all the field");
        }else {
          alert("okay");
        }
  }

  // goto registration
  goToRegistration = () =>{
     this.props.navigation.navigate('Registration');
  }
}
