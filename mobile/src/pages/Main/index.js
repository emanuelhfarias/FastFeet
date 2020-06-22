import React from 'react';
import { Text } from 'react-native';

import Background from '../../components/Background';

export default function Main() {
  return (
    <Background>
      <Text>Sign In</Text>
    </Background>
  );
}

Main.navigationOptions = {
  title: 'FastFeet',
};
