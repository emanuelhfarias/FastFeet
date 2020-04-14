import React from 'react';

import { Wrapper, Form } from './styles';

import Logo from '../../assets/logo.png';

export default function SignUp() {
  return (
    <Wrapper>
      <Form>
        <img src={Logo} alt="FastFeet" />

        <div>
          <label htmlFor="email">
            Seu e-mail
            <input
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
            <input
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
