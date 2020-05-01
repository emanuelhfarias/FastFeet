import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';
import api from '../../../services/api';

import { ModalContent } from '../../_layouts/default/styles';

export default function Show({ id }) {
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    async function fetchRecipient() {
      const response = await api.get('recipient', { params: { id } });
      if (response.data.records) {
        setRecipient(response.data.records[0]);
      }
    }

    fetchRecipient();
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
        <strong>ID:</strong> {recipient.id}
      </p>
      <p>
        <strong>Nome:</strong> {recipient.nome}
      </p>
      <p>
        <strong>Rua:</strong> {recipient.rua}
      </p>
      <p>
        <strong>Número:</strong> {recipient.numero}
      </p>
      <p>
        <strong>Complemento:</strong> {recipient.complemento}
      </p>
      <p>
        <strong>Estado:</strong> {recipient.estado}
      </p>
      <p>
        <strong>Cidade:</strong> {recipient.cidade}
      </p>
      <p>
        <strong>CEP:</strong> {recipient.cep}
      </p>
      <p>
        <strong>Data criação:</strong> {formatDate(recipient.createdAt)}
      </p>
    </ModalContent>
  );
}

Show.propTypes = {
  id: PropTypes.number.isRequired,
};
