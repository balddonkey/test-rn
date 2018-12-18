import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Jiwu from './src/modules/jiwu/home';
import Test from './src/modules/jiwu/test';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Jiwu
  },
  Test: {
    screen: Test
  }
});

export default createAppContainer(AppNavigator);