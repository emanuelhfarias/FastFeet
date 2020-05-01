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
} from '../_layouts/default/styles';
import { ButtonsGroup, Back, Save } from '../../components/Buttons';

export default function RecipientForm() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  useEffect(() => {
    async function fetchRecipient() {
      const response = await api.get('recipient', { params: { id } });
      if (response.data.records) {
        setNome(response.data.records[0].nome);
        setRua(response.data.records[0].rua);
        setNumero(response.data.records[0].numero);
        setComplemento(response.data.records[0].complemento);
        setCidade(response.data.records[0].cidade);
        setEstado(response.data.records[0].estado);
        setCep(response.data.records[0].cep);
      }
    }
    if (id) fetchRecipient();
  }, [id]);

  function clearForm() {
    setNome('');
    setRua('');
    setNumero('');
    setComplemento('');
    setCidade('');
    setEstado('');
    setCep('');
  }

  async function handleSave() {
    const formData = { nome, rua, numero, complemento, cidade, estado, cep };
    if (id) {
      await api.put(`/recipient/${id}`, formData);
      toast.success('Destinatário foi atualizado.');
    } else {
      await api.post('/recipient', formData);
      toast.success('Destinatário cadastrado com sucesso.');
      clearForm();
    }
  }

  return (
    <Content>
      <Actions>
        <Title>{id ? 'Edição' : 'Cadastro'} de Destinatário</Title>
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
            <span>Nome</span>
            <Input
              name="nome"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </GroupLine>

        <GroupLine>
          <div>
            <span>Rua</span>
            <Input
              name="rua"
              placeholder="rua"
              value={rua}
              onChange={(e) => setRua(e.target.value)}
            />
          </div>
          <div>
            <span>Numero</span>
            <Input
              name="numero"
              placeholder="numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
          </div>
          <div>
            <span>Complemento</span>
            <Input
              name="complemento"
              placeholder="complemento"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </div>
        </GroupLine>

        <GroupLine>
          <div>
            <span>Cidade</span>
            <Input
              name="cidade"
              placeholder="cidade"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
            />
          </div>
          <div>
            <span>Estado</span>
            <Input
              name="estado"
              placeholder="estado"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
            />
          </div>
          <div>
            <span>CEP</span>
            <Input
              name="cep"
              placeholder="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
            />
          </div>
        </GroupLine>
      </Form>
    </Content>
  );
}
