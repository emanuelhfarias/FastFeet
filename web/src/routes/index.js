import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Deliveries from '../pages/Deliveries';
import Deliverymen from '../pages/Deliverymen';
import Recipients from '../pages/Recipients';
import Problems from '../pages/Problems';

import DeliverymenForm from '../pages/Deliverymen/form';
import RecipientForm from '../pages/Recipients/form';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliverymen/new" component={DeliverymenForm} isPrivate />
      <Route
        path="/deliverymen/:id/edit"
        component={DeliverymenForm}
        isPrivate
      />

      <Route path="/deliveries" component={Deliveries} isPrivate />
      <Route path="/deliverymen" component={Deliverymen} isPrivate />

      <Route path="/recipients/new" component={RecipientForm} isPrivate />
      <Route path="/recipients/:id/edit" component={RecipientForm} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
