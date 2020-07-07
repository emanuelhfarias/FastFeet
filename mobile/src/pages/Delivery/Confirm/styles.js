import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.View`
  flex: 1;
`;

export const Block = styled.View`
  background: #fff;
  margin: 0 12px;
  padding: 8px 14px 0px 14px;
  border-radius: 4px;
  min-height: 100px;
`;

export const BlockInside = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  padding: 30px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;
