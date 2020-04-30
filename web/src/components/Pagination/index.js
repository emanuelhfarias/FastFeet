import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { PaginationRow } from './styles';

export function Pagination({ info, fetchData }) {
  const [page, setPage] = useState(1);
  const { prev, next, total } = info;

  function changePage(pageNumber) {
    setPage(pageNumber);
    fetchData(pageNumber);
  }

  return (
    <PaginationRow>
      <button
        type="button"
        onClick={() => changePage(page - 1)}
        disabled={!prev}
      >
        Anterior
      </button>
      <p>
        {page} de {total}
      </p>
      <button
        type="button"
        onClick={() => changePage(page + 1)}
        disabled={!next}
      >
        Próximo
      </button>
    </PaginationRow>
  );
}

Pagination.propTypes = {
  info: PropTypes.shape({
    prev: PropTypes.bool.isRequired,
    next: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
  fetchData: PropTypes.func.isRequired,
};
