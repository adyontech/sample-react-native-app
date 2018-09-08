import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Animated, Easing } from "react-native";
import { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Root } from "native-base";

import NavigatorScreen from "./src/Navigation/Switcher/index";
// const Application = NavigatorScreen
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <NavigatorScreen />
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    height: 280,
    display: "flex",
    flex: 12,
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
