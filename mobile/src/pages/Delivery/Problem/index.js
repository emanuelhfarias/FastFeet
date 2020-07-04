import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { BackgroundHeader } from '../../../components/BackgroundHeader';

import {
  Container,
  Block,
  ProblemBlock,
  ProblemDate,
  ProblemText,
} from './styles';

export default function Problem() {
  return (
    <Container>
      <BackgroundHeader />

      <Block>
        <ProblemBlock>
          <ProblemText>Destinatário ausente</ProblemText>
          <ProblemDate>14/01/2020</ProblemDate>
        </ProblemBlock>

        <ProblemBlock>
          <ProblemText>Destinatário ausente</ProblemText>
          <ProblemDate>15/01/2020</ProblemDate>
        </ProblemBlock>
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
