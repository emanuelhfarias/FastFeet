import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '../../store/modules/auth/actions';
import { Container, TextGroup, Text, Name } from './styles';

import Avatar from '../Avatar';

export default function ProfileHeader() {
  const profile = useSelector((state) => state.auth.profile.records[0]);
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar profile={profile} size="50" />
      <TextGroup>
        <Text>Bem vindo de volta,</Text>
        <Name>{profile.name}</Name>
      </TextGroup>
      <TouchableOpacity onPress={logout}>
        <Icon name="exit-to-app" size={20} color="#E74040" />
      </TouchableOpacity>
    </Container>
  );
}
