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

import NewsFeed from "./../../screens/NewsFeed/index";
import LoginScreen from "./../../screens/AuthScreens/login/index";
import AuthLoadingScreen from "./../../screens/AuthLoading/index";

const AppStack = createStackNavigator({ NewsFeed: NewsFeed });
const AuthStack = createStackNavigator({ SignIn: LoginScreen });
export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);
