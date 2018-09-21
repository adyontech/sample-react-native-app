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
import NavigationService from "./../../../Navigation/Services/NavigationService";
class NewsHome extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.openNotification = this.openNotification.bind(this);
    this._onPressCard = this._onPressCard.bind(this);
  }

  _onPressCard(id: Number) {
    this.props.navigation.navigate("NewsView", { feedId: id });
  }
  private allNews = [
    {
      id: 1,
      type: "Application open",
      news:
        "KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS KIND  ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCSKIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS",
      createdBy: "Shawn Majoski",
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      type: "General Info",
      news:
        "KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS KIND  ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCSKIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS",
      createdBy: "paul Majoski",
      createdAt: "4 hours ago"
    },
    {
      id: 3,
      type: "Urgent Info",
      news:
        "KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS KIND  ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCSKIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS",
      createdBy: "Amin walker",
      createdAt: "5 hours ago"
    },
    {
      id: 4,
      type: "Geeral Info",
      news:
        "KIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS KIND  ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCSKIND ATTENTION NCR STUDENTS- ADDITIONAL LIST FOR TCS",
      createdBy: "Rise Matheli",
      createdAt: "10 hours ago"
    }
  ];

  openDrawer() {
    NavigationService.openDrawer();
  }
  openNotification() {
    console.log("openning notifs");
    this.props.navigation.navigate("NotificationsMain");
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: "rgb(32,53, 70)" }}>
          <Left>
            <Button transparent onPress={this.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Welcome</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.openNotification}>
              <Icon name="ios-aarm" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          {this.allNews.map(news => {
            return (
              <Card key={news.id}>
                <CardItem
                  header
                  button
                  onPress={() => this._onPressCard(news.id)}
                >
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={{ color: "green" }}>{news.type}</Text>

                    <Text style={{ color: "black", marginTop: 5 }}>
                      {news.news}
                    </Text>
                  </View>
                </CardItem>
                <CardItem button>
                  <Body>
                    <Text style={{ fontSize: 13 }}>
                      {news.createdBy} ~ {news.createdAt}.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}
export default NewsHome;
