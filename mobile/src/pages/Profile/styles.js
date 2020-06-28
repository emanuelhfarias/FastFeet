import styled from 'styled-components/native';
import { Button } from 'react-native';

export const Container = styled.View`
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`;

export const Info = styled.View`
  padding: 12px 0;
`;

export const Label = styled.Text`
  font-size: 12px;
  color: #444;
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #444;
`;

export const Logout = styled(Button)`
  margin-top: 10px;
`;
