import React from 'react';
import { Button, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BackgroundHeader } from '../../../components/BackgroundHeader';

import { Container, Block, BlockInside, Text } from './styles';

export default function Confirm() {
  return (
    <Container>
      <BackgroundHeader />

      <Block>
        <BlockInside>
          <Text>Tire uma foto da assinatura</Text>

          <TouchableOpacity onPress={() => {}}>
            <Icon name="photo-camera" size={40} color="#333" />
          </TouchableOpacity>
        </BlockInside>
        <Button onPress={() => {}} color="#7d40e7" title="Enviar" />
      </Block>
    </Container>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
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
