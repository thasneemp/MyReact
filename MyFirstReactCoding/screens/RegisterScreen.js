import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import DViewHolder from '../components/DViewHolder';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render(){
    return(
<DViewHolder/>
    );
  }
}
