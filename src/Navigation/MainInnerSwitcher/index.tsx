import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import MainFeedScreen from "./../../screens/NewsFeed/index";
import JobsHome from "../../screens/Jobs/Home/index";
import Profile from "../../screens/Profile/index";
import SideBar from "./../../components/NavDrawer/index";

import NavigationService from "./../Services/NavigationService";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: MainFeedScreen },
    JobsHome: { screen: JobsHome },
    Profile: { screen: Profile }
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
