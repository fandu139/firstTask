/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  componentWillMount(){
    fetch('https://product-catalog-api.herokuapp.com/products/')
    .then((response) => response.json())
    .then((res) => { 
      alert(res); 
    });
  }

  render() {
    return (
      <View style = {styles.container} >
       < View style = {styles.background}>
          <Image
            style={{width: 80, height: 80}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Text style={styles.title}>
            Baju {'\n'}{'\n'}
            <Text style={styles.pricetitle}>
              Rp.5000
            </Text>
          </Text>
       </ View>
       < View style = {styles.background} >
          <Image
            style={{width: 80, height: 80}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Text style={styles.title}>
            Baju {'\n'}{'\n'}
            <Text style={styles.pricetitle}>
              Rp.5000
            </Text>
          </Text>
       </ View>
       < View style = {styles.background} >
          <Image
            style={{width: 80, height: 80}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
          <Text style={styles.title}>
            Baju {'\n'}{'\n'}
            <Text style={styles.pricetitle}>
              Rp.5000
            </Text>
          </Text>
       </ View>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
   },
  background: {
    width: 80,
    height: 150,
    backgroundColor: 'powderblue'
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  pricetitle: {
    fontSize: 5,
    color: 'red',
  },
});
