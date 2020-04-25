import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import {
  ActionsMenu,
  ItemLink,
  ItemModal,
  ItemModalExcluir,
} from '../../components/ActionsMenu';

import {
  Content,
  Title,
  Actions,
  SearchBox,
  Table,
} from '../_layouts/default/styles';

import { ButtonsGroup, New } from '../../components/Buttons';
import Show from './Show';

export default function Recipients() {
  const history = useHistory();
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function fetchRecipients() {
      const response = await api.get('recipient');
      setRecipients(response.data);
    }

    fetchRecipients();
  }, []);

  async function deleteRecipient(id) {
    await api.delete(`recipient/${id}`);
    window.location.reload();
  }

  return (
    <Content>
      <Title>Gerenciando Destinatários</Title>

      <Actions>
        <SearchBox placeholder="Buscar por destinatários" />
        <ButtonsGroup>
          <New action={() => history.push('/recipients/new')} />
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
                    <ItemModal
                      text="Visualizar"
                      modalTitle="Destinatário"
                      component={<Show id={recipient.id} />}
                    />
                    <ItemLink
                      text="Editar"
                      link={`/recipients/${recipient.id}/edit`}
                    />
                    <ItemModalExcluir
                      text="Excluir"
                      action={() => deleteRecipient(recipient.id)}
                    />
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
