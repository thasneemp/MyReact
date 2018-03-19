import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


export default class DTextFieldConatiner extends React.Component {

render(){
  return(
  <View style={styles.textInputConatiner}>{this.props.children}</View>
  );
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
});
