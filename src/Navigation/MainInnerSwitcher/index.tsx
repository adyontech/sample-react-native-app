import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import MainFeedScreen from "./../../screens/NewsFeed/index";
import JobsHome from "../../screens/Jobs/Home/index";
import Profile from "../../screens/Profile/index";
import SideBar from "./../../components/NavDrawer/index";
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: MainFeedScreen },
    JobsHome: { screen: JobsHome },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
