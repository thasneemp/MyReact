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
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


import DButton from '../components/DButton';
import DButtonLink from '../components/DButtonLink';
import DViewHolder from '../components/DViewHolder';
import HomeScreen from '../screens/HomeScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class LoginScreen extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        TextInputName:'',
        TextInputPassword : '',
      };
    }
  static navigationOptions = {
    header: null,
  };
  render (){
    return(
     <DViewHolder>
        <View style={styles.textInputConatiner}>
<TextInput  style={styles.textInput} placeholder="Enter User Name" underlineColorAndroid='transparent' onChangeText={(TextInputName) => this.setState({TextInputName})}/>
<TextInput  style={styles.textInput} placeholder="Enter Password" secureTextEntry={true} underlineColorAndroid='transparent' onChangeText={(TextInputPassword) => this.setState({TextInputPassword})}/>
<DButton text="Login" onPress={this.cheOnSubmit}></DButton>
</View>
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


const styles = StyleSheet.create({
  
  textInputConatiner:{
    alignItems:'center',
    backgroundColor:'#ef553a',
        width:350,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
  },
  textInput:{
height:50,
width:300,
padding:10,
margin:10,
borderRadius:5,
backgroundColor:'white'
}

});
