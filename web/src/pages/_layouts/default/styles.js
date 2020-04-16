import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Actions = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin-top: 25px;
  font-size: 24px;
  color: #444;
`;

export const SearchBox = styled.input`
  height: 36px;

  ::placeholder {
    color: #666;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 20px;

  thead {
    color: #444;
    font-size: 16px;
  }

  td {
    font-size: 16px;
    color: #666;
    background: #fff;
    height: 57px;
    text-align: center;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  background: #7d40e7;
  border-radius: 4px;
  border: 0px;
  width: 142px;
  height: 36px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const BackButton = styled.div``;