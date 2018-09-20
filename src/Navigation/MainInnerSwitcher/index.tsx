import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import SideBar from "../../components/NavDrawer/index";
import MainFeedScreen from "./../../screens/NewsFeed/index";
import JobsHome from "../../screens/Jobs/index";
import Profile from "../../screens/Profile/index";
import Applied from "../../screens/Applied/index";
import UserSettings from "../../screens/UserSetting/index";
import Help from "../../screens/Help/index";
import Notifications from "../../screens/Notifications/index";

import NavigationService from "./../Services/NavigationService";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: MainFeedScreen },
    Applied: { screen: Applied },
    JobsHome: { screen: JobsHome },
    Profile: { screen: Profile },
    UserSettings: { screen: UserSettings },
    Help: { screen: Help },
    AllNotifications: { screen: Notifications }
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
