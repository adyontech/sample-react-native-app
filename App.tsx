/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import { Animated, Easing } from "react-native";
import { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import { Root } from "native-base";
// import Login from "./src/screens/login/index";
// const Application = createStackNavigator(
//   {
//     Home: { screen: Login }
//   },
//   {
//     navigationOptions: {
//       header: false
//     },
//     headerMode: "none",
//     transitionConfig: () => `({
//       transitionSpec: {
//         duration: 0,
//         timing: Animated.timing,
//         easing: Easing.step0
//       }
//     })
//   }
// );
import NavigatorScreen from "./src/Navigation/Switcher/index";
// const Application = NavigatorScreen
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.title}>aadii104</Text>
      <Root>
        <Text>Hello</Text>
        <NavigatorScreen />
      </Root>
      // </View>
    );
  }
}
