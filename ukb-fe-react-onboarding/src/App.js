import 'bootstrap/dist/css/bootstrap.min.css';

import React, {Suspense, lazy} from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import StartPage from './components/StartPage';
import MeterPoints from './components/MeterPoints/MeterPoints';

// const PaymentLazy = lazy(() => import('./components/PaymentApp'));

export default ({ history }) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/meter-points" component={MeterPoints} />
          <Route path="/" component={StartPage} />
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/payment" component={PaymentLazy} />
            </Switch>
          </Suspense> */}
        </Switch>
      </Router>
    </div>
  );
};
