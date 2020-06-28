import React from 'react';
import { Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

import ProfileHeader from '../../components/ProfileHeader';

function Dashboard() {
  return (
    <Container>
      <ProfileHeader />
      <Text>Entregas</Text>
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="menu" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
