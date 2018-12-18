import React, { Component } from "react";
import { View, Text } from 'react-native';

export default class Home extends Component {
  static navigationOptions = function(d) {
    return {
      title: "Second",
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitle: "Home"
    };
	};

  render() {
    return (
      <View>
        <Text>second</Text>
      </View>
    );
  }
}