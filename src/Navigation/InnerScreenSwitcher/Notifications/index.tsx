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

import NotificationsMain from "./../../../screens/Notifications/Home";

export default createStackNavigator(
  {
    NotificationsMain: {
      screen: NotificationsMain,
      path: "notif"
    }
  },
  {
    headerMode: "none"
  }
);
