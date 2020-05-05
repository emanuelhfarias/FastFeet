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
  Field,
  FieldLabel,
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
      if (response.data.records) {
        setEntregador({
          id: response.data.records[0].deliveryman_id,
          name: response.data.records[0].Deliveryman.name,
        });
        setDestinatario({
          id: response.data.records[0].recipient_id,
          nome: response.data.records[0].Recipient.nome,
        });
        setProduto(response.data.records[0].product);
      }
    }
    if (id) fetchRecipient();
  }, [id]);

  async function fetchEntregadores() {
    const response = await api.get('deliveryman');
    if (response.data.records) setEntregadores(response.data.records);
  }

  async function fetchDestinatarios() {
    const response = await api.get('recipient');
    if (response.data.records) setDestinatarios(response.data.records);
  }

  useEffect(() => {
    fetchEntregadores();
  }, []);

  useEffect(() => {
    fetchDestinatarios();
  }, []);

  function clearForm() {
    setEntregador('');
    setDestinatario('');
    setProduto('');
  }

  async function handleSave() {
    const formData = {
      deliveryman_id: entregador.id,
      recipient_id: destinatario.id,
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

  const searchEntregador = (inputValue) => {
    return entregadores.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const searchDestinatario = (inputValue) => {
    return entregadores.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

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
          <Field>
            <FieldLabel>Entregador</FieldLabel>
            <Select
              name="deliveryman_id"
              placeholder="selecione um entregador"
              noOptionsMessage={() => 'sem opções'}
              loadingMessage={() => 'carregando...'}
              getOptionLabel={(option) => `${option.name}`}
              getOptionValue={(option) => `${option.id}`}
              loadOptions={(inputValue, callback) =>
                callback(searchEntregador(inputValue))
              }
              defaultOptions={entregadores}
              value={entregador}
              onChange={(e) => setEntregador({ id: e.id, name: e.name })}
            />
          </Field>
          <Field>
            <FieldLabel>Destinatário</FieldLabel>
            <Select
              name="recipient_id"
              placeholder="selecione um destinatário"
              noOptionsMessage={() => 'sem opções'}
              loadingMessage={() => 'carregando...'}
              getOptionLabel={(option) => `${option.nome}`}
              getOptionValue={(option) => `${option.id}`}
              loadOptions={(inputValue, callback) =>
                callback(searchDestinatario(inputValue))
              }
              defaultOptions={destinatarios}
              value={destinatario}
              onChange={(e) => setDestinatario({ id: e.id, nome: e.nome })}
            />
          </Field>
        </GroupLine>

        <GroupLine>
          <Field>
            <FieldLabel>Produto</FieldLabel>
            <Input
              name="product"
              placeholder="produto"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
            />
          </Field>
        </GroupLine>
      </Form>
    </Content>
  );
}
