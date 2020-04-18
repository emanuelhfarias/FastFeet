import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Menu,
  MenuItemLink,
  MenuItemModal,
  ShowIcon,
  EditIcon,
  DeleteIcon,
} from './styles';

const icons = {
  Visualizar: <ShowIcon />,
  Editar: <EditIcon />,
  Excluir: <DeleteIcon />,
};

export function ActionsMenu({ children }) {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }

  return (
    <>
      <button type="submit" onClick={toggleMenu}>
        ...
      </button>
      <Menu active={active}>{children}</Menu>
    </>
  );
}

export function ItemLink({ text, link }) {
  return (
    <MenuItemLink to={link}>
      {icons[text]}
      <span>{text}</span>
    </MenuItemLink>
  );
}

export function ItemModal({ text, component }) {
  return (
    <MenuItemModal component={component}>
      {icons[text]}
      <span>{text}</span>
    </MenuItemModal>
  );
}

ActionsMenu.propTypes = {
  children: PropTypes.element.isRequired,
};

ItemLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ItemModal.propTypes = {
  text: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
