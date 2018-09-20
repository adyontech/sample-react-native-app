import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StatusBar,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
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
  CardItem,
  ListItem,
  List,
  Thumbnail
} from "native-base";
import NavigationService from "./../../../Navigation/Services/NavigationService";
class NewsHome extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.openFilterBox = this.openFilterBox.bind(this);
    this.closeFilterBox = this.closeFilterBox.bind(this);
    this._onPressJobName = this._onPressJobName.bind(this);
    this.state = {
      showFilterBox: false
    };
  }
  openFilterBox = () => {
    this.setState({
      showFilterBox: true
    });
  };
  closeFilterBox = () => {
    this.setState({
      showFilterBox: false
    });
  };

  private allNews = [
    {
      id: 1,
      status: "Selected",
      nameOfCompany: "TCS",
      createdBy: "Shawn Majoski",
      createdAt: "2 hours ago",
      jobsOffered: {
        title: "Web designer",
        id: "0",
        allowed: "Applicable"
      }
    },
    {
      id: 2,
      status: "Round-2",
      nameOfCompany:
        "longest company name award goes to this company longest company name award goes to this company",
      createdBy: "paul Majoski",
      createdAt: "4 hours ago",
      jobsOffered: {
        title: "CTO of company",
        id: "0",
        allowed: "Applicable"
      }
    },
    {
      id: 3,
      status: "Group desciosion",
      nameOfCompany: "Infosys",
      createdBy: "Amin walker",
      createdAt: "5 hours ago",
      jobsOffered: {
        title: "Marketing head",
        id: "0",
        allowed: "Applicable"
      }
    },
    {
      id: 4,
      status: "Goinng on",
      nameOfCompany: "Wipro",
      createdBy: "Rise Matheli",
      createdAt: "10 hours ago",
      jobsOffered: {
        title: "Sales manager",
        id: "0",
        allowed: "Applicable"
      }
    }
  ];
  openDrawer() {
    NavigationService.openDrawer();
  }
  _onPressJobName(id: String) {
    console.log(id);
    const NavigationActions = this.props.navigation;
    this.props.navigation.navigate("JobsScreen", { jobId: id });
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
            <Title>Applied</Title>
          </Body>
          <Right>
            <Button transparent onPress={this.openNotification}>
              <Icon name="ios-alarm" />
            </Button>
          </Right>
        </Header>
        <Content padder>
          {this.allNews.map(jobs => {
            return (
              <Card key={jobs.id}>
                <CardItem header button style={{ paddingBottom: 15 }}>
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={{ color: "green", fontSize: 13 }}>
                      {jobs.status}
                    </Text>
                    <Content>
                      <List>
                        <ListItem thumbnail>
                          <Left>
                            {/* <Text>img</Text> */}
                            <Thumbnail
                              square
                              source={{
                                uri:
                                  "https://facebook.github.io/react-native/docs/assets/favicon.png"
                              }}
                            />
                          </Left>
                          <Body>
                            <Text>{jobs.nameOfCompany}</Text>
                            <Text note numberOfLines={1}>
                              Its time to build a difference . .
                            </Text>
                          </Body>
                          <Right>
                            <Button transparent>
                              <Text>View</Text>
                            </Button>
                          </Right>
                        </ListItem>
                      </List>
                    </Content>

                    {/* <Text
                      style={{ color: "black", marginTop: 5, fontSize: 25 }}
                    >
                      {jobs.nameOfCompany}
                    </Text> */}
                  </View>
                </CardItem>
                <List>
                  <ListItem key={jobs.id}>
                    <TouchableOpacity
                      style={{
                        paddingHorizontal: 10,
                        margin: 0,
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between"
                      }}
                      onPress={() => this._onPressJobName(jobs.jobsOffered.id)}
                    >
                      <Body>
                        <Text>{jobs.jobsOffered.title}</Text>
                        <Text note>{jobs.jobsOffered.allowed}</Text>
                      </Body>
                      <Right>
                        <Text style={{ color: "blue" }}>Check</Text>
                      </Right>
                    </TouchableOpacity>
                  </ListItem>
                </List>
              </Card>
            );
          })}
        </Content>
      </Container>
    );
  }
}
export default NewsHome;
