import React from 'react';
import { View, Text } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Dashboard() {
  return (
    <View>
      <Text>Entregas</Text>
    </View>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="menu" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Dashboard);
