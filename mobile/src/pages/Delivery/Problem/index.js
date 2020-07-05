import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';

import { BackgroundHeader } from '../../../components/BackgroundHeader';
import api from '../../../services/api';

import {
  Container,
  Block,
  ProblemBlock,
  ProblemDate,
  ProblemText,
} from './styles';

export default function Problem({ navigation }) {
  const delivery_id = navigation.getParam('delivery_id');
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function fetchDeliveryProblems() {
      const response = await api.get(`delivery/${delivery_id}/problems`);

      setProblems(response.data.records);
    }

    fetchDeliveryProblems();
  }, []);

  return (
    <Container>
      <BackgroundHeader />

      <Block>
        {problems.map((problem) => (
          <ProblemBlock key={problem.id}>
            <ProblemText>{problem.description}</ProblemText>
            <ProblemDate>
              {format(parseISO(problem.createdAt), 'dd/MM/yyyy')}
            </ProblemDate>
          </ProblemBlock>
        ))}
      </Block>
    </Container>
  );
}

Problem.navigationOptions = ({ navigation }) => ({
  title: 'Visualizar Problema',
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
