import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 25px;
`;

export const Actions = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
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

  th:last-child {
    text-align: left;
  }

  td {
    font-size: 16px;
    color: #666;
    background: #fff;
    height: 57px;
    text-align: center;

    &:last-child {
      align: center;
    }
  }
`;

export const Form = styled.form`
  background: #fff;
  padding: 25px;
  border-radius: 5px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ddd;
  height: 45px;
  border-radius: 4px;
  padding: 10px;
  margin-top: 5px;
  color: #444;
`;

export const GroupLine = styled.div`
  display: flex;
  width: 100%;

  div {
    width: 100%;
    margin: 13px 0;
    padding: 0 8px;
  }

  span {
    color: #444;
    font-weight: bold;
  }
`;
