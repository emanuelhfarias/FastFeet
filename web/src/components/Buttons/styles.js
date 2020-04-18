import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
`;

const Button = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  align-items: center;
  padding: 0 12px;
  margin-left: 15px;

  color: #fff;
  background: #fff;
  border-radius: 4px;
  border: 0px;
  height: 36px;

  span {
    margin-left: 8px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const BackButton = styled(Button)`
  background: #ccc;
`;

export const SaveButton = styled(Button)`
  background: #7d40e7;
`;
