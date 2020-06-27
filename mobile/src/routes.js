import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Main: createSwitchNavigator({
          Main,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#777',
              style: {
                borderTopWidth: 0,
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      {
        headerMode: 'none',
        initialRouteName: signedIn ? 'App' : 'Main',
      }
    )
  );
