/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './splash/index';
import Category from './category/index';
import Detailcategory from './detailcategory/index';

const Navigation = createStackNavigator({
  Splash: {screen: Splash},
  Category: {screen: Category},
  Detailcategory: {screen: Detailcategory},
},{
  initialRouteName : 'Splash',
});

const App = createAppContainer(Navigation);

export default App;
