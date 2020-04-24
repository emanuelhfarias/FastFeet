import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';
import api from '../../../services/api';

import { ModalContent } from '../../_layouts/default/styles';

export default function Show({ id }) {
  const [delivery, setDelivery] = useState({});

  useEffect(() => {
    async function fetchDelivery() {
      const response = await api.get('delivery', { params: { id } });
      if (response.data) {
        setDelivery(response.data[0]);
      }
    }

    fetchDelivery();
  }, [id]);

  function formatDate(date) {
    if (date) {
      return <span>{format(parseISO(date), 'dd/MM/yyyy')}</span>;
    }
    return '';
  }

  return (
    <ModalContent>
      <p>
        <strong>ID:</strong> {delivery.id}
      </p>
      <p>
        <strong>Produto:</strong> {delivery.product}
      </p>
      <p>
        <strong>Entregador:</strong> {delivery?.Deliveryman?.name}
      </p>
      <p>
        <strong>Destinatário:</strong> {delivery?.Recipient?.nome}
      </p>
      <p>
        <strong>Cidade:</strong> {delivery?.Recipient?.cidade}
      </p>
      <p>
        <strong>Data criação:</strong> {formatDate(delivery.createdAt)}
      </p>
    </ModalContent>
  );
}

Show.propTypes = {
  id: PropTypes.number.isRequired,
};
