// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import InnerScreens from "./../../Navigation/Switcher/index";

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <View style={{ backgroundColor: "white" }}>
//         <InnerScreens />
//       </View>
//     );
//   }
// }
import React from "react";
import { StatusBar } from "react-native";
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
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer() {
    console.log(this.props);
    this.props.navigation.navigate("DrawerOpen");
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={this.openDrawer}
              // onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
