import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./../../../static/img/rnicon.png")}
            style={styles.logo}
          />
          <Text style={styles.title}>Manage your placements.</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(32,53, 70)",
    flexDirection: "column"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  logo: {
    width: 108,
    height: 56
  },
  title: {
    color: "#f7c744",
    fontSize: 18,
    textAlign: "center",
    marginTop: 15
  }
});
