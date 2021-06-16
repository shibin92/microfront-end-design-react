import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import StartPage from './StartPage';
// import MeterPoints from './MeterPoints/MeterPoints';

const StartPage = React.lazy(() => import('./StartPage'));
const MeterPoints = React.lazy(() => import('./MeterPoints/MeterPoints'));

import '../style.css';

const PaymentRoutes = React.lazy(() => import('payment/Routes'));

const Routes = () => {
	document.getElementById('root').className = 'background-light-grey';
	console.log('onboarding routes =======');
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={StartPage} />
				<Route exact path="/meter-points" component={MeterPoints} />
				{/* <Route path="/payments" render={(props) => {
					return (
						<React.Suspense fallback='Loading Button'>
							<PaymentRoutes {...props}/>
						</React.Suspense>
					)
				}} /> */}
				<React.Suspense fallback='Loading Button'>
					<PaymentRoutes />
				</React.Suspense>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes;