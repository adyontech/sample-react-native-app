import React from "react";
import { AppRegistry, Image, StatusBar, ImageBackground } from "react-native";
import {
  NavigationInjectedProps,
  NavigationEventSubscription
} from "react-navigation";
import { Container, Content, Text, List, ListItem } from "native-base";
const routes = ["Home", "Chat", "Profile"];
interface Props extends NavigationInjectedProps {}
export default class SideBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    console.log(props);
  }
  render() {
    return (
      <Container>
        <Content>
          {/* <ImageBackground
            source={{
              uri:
                "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ImageBackground
              style={{ height: 80, width: 70 }}
              source={{
                uri:
                  "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </ImageBackground> */}
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
