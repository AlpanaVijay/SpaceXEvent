import React from 'react';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./Screens/HomeScreen"
import DetailScreen from "./Screens/DetailScreen"
import SearchScreen from "./Screens/SearchScreen"

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = createSwitchNavigator(
  { 
   HomeScreen: {
      screen: HomeScreen,
    },
    DetailScreen: {
      screen: DetailScreen,
    },
     SearchScreen: {
      screen: SearchScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);
