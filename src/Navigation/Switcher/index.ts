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

import MainInnerScreenRouter from "./.././../Navigation/MainInnerSwitcher/index";
import LoginScreen from "./../../screens/AuthScreens/login/index";
import ForgotPasswordScreen from "./../../screens/AuthScreens/forgotPassword";
import AuthLoadingScreen from "./../../screens/AuthLoading/index";

const AppStack = createStackNavigator(
  { InnerScreens: MainInnerScreenRouter },
  {
    headerMode: "none"
  }
);
const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    headerMode: "none"
  }
);
export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "AuthLoading"
  },
  {
    headerMode: "none"
  }
);
