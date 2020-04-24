import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import { ActionsMenu, ItemLink, ItemModal } from '../../components/ActionsMenu';

import { Content, Title, Table } from '../_layouts/default/styles';

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
              <td>
                <ActionsMenu>
                  <>
                    <ItemLink text="Editar" to="/problems/edit" />
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
