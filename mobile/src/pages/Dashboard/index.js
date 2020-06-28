import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { Container, Title } from './styles';

import ProfileHeader from '../../components/ProfileHeader';

function Dashboard() {
  const [deliveries, setDeliveries] = useState([]);

  async function fetchDeliveries() {
    const response = await api.get('delivery');

    setDeliveries(response.data.records);
  }

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <Container>
      <ProfileHeader />
      <Title>Entregas</Title>
      {deliveries.map((delivery) => (
        <Text key={delivery.id}>{delivery.product}</Text>
      ))}
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
