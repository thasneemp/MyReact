import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


export default class DViewHolder extends React.Component {

render(){
  return(
  <View style={styles.mainContainer}>{this.props.children}</View>
  );
}
}

const styles = StyleSheet.create({
  mainContainer :{
    flex:1,
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'skyblue'
  },
});
