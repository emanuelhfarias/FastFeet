import React, { useMemo } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { parseISO, format } from 'date-fns';
import { signOut } from '../../store/modules/auth/actions';

import { Container, Info, Label, Text, Logout } from './styles';
import Avatar from '../../components/Avatar';

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
      <Avatar profile={profile} size="100" centralize />

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

export default withNavigationFocus(Profile);
