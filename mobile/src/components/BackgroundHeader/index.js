import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const BackgroundHeader = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width}px;
  height: 80px;
  background: #7d40e7;
`;
