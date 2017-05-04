/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import {NativeModules} from 'react-native';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '--> RN S01',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          style={{width: 96}}
          onPress={() => navigate('Chat')}
          title="to RN S02"
        />
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: '--> RN S02',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          style={{width: 96}}
          onPress={() => {
            NativeModules.Router.to("activityB")
          }}
          title="to Native Activity B"
        />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: {screen: HomeScreen},
  Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
