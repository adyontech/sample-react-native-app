import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation";
import HomeScreen from "./../../screens/NewsFeed/Home/index";
import JobsHome from "../../screens/Jobs/Home/index";
import Profile from "../../screens/Profile/index";
import SideBar from "./../../components/NavDrawer/index";
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    JobsHome: { screen: JobsHome },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
