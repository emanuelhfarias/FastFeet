import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextGroup = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #444;
`;
