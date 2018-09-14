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
class NewsHome extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
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
    // console.log(this.props.navigation.navigate);
    this.props.navigation.openDrawer();
  }
  typeColor() {
    return <Text>asdasd</Text>;
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
        </Header>
        <Content padder>
          {this.allNews.map(news => {
            return (
              <Card key={news.id}>
                <CardItem
                  header
                  button
                  onPress={() => alert("This is Card Header")}
                >
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={{ color: "green" }}>{news.type}</Text>

                    <Text style={{ color: "black", marginTop: 5 }}>
                      {news.news}
                    </Text>
                  </View>
                </CardItem>
                <CardItem button onPress={() => alert("This is Card Body")}>
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
