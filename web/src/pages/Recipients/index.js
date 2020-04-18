import React, { useState, useEffect } from 'react';

import { GoPlus } from 'react-icons/go';

import api from '../../services/api';

import {
  Content,
  Title,
  Actions,
  SearchBox,
  Button,
  Table,
} from '../_layouts/default/styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function fetchRecipients() {
      const response = await api.get('recipient');
      setRecipients(response.data);
    }

    fetchRecipients();
  }, []);

  return (
    <Content>
      <Title>Gerenciando Destinatários</Title>

      <Actions>
        <SearchBox placeholder="Buscar por destinatários" />
        <Button>
          <GoPlus size={18} />
          Cadastrar
        </Button>
      </Actions>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient) => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.nome}</td>
              <td>{recipient.rua}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );
}
