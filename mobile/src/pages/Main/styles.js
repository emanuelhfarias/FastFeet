import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Image = styled.Image`
  width: 82%;
  height: 35px;
`;

export const Form = styled.View`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-top: 30px;
  background: #fff;
  color: #9f9f9f;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
  background: #81bf19;
`;
