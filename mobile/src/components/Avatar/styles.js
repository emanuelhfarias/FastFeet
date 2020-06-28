import styled from 'styled-components/native';

export const Image = styled.Image`
  margin: ${(props) => (props.centralize ? '0 auto' : '0px')};
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
  border-radius: ${(props) => props.size / 2}px;
`;
