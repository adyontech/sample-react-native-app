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
import FeedScreenSwitcher from "./../../Navigation/InnerScreenSwitcher/NewsFeedScreenSwitcher/index";
class NewsFeedMain extends React.Component {
  changeHandler() {
    console.log("open");
  }
  render() {
    return <FeedScreenSwitcher handleClick={this.changeHandler} />;
  }
}
export default NewsFeedMain;
