import React, { useState } from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../components/Background';

import Logo from '../../assets/logo.png';
import { Container, Form, Image, FormInput, SubmitButton } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function Main() {
  const dispatch = useDispatch();
  const [deliverymanId, setDeliverymanId] = useState(null);
  const loading = useSelector((state) => state.auth.loading);

  function signIn() {
    dispatch(signInRequest(deliverymanId));
  }

  return (
    <Background>
      <Container>
        <Image source={Logo} resizeMode="stretch" />

        <Form>
          <FormInput
            icon="perm-identity"
            keyboardType="numeric"
            placeholder="Informe seu ID de cadastro"
            autoCorrect={false}
            onChangeText={setDeliverymanId}
            value={deliverymanId}
          />

          {/* <SubmitButton loading={loading} onPress={signIn}>
            Entrar no sistema
              </SubmitButton> */}

          <Button onPress={signIn} color="#81bf19" title="Entrar no sistema" />
        </Form>
      </Container>
    </Background>
  );
}
