import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../../services/api';

import {
  Container,
  Actions,
  InfoBlock,
  Item,
  Text,
  Label,
  Title,
  TitleText,
  GroupItem,
  ActionItem,
  ActionText,
} from './styles';

import { BackgroundHeader } from '../../../components/BackgroundHeader';

export default function Details({ navigation }) {
  const delivery = navigation.getParam('delivery');
  const [recipient, setRecipient] = useState({});

  function situacao({ end_date, canceled_at }) {
    let text = 'PENDENTE';
    if (end_date) text = 'ENTREGUE';
    if (canceled_at) text = 'CANCELADA';

    return text;
  }

  useEffect(() => {
    async function fetchRecipient() {
      const response = await api.get('recipient', {
        params: { id: delivery.recipient_id },
      });

      setRecipient(response.data.records[0]);
    }

    fetchRecipient();
  }, []);

  return (
    <Container>
      <BackgroundHeader />

      <InfoBlock>
        <Title>
          <IconCommunity name="truck" size={20} color="#7d40e7" />
          <TitleText>Informações da Entrega</TitleText>
        </Title>

        <Item>
          <Label>Destinatário</Label>
          <Text>{delivery.Recipient.nome}</Text>
        </Item>

        <Item>
          <Label>Endereço</Label>
          <Text>
            {recipient
              ? `${recipient.rua}, ${recipient.numero}, ${recipient.complemento}, ${recipient.cidade}`
              : '---'}
          </Text>
        </Item>

        <Item>
          <Label>Produto</Label>
          <Text>{delivery.product}</Text>
        </Item>
      </InfoBlock>

      <InfoBlock>
        <Title>
          <IconCommunity name="calendar" size={20} color="#7d40e7" />
          <TitleText>Situação da Entrega</TitleText>
        </Title>

        <Item>
          <Label>Status</Label>
          <Text>{situacao(delivery)}</Text>
        </Item>
        <GroupItem>
          <Item>
            <Label>Data Retirada</Label>
            <Text>
              {delivery.start_date !== null
                ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
                : '--/--/----'}
            </Text>
          </Item>
          <Item>
            <Label>Data Entrega</Label>
            <Text>
              {' '}
              {delivery.end_date !== null
                ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
                : '--/--/----'}
            </Text>
          </Item>
        </GroupItem>
      </InfoBlock>

      <Actions>
        <ActionItem>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('NewProblem');
            }}
          >
            <Icon name="highlight-off" color="#E74040" size={20} />
            <ActionText>Informar Problema</ActionText>
          </TouchableOpacity>
        </ActionItem>

        <ActionItem>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Problem');
            }}
          >
            <Icon name="info-outline" color="#E7BA40" size={20} />
            <ActionText>Visualizar Problema</ActionText>
          </TouchableOpacity>
        </ActionItem>

        <ActionItem>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Confirm');
            }}
          >
            <IconCommunity
              name="check-circle-outline"
              color="#7D40E7"
              size={20}
            />
            <ActionText>Confirmar Entraga</ActionText>
          </TouchableOpacity>
        </ActionItem>
      </Actions>
    </Container>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  headerTintColor: 'white',
  headerStyle: { backgroundColor: '#7d40e7', elevation: 0 },
  headerTitleStyle: { fontWeight: 'normal', fontSize: 16 },
  headerLeftContainerStyle: { left: 15 },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
