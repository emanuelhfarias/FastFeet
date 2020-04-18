import React from 'react';
import PropTypes from 'prop-types';

import { MdKeyboardArrowLeft, MdDone, MdAdd } from 'react-icons/md';
import { Group, BackButton, SaveButton } from './styles';
import history from '../../services/history';

export function ButtonsGroup({ children }) {
  return <Group>{children}</Group>;
}

export function Back() {
  return (
    <BackButton onClick={history.goBack}>
      <MdKeyboardArrowLeft size={18} />
      <span>Voltar</span>
    </BackButton>
  );
}

export function Save({ action }) {
  return (
    <SaveButton onClick={action}>
      <MdDone size={18} />
      <span>Salvar</span>
    </SaveButton>
  );
}

export function New({ action }) {
  return (
    <SaveButton onClick={action}>
      <MdAdd size={18} />
      <span>Cadastrar</span>
    </SaveButton>
  );
}

ButtonsGroup.propTypes = { children: PropTypes.element.isRequired };
Save.propTypes = { action: PropTypes.func.isRequired };
New.propTypes = { action: PropTypes.func.isRequired };
