import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import { Container, Title, Delivery } from './styles';

import ProfileHeader from '../../components/ProfileHeader';

function Dashboard({ navigation }) {
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
        <Delivery key={delivery.id}>
          <Text>{delivery.product}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Details')}>
            <Text>Details</Text>
          </TouchableOpacity>
        </Delivery>
      ))}
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerShown: false,
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="menu" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
