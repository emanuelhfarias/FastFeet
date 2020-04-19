import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { ActionsMenu, ItemLink, ItemModal } from '../../components/ActionsMenu';

import {
  Content,
  Title,
  Actions,
  SearchBox,
  Table,
} from '../_layouts/default/styles';

import Show from './Show';
import { ButtonsGroup, New } from '../../components/Buttons';

export default function Deliverymen() {
  const history = useHistory();
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
        <ButtonsGroup>
          <New action={() => history.push('/deliverymen/new')} />
        </ButtonsGroup>
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
                    <ItemModal
                      text="Visualizar"
                      component={<Show id={deliveryman.id} />}
                      modalTitle="Entregador"
                    />
                    <ItemLink
                      text="Editar"
                      link={`/deliverymen/${deliveryman.id}/edit`}
                    />
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
