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
      <Container style={{ padding: 0 }}>
        <Content contentContainerStyle={styles.containerClass}>
          <View>
            <View>
              <Card transparent>
                <CardItem>
                  <Body>
                    <View>
                      <Image
                        style={styles.profileImage}
                        source={require("./../../static/img/c.jpg")}
                      />
                    </View>
                    <View>
                      <Text style={styles.studentName}>Aayushi Agarwal</Text>
                    </View>
                    <View>
                      <Text
                        style={styles.viewProfile}
                        onPress={() =>
                          this.props.navigation.navigate("Profile")
                        }
                      >
                        see profile
                      </Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent>
                <View>
                  <Button
                    full
                    style={styles.navListButton}
                    transparent
                    light
                    onPress={() => this.props.navigation.navigate("Profile")}
                  >
                    <Text style={styles.navListItem}> Home</Text>
                  </Button>
                </View>
                <View>
                  <Button
                    full
                    style={styles.navListButton}
                    transparent
                    light
                    onPress={() => this.props.navigation.navigate("Profile")}
                  >
                    <Text style={styles.navListItem}> Jobs</Text>
                  </Button>
                </View>
                <View>
                  <Button
                    full
                    style={styles.navListButton}
                    transparent
                    light
                    onPress={() => this.props.navigation.navigate("Profile")}
                  >
                    <Text style={styles.navListItem}> Applied</Text>
                  </Button>
                </View>
              </Card>
            </View>
          </View>
          <View style={{ margin: 0 }}>
            <Card transparent style={styles.bottomCard}>
              <View style={{ margin: 0 }}>
                {/* <View
                  style={{
                    height: 50,
                    paddingLeft: 5
                  }}
                >
                  <Button
                    iconLeft
                    transparent
                    primary
                    style={styles.logOutBtn}
                    full
                    light
                    onPress={() => this.logOut()}
                  >
                    <Icon name="log-out" style={{ color: "black" }} />
                    <Text style={styles.logOut}> Log Out</Text>
                  </Button>
                </View> */}
                <View
                  style={{
                    height: 30,
                    padding: 2,
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <View style={{ flex: 1, paddingLeft: 15 }}>
                    <Image
                      style={styles.logoImage}
                      source={require("./../../static/img/s.png")}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingTop: 5,
                      marginBottom: 15,
                      flexDirection: "row",
                      justifyContent: "space-evenly"
                    }}
                  >
                    <Button transparent light small>
                      <Text style={styles.bottomCardText}>Settings</Text>
                    </Button>
                    <Button transparent small light style={{}}>
                      <Text style={styles.bottomCardText}>Help</Text>
                    </Button>
                  </View>
                </View>
              </View>
            </Card>
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
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    padding: 0
  },
  mainBody: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  upperCard: {},
  lowerCard: {},
  profileImage: {
    marginTop: 15,
    height: 80,
    width: 80,
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
    marginTop: 5,
    fontSize: 18
  },
  viewProfile: {
    fontSize: 12,
    color: "black",
    marginTop: 10,
    marginBottom: 15
  },
  navListItem: {
    justifyContent: "flex-start",
    fontSize: 15
  },
  navListButton: {
    justifyContent: "flex-start",
    paddingLeft: 10
  },
  logOut: {
    color: "black"
  },
  bottomCard: {
    backgroundColor: "white",
    left: 0,
    right: 0,
    margin: 0,
    bottom: 0,
    height: 40
  },
  bottomCardText: {
    fontSize: 10,
    color: "black"
  },
  logOutBtn: {
    justifyContent: "flex-start",
    width: "100%"
  }
});
