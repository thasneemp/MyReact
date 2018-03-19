import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export default class DButtonlink extends React.Component {

static propTypes={
  text : PropTypes.string.isRequired,
  onPress:PropTypes.func.isRequired,
}
render(){
  const {
    text,onPress,
  }=this.props;

  return(
    <TouchableOpacity style={styles.linkEnabled} onPress={()=>onPress()}>
    <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
}
}

const styles = StyleSheet.create({
  linkEnabled:{
    marginTop:20,
    borderColor:'#202646',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    backgroundColor:'transparent'
  },
  textStyle:{
      color:'#202646',
      backgroundColor:'transparent',
  }
});
