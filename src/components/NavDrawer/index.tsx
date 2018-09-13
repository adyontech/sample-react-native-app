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
  Content,
  Card,
  List,
  ListItem,
  Button,
  CardItem,
  Icon,
  Body,
  Text
} from "native-base";
import {
  NavigationInjectedProps,
  NavigationEventSubscription
} from "react-navigation";
import { Col, Row, Grid } from "react-native-easy-grid";
interface Props extends NavigationInjectedProps {}

export default class SideBar extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    console.log(props);
  }
  logOut() {
    console.log("logged out");
  }
  render() {
    return (
      <Container style={styles.containerClass}>
        <Content>
          <View style={styles.contentClass}>
            <View style={{ flex: 12, flexDirection: "column" }}>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Grid style={{ backgroundColor: "white", paddingLeft: 10 }}>
                      <Row>
                        <Image
                          style={styles.profileImage}
                          source={require("./../../static/img/c.jpg")}
                        />
                      </Row>
                      <Row>
                        <Text style={styles.studentName}>Aayushi Agarwal</Text>
                      </Row>
                      <Row>
                        <Text
                          style={styles.viewProfile}
                          onPress={() =>
                            this.props.navigation.navigate("Profile")
                          }
                        >
                          see profile
                        </Text>
                      </Row>
                    </Grid>
                  </Body>
                </CardItem>
              </Card>
              <Card
                transparent
                style={{
                  paddingLeft: 10,
                  marginTop: 10,
                  flex: 1,
                  justifyContent: "flex-start",
                  alignItems: "flex-start"
                }}
              >
                <Grid>
                  <Row>
                    <Button
                      full
                      style={{ width: "100%", alignItems: "flex-start" }}
                      transparent
                      light
                      onPress={() => this.props.navigation.navigate("Profile")}
                    >
                      <Text style={styles.navLlistItem}> Home</Text>
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      full
                      style={{ width: "100%" }}
                      transparent
                      light
                      onPress={() => this.props.navigation.navigate("Profile")}
                    >
                      <Text style={styles.navLlistItem}> Jobs</Text>
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      full
                      style={{ width: "100%" }}
                      transparent
                      light
                      onPress={() => this.props.navigation.navigate("Profile")}
                    >
                      <Text style={styles.navLlistItem}> Applied</Text>
                    </Button>
                  </Row>
                </Grid>
              </Card>
            </View>
            <View style={{ bottom: 0 }}>
              <Card transparent style={styles.bottomCard}>
                <Grid>
                  <Row style={{ height: 60, padding: 5 }}>
                    <Button
                      iconLeft
                      transparent
                      primary
                      style={{ width: "100%" }}
                      full
                      light
                      onPress={() => this.logOut()}
                    >
                      <Icon name="log-out" style={{ color: "black" }} />
                      <Text style={styles.logOut}> Log Out</Text>
                    </Button>
                  </Row>
                  <Row style={{ height: 30, padding: 2 }}>
                    <Col size={2} style={{ paddingLeft: 15 }}>
                      <Image
                        style={styles.logoImage}
                        source={require("./../../static/img/s.png")}
                      />
                    </Col>
                    <Col size={1} style={{ paddingTop: 10 }}>
                      <Text style={styles.bottomCardText}>Settings</Text>
                    </Col>
                    <Col size={1} style={{ paddingTop: 10 }}>
                      <Text style={styles.bottomCardText}>Help</Text>
                    </Col>
                  </Row>
                </Grid>
              </Card>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerClass: {
    flex: 1,
    backgroundColor: "rgb(32,53, 70)",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
    // alignItems: "center",
    // alignContent: "center"
  },
  contentClass: {
    flex: 1,
    // height: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  profileImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 50
  },

  logoImage: {
    height: 30,
    width: 30,
    marginBottom: 10,
    borderRadius: 50
  },
  studentName: {
    fontSize: 25
  },
  viewProfile: {
    fontSize: 15,
    color: "black",
    marginTop: 5
  },
  navLlistItem: {
    fontSize: 15
  },
  logOut: {
    color: "black"
  },
  bottomCard: {
    backgroundColor: "white",
    // position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 100
  },
  bottomCardText: {
    fontSize: 15
  }
});
