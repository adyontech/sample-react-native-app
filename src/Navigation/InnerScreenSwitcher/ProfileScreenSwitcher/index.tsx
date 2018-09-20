import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";

import MainProfile from "./../../../screens/Profile";

const export default createStackNavigator(
  {
    MainProfile: {
      screen: MainProfile,
      path: "feed"
    }
  },
  {
    headerMode: "none",
   
  }
);