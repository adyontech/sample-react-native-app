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

import MainNewsFeed from "./../../../screens/NewsFeed/Home";
import NewsView from "./../../../screens/NewsFeed/NewsView";

export default createStackNavigator(
  {
    MainNewsFeed: {
      screen: MainNewsFeed,
      path: "feed"
    },
    NewsView: {
      screen: NewsView,
      path: "feedId/:id"
    }
  },
  {
    headerMode: "none"
  }
);