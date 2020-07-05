import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  margin: 0 auto;
  padding-top: 20px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #444;
`;

export const Delivery = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Filter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeliveryStatus = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StatusOption = styled.Text`
  padding: 6px;
  color: ${(props) => (props.active ? '#7d40e7' : '#444')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const DetailsLink = styled.Text`
  color: #7d40e7;
`;

export const Button = styled.TouchableOpacity``;

export const DeliveryTitle = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DeliveryTitleText = styled.Text`
  margin-left: 10px;
  color: #7d40e7;
  font-size: 14px;
`;

export const Timeline = styled.View`
  margin-top: 5px;
  margin-left: 15px;
  padding: 10px;
  display: flex;
  flex-direction: row;
`;

export const TimelineStatus = styled.View`
  border-top-width: 1px;
  border-top-color: #7d40e7;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimelineStatusText = styled.Text`
  width: 75px;
  font-size: 11px;
  text-align: center;
  color: #999;
`;

export const StatusDot = styled.View`
  width: 12px;
  height: 12px;
  top: -6px;
  border: 1px solid #7d40e7;
  border-radius: 6px;
  margin-bottom: 4px;
  background: ${(props) => (props.completed ? '#7d40e7' : '#FFFFFF')};
`;

export const DeliveryInfo = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DeliveryInfoBlock = styled.View`
  width: 75px;
`;

export const DeliveryInfoLegend = styled.Text`
  font-size: 10px;
  color: #999;
`;
export const DeliveryInfoContent = styled.Text`
  font-size: 12px;
  color: #444;
  font-weight: bold;
`;

export const Deliveries = styled.ScrollView``;
