import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Content, Profile, Link, LinkLogout } from './styles';

export default function Header() {
  function isActive(event) {
    return window.location.pathname === event;
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/deliveries" active={isActive('/deliveries')}>
            Encomendas
          </Link>
          <Link to="/deliverymen" active={isActive('/deliverymen')}>
            Entregadores
          </Link>
          <Link to="/recipients" active={isActive('/recipients')}>
            Destinatários
          </Link>
          <Link to="/problems" active={isActive('/problems')}>
            Problemas
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Emanuel H. Farias</strong>
              <LinkLogout to="/sair">Sair do sistma</LinkLogout>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
