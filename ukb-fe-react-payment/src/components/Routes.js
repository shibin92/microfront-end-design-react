import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import Login from './PaymentLogin/PaymentLogin';
// import Summary from './SummaryAmount/SummaryAmount';

const Login = React.lazy(() => import('./PaymentLogin/PaymentLogin'));
const Summary = React.lazy(() => import('./SummaryAmount/SummaryAmount'));

const Routes = () => {
	console.log('payment routes =======');
    return (
        <BrowserRouter>
          <Switch>
						{/* <Route exact path="/" component={() => <div><Link to="/payment">Hello World</Link></div>} /> */}
            <Route exact path="/payment" component={Login} />
            <Route exact path="/payment/summary" component={Summary} />
          </Switch>
      </BrowserRouter>
    )
}

export default Routes;