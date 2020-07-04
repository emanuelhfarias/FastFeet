import React from 'react';
import { Button, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BackgroundHeader } from '../../../components/BackgroundHeader';

import { Container, Block } from './styles';

export default function NewProblem() {
  return (
    <Container>
      <BackgroundHeader />

      <Block>
        <TextInput
          multiline
          editable
          numberOfLines={15}
          textAlignVertical="top"
          placeholder="Inclua aqui o problema que ocorreu na entrega  "
          /* onChangeText={(text) => onChangeText(text)} */
        />

        <Button onPress={() => {}} color="#7d40e7" title="Enviar" />
      </Block>
    </Container>
  );
}

NewProblem.navigationOptions = ({ navigation }) => ({
  title: 'Informar Problema',
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
