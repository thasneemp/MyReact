import React from 'react';
import {
  TextInput,
  View,
  Text,
  AsyncStorage,
} from 'react-native';

import DButton from '../components/DButton';
import DViewHolder from '../components/DViewHolder';
import DTextFieldConatiner from '../components/DTextFieldConatiner';
import DefaultStyles from '../constants/DefaultStyles';
import DButtonLink from '../components/DButtonLink';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        myKey: null
    }
  }


  async getKey() {
     try {
       const value = await AsyncStorage.getItem('@UserName:key');
       this.setState({myKey: value});
       alert(value);
     } catch (error) {
       alert(error);
       console.log("Error retrieving data" + error);
     }
   }

   async saveKey(key,value) {
     try {
       await AsyncStorage.setItem(key, value);
     } catch (error) {
       console.log("Error saving data" + error);
     }
   }

   async resetKey() {
     try {
       await AsyncStorage.removeItem('@UserName:key');
       const value = await AsyncStorage.getItem('@UserName:key');
       this.setState({myKey: value});
     } catch (error) {
       console.log("Error resetting data" + error);
     }
   }




  static navigationOptions = {
    header: null,
  };
  render(){
    return(
<DViewHolder>
<DTextFieldConatiner>
<Text> Stored key is = {this.state.myKey}</Text>
<TextInput style={styles.textInput} placeholder="Enter User Name" underlineColorAndroid='transparent' onChangeText={(value) => this.saveKey('@UserName:key',value)}></TextInput>
<TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter Password" underlineColorAndroid='transparent'></TextInput>
<TextInput style={styles.textInput} secureTextEntry={true} placeholder="Enter Confirm Password" underlineColorAndroid='transparent'></TextInput>
<DButton text="Register"></DButton>
</DTextFieldConatiner>
<DButtonLink text='Back To Login' onPress={this.getKey.bind(this)}></DButtonLink>
</DViewHolder>
    );
  }
  // bac to default
  backTLogin=()=>{
    this.props.navigation.goBack();
  }

  doRegistration=()=>{

  }

}
