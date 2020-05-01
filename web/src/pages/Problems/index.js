import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { ActionsMenu, ItemModalExcluir } from '../../components/ActionsMenu';

import { Content, Title, Table } from '../_layouts/default/styles';

import { Pagination } from '../../components/Pagination';

export default function Problems() {
  const history = useHistory();
  const [problems, setProblems] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({
    prev: false,
    next: false,
    total: 0,
  });

  async function fetchProblems(queyPage = 1) {
    const response = await api.get('/delivery/problems', {
      params: { page: queyPage },
    });
    setProblems(response.data.records);
    setPaginationInfo(response.data.pagination);
  }

  useEffect(() => {
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

      <Pagination info={paginationInfo} fetchData={fetchProblems} />
    </Content>
  );
}
