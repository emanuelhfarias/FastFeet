import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Content,
  Title,
  Actions,
  GroupLine,
  Form,
  Input,
  Select,
} from '../_layouts/default/styles';
import { ButtonsGroup, Back, Save } from '../../components/Buttons';

export default function DeliveryForm() {
  const { id } = useParams();
  const [produto, setProduto] = useState('');

  const [entregador, setEntregador] = useState('');
  const [entregadores, setEntregadores] = useState([]);

  const [destinatario, setDestinatario] = useState('');
  const [destinatarios, setDestinatarios] = useState([]);

  useEffect(() => {
    async function fetchRecipient() {
      const response = await api.get('delivery', { params: { id } });
      if (response.data) {
        setEntregador(response.data[0].deliveryman_id);
        setDestinatario(response.data[0].recipient_id);
        setProduto(response.data[0].product);
      }
    }
    if (id) fetchRecipient();
  }, [id]);

  useEffect(() => {
    async function fetchEntregadores() {
      const response = await api.get('deliveryman');
      if (response.data) setEntregadores(response.data);
    }
    fetchEntregadores();
  }, []);

  useEffect(() => {
    async function fetchDestinatarios() {
      const response = await api.get('recipient');
      if (response.data) setDestinatarios(response.data);
    }
    fetchDestinatarios();
  }, []);

  function clearForm() {
    setEntregador('');
    setDestinatario('');
    setProduto('');
  }

  async function handleSave() {
    const formData = {
      deliveryman_id: entregador,
      recipient_id: destinatario,
      product: produto,
    };
    if (id) {
      await api.put(`/delivery/${id}`, formData);
      toast.success('Encomenda foi atualizado.');
    } else {
      await api.post('/delivery', formData);
      toast.success('Encomenda cadastrada com sucesso.');
      clearForm();
    }
  }

  return (
    <Content>
      <Actions>
        <Title>{id ? 'Edição' : 'Cadastro'} de Encomenda</Title>
        <ButtonsGroup>
          <>
            <Back />
            <Save action={handleSave} />
          </>
        </ButtonsGroup>
      </Actions>

      <Form>
        <GroupLine>
          <div>
            <span>Entregador</span>
            <Select
              name="deliveryman_id"
              onChange={(e) => setEntregador(e.target.value)}
              value={entregador}
            >
              <option>Selecione um entregador</option>
              {entregadores.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <span>Destinatário</span>
            <Select
              name="recipient_id"
              onChange={(e) => setDestinatario(e.target.value)}
              value={destinatario}
            >
              <option>Selecione um destinatário</option>
              {destinatarios.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nome}
                </option>
              ))}
            </Select>
          </div>
        </GroupLine>

        <GroupLine>
          <div>
            <span>Produto</span>
            <Input
              name="product"
              placeholder="produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
            />
          </div>
        </GroupLine>
      </Form>
    </Content>
  );
}
