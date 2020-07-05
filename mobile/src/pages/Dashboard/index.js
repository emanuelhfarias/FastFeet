import React, { useState, useEffect } from 'react';

import { withNavigationFocus } from 'react-navigation';

import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import { parseISO, format } from 'date-fns';
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
  Deliveries,
} from './styles';

import ProfileHeader from '../../components/ProfileHeader';

function Dashboard({ navigation }) {
  const [deliveries, setDeliveries] = useState([]);
  const [filter, setFilter] = useState('pendente');

  function aguardandoRetirada(delivery) {
    return delivery.canceled_at === null;
  }

  function retirada(delivery) {
    return delivery.start_date !== null && delivery.canceled_at === null;
  }

  function entregue(delivery) {
    return delivery.end_date !== null && delivery.canceled_at === null;
  }

  async function fetchDeliveries() {
    const response = await api.get('delivery');

    const records = response.data.records.filter((delivery) => {
      if (filter === 'pendente') {
        return delivery.end_date === null && delivery.canceled_at === null;
      }

      return entregue(delivery);
    });

    setDeliveries(records);
  }

  useEffect(() => {
    fetchDeliveries();
  }, [filter]);

  useEffect(() => {
    fetchDeliveries();
  }, []);

  return (
    <Container>
      <ProfileHeader />

      <Filter>
        <Title>Entregas</Title>
        <DeliveryStatus>
          <Button onPress={() => setFilter('entregue')}>
            <StatusOption active={filter === 'entregue'}>
              Entregues
            </StatusOption>
          </Button>
          <Button onPress={() => setFilter('pendente')}>
            <StatusOption active={filter === 'pendente'}>
              Pendentes
            </StatusOption>
          </Button>
        </DeliveryStatus>
      </Filter>

      <Deliveries>
        {deliveries.map((delivery, index) => (
          <Delivery key={delivery.id}>
            <DeliveryTitle>
              <IconCommunity name="truck" size={22} color="#7d40e7" />
              <DeliveryTitleText>Entrega {index + 1}</DeliveryTitleText>
            </DeliveryTitle>

            <Timeline>
              <TimelineStatus>
                <StatusDot completed={aguardandoRetirada(delivery)} />
                <TimelineStatusText>Aguardando Retirada</TimelineStatusText>
              </TimelineStatus>

              <TimelineStatus>
                <StatusDot completed={retirada(delivery)} />
                <TimelineStatusText>Retirada</TimelineStatusText>
              </TimelineStatus>

              <TimelineStatus>
                <StatusDot completed={entregue(delivery)} />
                <TimelineStatusText>Entregue</TimelineStatusText>
              </TimelineStatus>
            </Timeline>

            <DeliveryInfo>
              <DeliveryInfoBlock>
                <DeliveryInfoLegend>Data</DeliveryInfoLegend>
                <DeliveryInfoContent>
                  {format(parseISO(delivery.createdAt), 'dd/MM/yyyy')}
                </DeliveryInfoContent>
              </DeliveryInfoBlock>
              <DeliveryInfoBlock>
                <DeliveryInfoLegend>Cidade</DeliveryInfoLegend>
                <DeliveryInfoContent>
                  {delivery.Recipient.cidade}
                </DeliveryInfoContent>
              </DeliveryInfoBlock>
              <Button onPress={() => navigation.navigate('Details')}>
                <DetailsLink>Ver detalhes</DetailsLink>
              </Button>
            </DeliveryInfo>
          </Delivery>
        ))}
      </Deliveries>
    </Container>
  );
}

export default withNavigationFocus(Dashboard);
