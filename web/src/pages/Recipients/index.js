import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { ActionsMenu, ItemLink, ItemModal } from '../../components/ActionsMenu';

import {
  Content,
  Title,
  Actions,
  SearchBox,
  Table,
} from '../_layouts/default/styles';

import { ButtonsGroup, New } from '../../components/Buttons';

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
        <ButtonsGroup>
          <New action={() => {}} />
        </ButtonsGroup>
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
              <td>
                <ActionsMenu>
                  <>
                    <ItemModal text="Visualizar" component={<></>} />
                    <ItemLink text="Editar" to="/recipients/edit" />
                    <ItemModal text="Excluir" component={<></>} />
                  </>
                </ActionsMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );
}
