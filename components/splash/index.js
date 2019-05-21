/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

function Splash (props) {
    var navigate = props.navigation.navigate;
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../images/toko.png')}/>
        <Text style={styles.welcome} onPress={() => props.navigation.replace('Category')}>Splash, Klik Next</Text>
      </View>
    );
}

Splash.navigationOptions = {
  header : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200
  },
});

export default Splash;
