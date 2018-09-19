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
import HelpScreenSwitcher from "./../../Navigation/InnerScreenSwitcher/HeplScreenSwitcher/index";
class HelpMain extends React.Component {
  changeHandler() {
    console.log("open");
  }
  render() {
    return <HelpScreenSwitcher handleClick={this.changeHandler} />;
  }
}
export default HelpMain;
