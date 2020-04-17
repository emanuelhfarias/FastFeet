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

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await api.get('delivery');
      setDeliveries(response.data);
    }

    fetchDeliveries();
  }, []);

  function status(delivery) {
    if (delivery.end_date !== null) return 'ENTREGUE';
    if (delivery.canceled_at !== null) return 'CANCELADA';
    if (delivery.end_date !== null && delivery.canceled_at) return 'RETIRADA';
    return 'PENDENTE';
  }

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
          <th>Encomenda</th>
          <th>Destinatário</th>
          <th>Cidade</th>
          <th>Estado</th>
          <th>Status</th>
          <th>Ações</th>
        </thead>
        <tbody>
          {deliveries.map((delivery, index) => (
            <tr>
              <td>#{index + 1}</td>
              <td>{delivery.product}</td>
              <td>{delivery.Recipient.nome}</td>
              <td>{delivery.Recipient.cidade}</td>
              <td>{delivery.Recipient.estado}</td>
              <td>{status(delivery)}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );
}
