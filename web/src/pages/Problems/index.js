import React, { useState, useEffect } from 'react';

import { Content, Title, Table } from '../_layouts/default/styles';

import api from '../../services/api';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function fetchProblems() {
      const response = await api.get('/delivery/problems');
      setProblems(response.data);
    }

    fetchProblems();
  }, []);

  return (
    <Content>
      <Title>Problemas nas Entregas</Title>

      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem) => (
            <tr key={problem.id}>
              <td>#{problem.delivery_id}</td>
              <td>{problem.description}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Content>
  );
}
