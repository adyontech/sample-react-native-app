import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../../components/NavDrawer/index";
import MainFeedScreen from "./../../screens/NewsFeed/index";
import JobsHome from "../../screens/Jobs/Home/index";
import Profile from "../../screens/Profile/index";
import Applied from "../../screens/Applied/index";
import UserSettings from "../../screens/UserSetting/index";
import Help from "../../screens/Help/index";

import NavigationService from "./../Services/NavigationService";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: MainFeedScreen },
    JobsHome: { screen: JobsHome },
    Profile: { screen: Profile },
    Applied: { screen: Applied },
    UserSettings: { screen: UserSettings },
    Help: { screen: Help }
  },
  {
    contentComponent: props => (
      <SideBar
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        {...props}
      />
    )
  }
);
export default HomeScreenRouter;
