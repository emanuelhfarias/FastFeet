import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Details from './pages/Delivery/Details';
import Problem from './pages/Delivery/Problem';
import NewProblem from './pages/Delivery/NewProblem';
import Confirm from './pages/Delivery/Confirm';

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Main: createSwitchNavigator({
          Main,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard: {
              screen: createStackNavigator({
                Dashboard: {
                  screen: Dashboard,
                  navigationOptions: { headerShown: false },
                },
                Details: { screen: Details },
                Problem: { screen: Problem },
                NewProblem: { screen: NewProblem },
                Confirm: { screen: Confirm },
              }),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="menu" size={20} color={tintColor} />
                ),
              },
            },
            Profile: {
              screen: Profile,
              navigationOptions: {
                tabBarLabel: 'Meu Perfil',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="person" size={20} color={tintColor} />
                ),
              },
            },
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
