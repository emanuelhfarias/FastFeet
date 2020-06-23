import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../components/Background';

export default function Main() {
  return (
    <Background>
      <Input
        style={{ marginTop: 10 }}
        icon="perm-identity"
        placeholder="Informe seu ID de cadastro"
      />

      <Button>Entrar no sistema</Button>
    </Background>
  );
}
