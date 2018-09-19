import React, { Component } from "react";
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
  Card,
  Text,
  CardItem
} from "native-base";
import {
  Platform,
  StyleSheet,
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
import {
  NavigationInjectedProps,
  NavigationEventSubscription
} from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";

import Entypo from "react-native-vector-icons/Entypo";
const routes = ["Home", "Chat", "Profile"];
interface Props extends NavigationInjectedProps {}
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer() {
    this.props.navigation.openDrawer();
  }
  render() {
    return (
      //   <StatusBar barStyle="light-content" />
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>This is profile Section</Text>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: "green",
    flexDirection: "column"
  }
});
