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

export default class JobsView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const jobId = navigation.getParam("jobId", "NO-ID");

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
            <Title>Jinker tinker company</Title>
            <Subtitle>Open</Subtitle>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card transparent>
            <CardItem header bordered>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ color: "green", marginTop: 5, marginBottom: 5 }}>
                  Application Open {jobId}
                </Text>
                <Text
                  style={{ fontSize: 25, fontWeight: "bold", color: "black" }}
                >
                  Here you can get all info about a particular job posting and
                  all.
                </Text>
              </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
