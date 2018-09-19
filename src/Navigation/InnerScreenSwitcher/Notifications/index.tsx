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
// import NewsView from "./../../../screens/NewsFeed/NewsView";

export default createStackNavigator(
  {
    NotificationsMain: {
      screen: NotificationsMain,
      path: "feed"
    }
    // NewsView: {
    //   screen: NewsView,
    //   path: "feedId/:id"
    // }
  },
  {
    headerMode: "none",
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
      }
    })
  }
);
