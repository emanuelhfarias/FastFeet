import styled from 'styled-components';
import { Link as LinkDefault } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #ddd;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    img {
      width: 200px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Link = styled(LinkDefault)`
  font-weight: bold;
  color: ${(props) =>
    props.to === window.location.pathname ? '#666' : '#999'};
  margin: 12px;
  text-transform: uppercase;

  &:hover {
    ${(props) => !props.active && 'text-decoration: underline'};
  }
`;

export const LinkLogout = styled.a`
  font-weight: thin;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #666;
    }
    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #de3b3b;
    }
  }
`;
