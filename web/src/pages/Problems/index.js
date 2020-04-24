import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import {
  ActionsMenu,
  ItemLink,
  ItemModalExcluir,
} from '../../components/ActionsMenu';

import { Content, Title, Table } from '../_layouts/default/styles';

export default function Problems() {
  const history = useHistory();
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function fetchProblems() {
      const response = await api.get('/delivery/problems');
      setProblems(response.data);
    }

    fetchProblems();
  }, []);

  async function cancelarEncomenda(id) {
    await api.delete(`problem/${id}/cancel-delivery`);
    history.push('/deliveries');
  }

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
                <ActionsMenu width="220px">
                  <>
                    <ItemLink text="Editar" to="/problems/edit" />
                    <ItemModalExcluir
                      text="Cancelar encomenda"
                      action={() => cancelarEncomenda(problem.id)}
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
