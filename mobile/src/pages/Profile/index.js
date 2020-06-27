import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO, format } from 'date-fns';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Info, Label, Text, Image, Logout } from './styles';

function Profile() {
  const profile = useSelector((state) => state.auth.profile.records[0]);
  const dispatch = useDispatch();

  const dateParsed = useMemo(() => {
    return format(parseISO(profile.createdAt), 'dd/MM/yyyy');
  }, [profile.createdAt]);

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Image
        source={{
          uri: profile.avatar
            ? profile.avatar.url.replace('localhost', '10.0.2.2')
            : `https://api.adorable.io/avatar/50/${profile.name}.png`,
        }}
      />

      <Info>
        <Label>Nome Completo</Label>
        <Text>{profile.name}</Text>
      </Info>

      <Info>
        <Label>Email</Label>
        <Text>{profile.email}</Text>
      </Info>

      <Info>
        <Label>Data de cadastro</Label>
        <Text>{dateParsed}</Text>
      </Info>

      <View style={{ marginTop: 10 }}>
        <Logout title="Logout" color="#E74040" onPress={logout} />
      </View>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Profile);
