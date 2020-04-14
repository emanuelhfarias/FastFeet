import React from 'react';
import * as Yup from 'yup';

import { Wrapper, Form, Input } from './styles';

import Logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido.')
    .required('email obrigatório'),
  password: Yup.string().required('senha obrigatória'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Wrapper>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={Logo} alt="FastFeet" />

        <div>
          <label htmlFor="email">
            Seu e-mail
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
            />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Sua senha
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="********"
            />
          </label>
        </div>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Wrapper>
  );
}
