import React from 'react';

import Background from '../../components/Background';

import Logo from '../../assets/logo.png';
import { Container, Form, Image, FormInput, SubmitButton } from './styles';

export default function Main() {
  return (
    <Background>
      <Container>
        <Image source={Logo} resizeMode="stretch" />

        <Form>
          <FormInput
            icon="perm-identity"
            placeholder="Informe seu ID de cadastro"
          />

          <SubmitButton>Entrar no sistema</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
