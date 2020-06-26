import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Main: createSwitchNavigator({
          Main,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        headerMode: 'none',
        initialRouteName: signedIn ? 'App' : 'Main',
      }
    )
  );
