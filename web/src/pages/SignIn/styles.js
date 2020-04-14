import styled from 'styled-components';
import { Form as unformForm, Input as unformInput } from '@rocketseat/unform';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(unformForm)`
  background: #fff;
  width: 360px;
  height: 425px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;

  display: flex;
  flex-direction: column;
  padding: 40px;

  img {
    height: 44px;
    margin-bottom: 40px;
  }

  button {
    font-weight: bold;
    color: #fff;
    height: 45px;
    background: #7d40e7;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  div {
    text-justify: left;
    align-items: left;
    margin: 10px 0;

    label {
      display: block;
      font-weight: bold;
      color: #444;
      text-transform: uppercase;
      font-size: 14px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: normal;
    }
  }
`;

export const Input = styled(unformInput)`
  display: block;
  width: 100%;
  border: 1px solid #ddd;
  height: 45px;
  border-radius: 4px;
  padding: 10px;
  margin-top: 5px;
  color: #444;
`;
