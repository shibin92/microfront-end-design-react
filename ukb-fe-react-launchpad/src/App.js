import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Progress from './components/Progress';

const OnboardingLazy = lazy(() => import('./components/OnboardingApp'));
const PaymentLazy = lazy(() => import('./components/PaymentApp'));
const StartPage = lazy(() => import('./components/StartPage'));

export default () => {
  return (
    <BrowserRouter> 
      <div>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/payment" component={PaymentLazy} />
            <Route path="/onboarding" component={OnboardingLazy} />
            <Route path="/" component={StartPage} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
