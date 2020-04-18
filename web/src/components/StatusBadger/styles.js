import styled from 'styled-components';

const statusColors = {
  ENTREGUE: { background: '#DFF0DF', color: '#2CA42B' },
  PENDENTE: { background: '#F0F0DF', color: '#C1BC35' },
  CANCELADA: { background: '#FAB0B0', color: '#DE3B3B' },
  RETIRADA: { background: '#BAD2FF', color: '#4D85EE' },
};

export const Badger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '•';
    font-size: 30px;
  }

  ::after {
    padding: 5px;
    font-size: 10px;
    font-weight: bold;
    content: '${(props) => props.text}';
  }

  border-radius: 15px;

  background: ${(props) => statusColors[props.text].background};
  color: ${(props) => statusColors[props.text].color};
`;
