import React from 'react';

import logo from '../../assets/logo.png';
import { Container, Content, Profile, Link, LinkLogout } from './styles';

export default function Header() {
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
              <LinkLogout to="/sair">Sair do sistma</LinkLogout>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
