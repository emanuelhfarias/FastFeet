import React from 'react';

import api from '../../services/api';

export default function Deliveries() {
  api.get('/delivery'); // testing token present in header request
  return <h1>Deliveries</h1>;
}
