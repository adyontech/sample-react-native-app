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

import AppliedFeed from "./../../../screens/Applied/Home";
import AppliedStatus from "./../../../screens/Applied/AppliedView";

export default createStackNavigator(
  {
    AppliedFeed: {
      screen: AppliedFeed,
      path: "applied"
    },
    AppliedStatus: {
      screen: AppliedStatus,
      path: "applied/:id"
    }
  },
  {
    headerMode: "none"
  }
);
