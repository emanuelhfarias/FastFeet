import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { StatusBadger } from '../../components/StatusBadger';
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

export default function Deliveries() {
  const history = useHistory();
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await api.get('delivery');
      setDeliveries(response.data);
    }

    fetchDeliveries();
  }, []);

  async function deleteDelivery(id) {
    await api.delete(`delivery/${id}`);
    window.location.reload();
  }

  return (
    <Content>
      <Title>Gerenciando Encomendas</Title>

      <Actions>
        <SearchBox placeholder="Buscar por encomendas" />
        <ButtonsGroup>
          <New action={() => history.push('/deliveries/new')} />
        </ButtonsGroup>
      </Actions>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Encomenda</th>
            <th>Destinatário</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>#{delivery.id}</td>
              <td>{delivery.product}</td>
              <td>{delivery.Recipient.nome}</td>
              <td>{delivery.Recipient.cidade}</td>
              <td>{delivery.Recipient.estado}</td>
              <td>
                <StatusBadger
                  endDate={delivery.end_date}
                  canceledDate={delivery.canceled_at}
                />
              </td>
              <td>
                <ActionsMenu>
                  <>
                    <ItemModal
                      text="Visualizar"
                      modalTitle="Encomendas"
                      component={<Show id={delivery.id} />}
                    />
                    <ItemLink
                      text="Editar"
                      link={`/deliveries/${delivery.id}/edit`}
                    />
                    <ItemModalExcluir
                      text="Excluir"
                      action={() => deleteDelivery(delivery.id)}
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
