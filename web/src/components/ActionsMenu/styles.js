import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { MdVisibility, MdEdit, MdDeleteForever } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';

export const Menu = styled.div`
  display: ${(props) => (props.active ? 'block' : 'none')};
  position: absolute;
  background: #fff;
  width: ${(props) => props.width};
  border: 1px solid #00000026;
  border-radius: 4px;
  padding: 15px 10px;

  a {
    list-style: none;
    text-align: left;
    padding: 4px 0;
    color: #999999;
    border-bottom: 1px solid #eeeeee;
  }

  a:hover {
    background: #eeeeee;
    cursor: pointer;
  }
`;

export const MenuItemLink = styled(Link)`
  display: flex;
  justify-items: center;
  align-items: center;

  span {
    margin-left: 5px;
  }

  svg {
    font-size: 16px;
  }
`;

export const MenuItemModal = styled.a`
  display: flex;
  justify-items: center;
  align-items: center;

  span {
    margin-left: 5px;
  }

  svg {
    font-size: 16px;
  }
`;

export const ShowIcon = styled(MdVisibility)`
  color: #8e5be8;
`;

export const EditIcon = styled(MdEdit)`
  color: #4d85ee;
`;

export const DeleteIcon = styled(MdDeleteForever)`
  color: #de3b3b;
`;

export const ActionsButton = styled.a`
  border: 0;
  background: #fff;
`;

export const DotsIcon = styled(BsThreeDots)`
  font-size: 28px;
  color: #c6c6c6;
`;
