import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView``;

export const Header = styled.View`
  position: absolute;
  width: ${Dimensions.get('window').width}px;
  height: 80px;
  background: #7d40e7;
`;

export const InfoBlock = styled.View`
  background: #fff;
  margin: 0 12px;
  padding: 8px 14px 0px 14px;
  border-radius: 4px;
`;

export const Title = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: #7d40e7;
  font-family: 'roboto';
  font-weight: bold;
`;

export const Item = styled.View`
  padding: 9px 0;
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #999;
  font-family: 'roboto';
  font-weight: bold;
  text-transform: uppercase;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666;
  font-family: 'roboto';
`;

export const GroupItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Actions = styled.View`
  margin: 0 24px;
  display: flex;
  flex-direction: row;
`;

export const ActionItem = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 80px;
`;

export const ActionText = styled.Text`
  font-size: 10px;
  color: #666;
  font-family: 'roboto';
  width: 80px;
`;
