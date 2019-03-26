/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import TestQR from './src/screens/TestQR';
import ScanScreen from './src/screens/ScanScreen';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Test: {
      screen: TestQR,
    },
    Scanner: {
      screen: ScanScreen,
    },
  },
  {
    initialRouteName: 'Test',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

