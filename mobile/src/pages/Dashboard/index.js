import React, { useState, useEffect } from 'react';

import { withNavigationFocus } from 'react-navigation';

import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import api from '../../services/api';

import {
  Container,
  Title,
  Delivery,
  Filter,
  DeliveryStatus,
  StatusOption,
  Button,
  DetailsLink,
  DeliveryTitle,
  DeliveryTitleText,
  Timeline,
  TimelineStatus,
  TimelineStatusText,
  StatusDot,
  DeliveryInfo,
  DeliveryInfoBlock,
  DeliveryInfoLegend,
  DeliveryInfoContent,
} from './styles';

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

      <Filter>
        <Title>Entregas</Title>
        <DeliveryStatus>
          <Button onPress={() => {}}>
            <StatusOption active>Entregues</StatusOption>
          </Button>
          <Button onPress={() => {}}>
            <StatusOption>Pendentes</StatusOption>
          </Button>
        </DeliveryStatus>
      </Filter>

      {deliveries.map((delivery, index) => (
        <Delivery key={delivery.id}>
          <DeliveryTitle>
            <IconCommunity name="truck" size={22} color="#7d40e7" />
            <DeliveryTitleText>Entrega {index + 1}</DeliveryTitleText>
          </DeliveryTitle>

          <Timeline>
            <TimelineStatus>
              <StatusDot completed />
              <TimelineStatusText>Aguardando Retirada</TimelineStatusText>
            </TimelineStatus>

            <TimelineStatus>
              <StatusDot completed />
              <TimelineStatusText>Retirada</TimelineStatusText>
            </TimelineStatus>

            <TimelineStatus>
              <StatusDot />
              <TimelineStatusText>Entregue</TimelineStatusText>
            </TimelineStatus>
          </Timeline>

          <DeliveryInfo>
            <DeliveryInfoBlock>
              <DeliveryInfoLegend>Data</DeliveryInfoLegend>
              <DeliveryInfoContent>15/02/2020</DeliveryInfoContent>
            </DeliveryInfoBlock>
            <DeliveryInfoBlock>
              <DeliveryInfoLegend>Cidade</DeliveryInfoLegend>
              <DeliveryInfoContent>Diadema</DeliveryInfoContent>
            </DeliveryInfoBlock>
            <Button onPress={() => navigation.navigate('Details')}>
              <DetailsLink>Ver detalhes</DetailsLink>
            </Button>
          </DeliveryInfo>
        </Delivery>
      ))}
    </Container>
  );
}

export default withNavigationFocus(Dashboard);
