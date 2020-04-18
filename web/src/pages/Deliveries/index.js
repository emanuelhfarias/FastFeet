import React, { useState, useEffect } from 'react';

import { GoPlus } from 'react-icons/go';

import api from '../../services/api';

import { StatusBadger } from '../../components/StatusBadger';

import {
  Content,
  Title,
  Actions,
  SearchBox,
  Button,
  Table,
} from '../_layouts/default/styles';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await api.get('delivery');
      setDeliveries(response.data);
    }

    fetchDeliveries();
  }, []);

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
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );
}
