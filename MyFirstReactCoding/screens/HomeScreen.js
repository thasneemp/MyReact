import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  FlatList,
} from 'react-native';
import { Constants } from 'expo';
import { List, ListItem, SearchBar } from "react-native-elements";

import DButton from '../components/DButton';
import DButtonLink from '../components/DButtonLink';
import DViewHolder from '../components/DViewHolder';
import DTextFieldConatiner from '../components/DTextFieldConatiner';

export default class HomeScreen extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
      };
    }

    componentDidMount() {
      this.makeRemoteRequest();
    }
makeRemoteRequest = ()=>{
  const {page,seed} = this.state;
   const url = 'https://randomuser.me/api/?seed=${seed}&page=${page}&results=20';
   this.setState({ loading: true });

   fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
};

  static navigationOptions = {
    header: null,
  };
  render(){
    return(
      <View>
      <View style={styles.statusBar}/>
<View style={styles.toolbar}>
<Text style={styles.textStyle}>Home</Text>
      </View>
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <ListItem
          key={item.id.value}
            roundAvatar
            title={item.name.first}
            subtitle={item.email}
            onPress={()=>this._onPressItem(item)}
            avatar={{ uri: item.picture.thumbnail }}
          />
        )}
        keyExtractor={(item, index) => index}
      />
      </View>
    )
  }

  _onPressItem =(item)=>{
  }
}

const styles = StyleSheet.create({
  statusBar: {
      backgroundColor: "#671334",
      height: Constants.statusBarHeight,
    },

    toolbar:{
      height:56,
      backgroundColor:'#C2185B',
      alignItems:'flex-start',
    paddingLeft:15,
      justifyContent:'center',
    },

    textStyle:{
      color:'white',
      fontSize : 20,
      fontWeight:'bold'
    },
marT:{
flexGrow: 1, paddingBottom: 20,
}
});
