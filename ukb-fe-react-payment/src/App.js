import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Login from './components/PaymentLogin/PaymentLogin';
import Summary from './components/SummaryAmount/SummaryAmount';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/summary" component={Summary} />
        </Switch>
      </Router>
    </div>
  );
};
