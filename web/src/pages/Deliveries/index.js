import React from 'react';

import { GoPlus } from 'react-icons/go';
import {
  Content,
  Title,
  Actions,
  SearchBox,
  Button,
  Table,
} from '../_layouts/default/styles';

export default function Deliveries() {
  return (
    <Content>
      <Title>Gerenciando Encomendas</Title>

      <Actions>
        <SearchBox placeholder="Buscar por encomendas" />
        <Button>
          <GoPlus size={18} />
          Cadastrar
        </Button>
      </Actions>

      <Table>
        <thead>
          <th>ID</th>
          <th>Destinatário</th>
          <th>Entregador</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>...</td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Wolfgang Amadeus</td>
            <td>Manolo</td>
            <td>Florianópolis</td>
            <td>Santa Catarina</td>
            <td>Pendente</td>
            <td>...</td>
          </tr>
        </tbody>
      </Table>
    </Content>
  );
}
