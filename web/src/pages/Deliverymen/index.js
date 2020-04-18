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

import { ActionsMenu, ItemLink, ItemModal } from '../../components/ActionsMenu';

export default function Deliverymen() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function fetchDeliverymen() {
      const response = await api.get('deliveryman');
      setDeliverymen(response.data);
    }

    fetchDeliverymen();
  }, []);

  return (
    <Content>
      <Title>Gerenciando Entregadores</Title>

      <Actions>
        <SearchBox placeholder="Buscar por entregadores" />
        <Button>
          <GoPlus size={18} />
          Cadastrar
        </Button>
      </Actions>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td>avatar</td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionsMenu>
                  <>
                    <ItemModal text="Visualizar" />
                    <ItemLink text="Editar" to="/deliverymen/edit" />
                    <ItemModal text="Excluir" />
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
