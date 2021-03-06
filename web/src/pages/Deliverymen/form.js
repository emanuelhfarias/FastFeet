import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';

import {
  Content,
  Title,
  Actions,
  GroupLine,
  Form,
  Input,
  Field,
  FieldLabel,
} from '../_layouts/default/styles';
import { AvatarUploader } from '../../components/AvatarUploader';
import { ButtonsGroup, Back, Save } from '../../components/Buttons';

export default function DeliverymenForm() {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [file, setFile] = useState('');
  const history = useHistory();

  useEffect(() => {
    async function fetchDeliveryman() {
      const response = await api.get('deliveryman', { params: { id } });
      if (response.data.records) {
        setName(response.data.records[0].name);
        setEmail(response.data.records[0].email);
        if (response.data.records[0].avatar) {
          setAvatar(response.data.records[0].avatar.url);
        }
      }
    }
    if (id) fetchDeliveryman();
  }, [id]);

  function clearForm() {
    setName('');
    setEmail('');
    setAvatar('');
  }

  async function uploadAvatar() {
    if (file) {
      const fileData = new FormData();
      fileData.append('file', file);
      await api.put(`/deliveryman/${id}/avatar`, fileData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
  }

  async function handleSave() {
    const formData = { name, email };
    if (id) {
      await api.put(`/deliveryman/${id}`, formData);
      toast.success('Entregador foi atualizado.');
    } else {
      const response = await api.post(`/deliveryman`, formData);
      toast.success('Entregador cadastrado com sucesso.');
      id = response.data.id;
      clearForm();
    }

    uploadAvatar();
    history.push('/deliverymen');
  }

  return (
    <Content>
      <Actions>
        <Title>{id ? 'Edição' : 'Cadastro'} de Entregador</Title>
        <ButtonsGroup>
          <>
            <Back />
            <Save action={handleSave} />
          </>
        </ButtonsGroup>
      </Actions>

      <Form>
        <AvatarUploader
          id={id}
          avatar={avatar}
          setAvatar={setAvatar}
          setFile={setFile}
          fullName={name}
        />

        <GroupLine>
          <Field>
            <FieldLabel>Nome</FieldLabel>
            <Input
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Field>
        </GroupLine>

        <GroupLine>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
        </GroupLine>
      </Form>
    </Content>
  );
}
