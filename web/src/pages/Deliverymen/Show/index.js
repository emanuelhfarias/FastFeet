import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';
import api from '../../../services/api';

import { ModalContent } from '../../_layouts/default/styles';

export default function Show({ id }) {
  const [deliveryman, setDeliveryman] = useState({});

  useEffect(() => {
    async function fetchDeliveryman() {
      const response = await api.get('deliveryman', { params: { id } });
      if (response.data.records) {
        setDeliveryman(response.data.records[0]);
      }
    }

    fetchDeliveryman();
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
        <strong>ID:</strong> {deliveryman.id}
      </p>
      <p>
        <strong>Nome:</strong> {deliveryman.name}
      </p>
      <p>
        <strong>E-mail:</strong> {deliveryman.email}
      </p>
      <p>
        <strong>Data criação:</strong> {formatDate(deliveryman.createdAt)}
      </p>
    </ModalContent>
  );
}

Show.propTypes = {
  id: PropTypes.number.isRequired,
};
