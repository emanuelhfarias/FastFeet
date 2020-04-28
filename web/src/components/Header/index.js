import React from 'react';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logo.png';
import { Container, Content, Profile, Link, LinkLogout } from './styles';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/deliveries">Encomendas</Link>
          <Link to="/deliverymen">Entregadores</Link>
          <Link to="/recipients">Destinatários</Link>
          <Link to="/problems">Problemas</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Emanuel H. Farias</strong>
              <LinkLogout onClick={handleSignOut}>Sair do sistma</LinkLogout>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
