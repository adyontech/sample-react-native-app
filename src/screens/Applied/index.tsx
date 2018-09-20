import React from "react";
import {
  AppRegistry,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
  View
} from "react-native";
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";
import AppliedScreenSwitcher from "./../../Navigation/InnerScreenSwitcher/AppliedScreenSwitcher/index";
class AppliedFeedMain extends React.Component {
  render() {
    return <AppliedScreenSwitcher />;
  }
}
export default AppliedFeedMain;
