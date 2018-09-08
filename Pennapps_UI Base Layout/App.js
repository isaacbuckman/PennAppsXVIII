import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import Home from "./src/screens/Home";

import Account from "./src/screens/Account";

import Map from "./src/screens/Map";
import Confirmation from "./src/screens/Confirmation";
import SignInPage from "./src/screens/SignInPage";
import AdminPage from "./src/screens/AdminPage";
import AdminRegister from "./src/screens/AdminRegister";
import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  Account: {
    screen: Account
  },
  Map: {
    screen: Map
  },
  Confirmation: {
    screen: Confirmation
  },
  SignInPage: {
    screen: SignInPage
  },
  AdminPage: {
    screen: AdminPage
  },
  AdminRegister: {
    screen: AdminRegister
  },
  Home: {
    screen: Home
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Account: {
      screen: Account
    },
    Map: {
      screen: Map
    },
    Confirmation: {
      screen: Confirmation
    },
    SignInPage: {
      screen: SignInPage
    },
    AdminPage: {
      screen: AdminPage
    },
    AdminRegister: {
      screen: AdminRegister
    },
    Home: {
      screen: Home
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "TsukuARdGothic-Bold": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
