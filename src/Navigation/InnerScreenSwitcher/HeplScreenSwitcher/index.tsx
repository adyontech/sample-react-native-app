import React from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { Animated, Easing } from "react-native";

import HelpHome from "./../../../screens/Help/Home";
import HelpMessage from "./../../../screens/Help/Message";

export default createStackNavigator(
  {
    MainNewsFeed: {
      screen: HelpHome,
      path: "help"
    },
    NewsView: {
      screen: HelpMessage,
      path: "helpMessage"
    }
  },
  {
    headerMode: "none",
   
  }
);
