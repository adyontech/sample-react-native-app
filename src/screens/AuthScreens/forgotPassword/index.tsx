import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ backgroundColor: "white" }}>
        <Text>ForgotPassword screen</Text>
      </View>
    );
  }
}
