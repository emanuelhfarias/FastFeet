import React, { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BackgroundHeader } from '../../../components/BackgroundHeader';
import api from '../../../services/api';

import { Container, Block } from './styles';

export default function NewProblem({ navigation }) {
  const delivery_id = navigation.getParam('delivery_id');
  const [problem, setProblem] = useState('');

  async function registerProblem() {
    const response = await api.post(`delivery/${delivery_id}/problems`, {
      description: problem,
    });

    if (response.status === 200) {
      setProblem('');
      navigation.navigate('Problem', { delivery_id });
    }
  }

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
          value={problem}
          onChangeText={(text) => setProblem(text)}
        />

        <Button title="Enviar" color="#7d40e7" onPress={registerProblem} />
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
