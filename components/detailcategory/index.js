/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  render() {
    const { id, productImage, productName, productPrice } = this.props.navigation.state.params;

    return (
      <ScrollView>
        <View style = {styles.container} >
            <Image
              style={styles.imagecatalog}
              source={{uri: productImage}}
            />
            <View style={styles.deskripsi}>
              <Text style={styles.title}>
                {productName} {'\n'}
                <Text style={styles.pricetitle}>
                  Rp.{productPrice}
                </Text>
              </Text>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: 'powderblue',
   },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  pricetitle: {
    fontSize: 25,
    color: 'red',
  },
  imagecatalog: {
    height: 250,
    flex: 1,
  },
  deskripsi: {
    padding: 10,
    height: 350
  }
});
