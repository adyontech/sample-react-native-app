import React from "react";
import {
  AppRegistry,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
  View,
  Linking
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
  Subtitle,
  CardItem
} from "native-base";
class NewsView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const feedId = navigation.getParam("feedId", "NO-ID");

    return (
      <Container>
        <Header style={{ backgroundColor: "rgb(32,53, 70)" }}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>minro Majoski</Title>
            <Subtitle>2 hours ago</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card transparent>
            <CardItem header bordered>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ color: "green", marginTop: 5, marginBottom: 5 }}>
                  Application Open {feedId}
                </Text>
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "black" }}
                >
                  KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS KIND
                  ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCSKIND ATTENTION
                  NCR STUDENTS- ADDITIONAL LIST FOR TCS
                </Text>
              </View>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  is a free and open source framework that enable developers to
                  build high-quality mobile apps using React Native iOS and
                  Android apps with a fusion of ES6. NativeBase is a free and
                  open source framework that enable developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps with a fusion of ES6. NativeBase is a free and open
                  source framework that enable developers to build high-quality
                  mobile apps using React Native iOS and Android apps with a
                  fusion of ES6. NativeBase is a free and open source framework
                  that enable developers to build high-quality mobile apps using
                  React Native iOS and Android apps with a fusion of ES6.
                  NativeBase is a free and open source framework that enable
                  developers to build high-quality mobile apps using React
                  Native iOS and Android apps with a fusion of ES6. NativeBase
                  is a free and open source framework that enable developers to
                  build high-quality mobile apps using React Native iOS and
                  Android apps with a fusion of ES6. NativeBase is a free and
                  open source framework that enable developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps with a fusion of ES6. NativeBase is a free and open
                  source framework that enable developers to build high-quality
                  mobile apps using React Native iOS and Android apps with a
                  fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              bordered
              style={{ flex: 1, flexDirection: "column" }}
            >
              <Text style={{ color: "green" }}>Links</Text>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <View
                  style={{ paddingTop: 10, flex: 1, flexDirection: "column" }}
                >
                  <Text>Download Excel sheet.</Text>
                  <Text
                    style={{ color: "green" }}
                    onPress={() => {
                      Linking.openURL("https://google.com");
                    }}
                  >
                    tinyurl.com
                  </Text>
                </View>
                <View
                  style={{ paddingTop: 10, flex: 1, flexDirection: "column" }}
                >
                  <Text>Download Excel sheet.</Text>
                  <Text
                    style={{ color: "green" }}
                    onPress={() => {
                      Linking.openURL("https://google.com");
                    }}
                  >
                    tinyurl.com
                  </Text>
                </View>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default NewsView;
