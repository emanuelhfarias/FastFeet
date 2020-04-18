import React from 'react';
import PropTypes from 'prop-types';

import { Badger } from './styles';

export function StatusBadger({ endDate, canceledDate }) {
  let text = 'PENDENTE';
  if (endDate) text = 'ENTREGUE';
  if (canceledDate) text = 'CANCELADA';
  if (endDate && canceledDate) text = 'RETIRADA';

  return <Badger text={text} />;
}

StatusBadger.propTypes = {
  endDate: PropTypes.string,
  canceledDate: PropTypes.string,
};

StatusBadger.defaultProps = {
  endDate: null,
  canceledDate: null,
};
