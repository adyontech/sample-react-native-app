import React from "react";
import { Text } from "native-base";
import JobScreenSwitcher from "./../../Navigation/InnerScreenSwitcher/JobsScreenSwitcher/index";
class NewsFeedMain extends React.Component {
  changeHandler() {
    console.log("open");
  }
  render() {
    return (
      <Text style={{ color: "green", marginTop: 5, marginBottom: 5 }}>
        Setting
      </Text>
    );
  }
}
export default NewsFeedMain;
