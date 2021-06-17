import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Progress from './components/Progress';

const OnboardingLazy = lazy(() => import('./components/OnboardingApp'));

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/" component={OnboardingLazy} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};
