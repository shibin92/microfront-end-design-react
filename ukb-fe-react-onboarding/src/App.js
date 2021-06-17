import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import StartPage from './components/StartPage';
import MeterPoints from './components/MeterPoints/MeterPoints';

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/meter-points" component={MeterPoints} />
          <Route path="/" component={StartPage} />
        </Switch>
      </Router>
    </div>
  );
};
