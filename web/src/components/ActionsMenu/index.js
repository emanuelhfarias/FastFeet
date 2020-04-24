import React from 'react';
import Modali, { useModali } from 'modali';
import PropTypes from 'prop-types';

import useComponentVisible from '../../hooks/useComponentVisible';

import {
  Menu,
  MenuItemLink,
  MenuItemModal,
  DotsIcon,
  ActionsButton,
  ShowIcon,
  EditIcon,
  DeleteIcon,
} from './styles';

const icons = {
  Visualizar: <ShowIcon />,
  Editar: <EditIcon />,
  Excluir: <DeleteIcon />,
  'Cancelar encomenda': <DeleteIcon />,
};

export function ActionsMenu(props) {
  const { children, width } = props;
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  function toggleMenu() {
    setIsComponentVisible(!isComponentVisible);
  }

  return (
    <>
      <ActionsButton onClick={toggleMenu}>
        <DotsIcon />
      </ActionsButton>
      {isComponentVisible && (
        <Menu ref={ref} width={width} active={isComponentVisible}>
          {children}
        </Menu>
      )}
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

export function ItemModal({ text, component, modalTitle }) {
  const [modal, toggleModal] = useModali({ title: modalTitle });

  return (
    <>
      <MenuItemModal onClick={() => toggleModal()}>
        {icons[text]}
        <span>{text}</span>
      </MenuItemModal>
      <Modali.Modal {...modal}>{component}</Modali.Modal>
    </>
  );
}

export function ItemModalExcluir({ text, action }) {
  const modalOptions = {
    animated: true,
    title: 'Tem certeza?',
    message: 'Excluir esse item será permanente.',
  };

  const [modal, toggle] = useModali(modalOptions);
  modal.options.buttons = [
    <Modali.Button label="Cancelar" isStyleCancel onClick={() => toggle()} />,
    <Modali.Button
      label="Excluir"
      isStyleDestructive
      onClick={(id) => action(id)}
    />,
  ];

  return (
    <>
      <MenuItemModal onClick={() => toggle()}>
        {icons[text]}
        <span>{text}</span>
      </MenuItemModal>
      <Modali.Modal {...modal} />
    </>
  );
}

ActionsMenu.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
};

ActionsMenu.defaultProps = {
  width: '140px',
};

ItemLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

ItemModal.propTypes = {
  text: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  modalTitle: PropTypes.string,
};

ItemModal.defaultProps = {
  modalTitle: '',
};

ItemModal.propTypes = {
  text: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
  modalTitle: PropTypes.string,
};

ItemModalExcluir.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
