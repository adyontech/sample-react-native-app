import React, { Component } from "react";
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
  Item,
  Input,
  CardItem
} from "native-base";
import NavigationService from "./../../../Navigation/Services/NavigationService";
export default class JobsHome extends Component {
  constructor(props) {
    super(props);
    this.toggleFilterBox = this.toggleFilterBox.bind(this);
    this.state = {
      showFilterBox: false
    };
  }

  toggleFilterBox = () => {
    this.setState({
      showFilterBox: !this.state.showFilterBox
    });
  };

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
  _onPressCard(id: Number) {
    this.props.navigation.navigate("NewsView", { feedId: id });
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
            <Title>Jobs</Title>
          </Body>
        </Header>
        <Header style={{ backgroundColor: "rgb(32,53, 70)" }} searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onFocus={this.toggleFilterBox} />
            <Icon name="ios-people" />
          </Item>
        </Header>
        {this.state.showFilterBox ? (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "space-between",
              backgroundColor: "rgb(32,53, 70)"
            }}
          >
            <Button transparent>
              <Text style={{ color: "white" }}>Filters</Text>
            </Button>
            <Button transparent>
              <Text style={{ color: "white" }}>Search</Text>
            </Button>
          </View>
        ) : null}
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
