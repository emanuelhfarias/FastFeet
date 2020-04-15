import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Wrapper, Form, Input } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

import Logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido.')
    .required('email obrigatório'),
  password: Yup.string().required('senha obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
    </Wrapper>
  );
}
