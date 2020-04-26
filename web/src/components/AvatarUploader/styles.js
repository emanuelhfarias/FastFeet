import styled from 'styled-components';

export const Avatar = styled.a`
  display: flex;
  justify-content: center;

  img {
    cursor: pointer;
    width: 148px;
    height: 148px;
    border: 1px dashed #a28fd0;
    border-radius: 50%;
  }
`;

export const Siglas = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 66px;
  color: #a28fd0;
  background: #f4effc;

  cursor: pointer;

  width: 148px;
  height: 148px;
  border: 1px dashed #a28fd0;
  border-radius: 50%;
`;

export const NewAvatar = styled.a`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 148px;
  height: 148px;
  border: 1px dashed #a28fd0;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  p {
    color: #dddddd;
    font-size: 15px;
    font-weight: bold;
  }
`;
