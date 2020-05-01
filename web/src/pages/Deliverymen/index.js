import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import {
  ActionsMenu,
  ItemLink,
  ItemModal,
  ItemModalExcluir,
} from '../../components/ActionsMenu';

import { AvatarThumbnail } from '../../components/AvatarUploader';

import {
  Content,
  Title,
  Actions,
  SearchBox,
  Table,
} from '../_layouts/default/styles';

import { Pagination } from '../../components/Pagination';

import Show from './Show';
import { ButtonsGroup, New } from '../../components/Buttons';

export default function Deliverymen() {
  const history = useHistory();
  const [deliverymen, setDeliverymen] = useState([]);
  const [paginationInfo, setPaginationInfo] = useState({
    prev: false,
    next: false,
    total: 0,
  });

  async function fetchDeliverymen(queyPage = 1) {
    const response = await api.get('deliveryman', {
      params: { page: queyPage },
    });
    setDeliverymen(response.data.records);
    setPaginationInfo(response.data.pagination);
  }

  useEffect(() => {
    fetchDeliverymen();
  }, []);

  async function deleteDeliverymen(id) {
    await api.delete(`deliveryman/${id}`);
    window.location.reload();
  }

  return (
    <Content>
      <Title>Gerenciando Entregadores</Title>

      <Actions>
        <SearchBox placeholder="Buscar por entregadores" />
        <ButtonsGroup>
          <New action={() => history.push('/deliverymen/new')} />
        </ButtonsGroup>
      </Actions>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((deliveryman) => (
            <tr key={deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td>
                <AvatarThumbnail
                  avatar={deliveryman.avatar}
                  name={deliveryman.name}
                />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionsMenu>
                  <>
                    <ItemModal
                      text="Visualizar"
                      component={<Show id={deliveryman.id} />}
                      modalTitle="Entregador"
                    />
                    <ItemLink
                      text="Editar"
                      link={`/deliverymen/${deliveryman.id}/edit`}
                    />
                    <ItemModalExcluir
                      text="Excluir"
                      action={() => deleteDeliverymen(deliveryman.id)}
                    />
                  </>
                </ActionsMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination info={paginationInfo} fetchData={fetchDeliverymen} />
    </Content>
  );
}
