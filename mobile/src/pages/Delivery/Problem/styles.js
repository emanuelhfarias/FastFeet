import styled from 'styled-components/native';

export const Container = styled.ScrollView``;

export const Block = styled.View`
  background: #fff;
  margin: 0 12px;
  padding: 8px 14px 12px 14px;
  border-radius: 4px;
  min-height: 100px;
`;

export const ProblemBlock = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ProblemText = styled.Text`
  width: 200px;
  font-size: 14px;
  color: #999;
`;

export const ProblemDate = styled.Text`
  width: 80px;
  font-size: 12px;
  color: #c1c1c1;
`;
