import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

export default function DeliverymenForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    async function fetchDeliveryman() {
      const response = await api.get('deliveryman', { params: { id } });
      if (response.data) {
        setName(response.data[0].name);
        setEmail(response.data[0].email);
      }
    }
    if (id) fetchDeliveryman();
  }, []);

  async function handleSave() {
    await api.put(`/deliveryman/${id}`, { name, email });
  }

  return (
    <Content>
      <Actions>
        <Title>Edição de Destinatário</Title>
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
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </GroupLine>

        <GroupLine>
          <div>
            <span>Email</span>
            <Input
              type="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </GroupLine>
      </Form>
    </Content>
  );
}
