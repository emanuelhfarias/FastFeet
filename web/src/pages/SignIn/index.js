import React from 'react';

import { Wrapper, Form, Input } from './styles';

import Logo from '../../assets/logo.png';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <img src={Logo} alt="FastFeet" />

        <div>
          <label htmlFor="email">
            Seu e-mail
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="exemplo@email.com"
              required
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
              required
            />
          </label>
        </div>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </Wrapper>
  );
}
