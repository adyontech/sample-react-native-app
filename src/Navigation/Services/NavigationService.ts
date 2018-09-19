import { NavigationActions } from "react-navigation";

let _navigator: any;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function openDrawer() {
  console.log(_navigator.props.navigation.toggleDrawer());
  // this.props.navigation.navigate("DrawerOpen");
  // console.log(this.props.navigation.navigate("DrawerOpen"));
}

function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  openDrawer
};
