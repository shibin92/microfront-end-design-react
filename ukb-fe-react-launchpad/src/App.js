
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Button from './Button';
const OnboardingRoutes = React.lazy(() => import('onboarding/Routes'));
function App() {
  return (
    <div>
      <React.Suspense fallback='Loading Button'>
        <OnboardingRoutes />
      </React.Suspense>
      {/* <h1>MFE1</h1>
      <Button>
        {' '}
        MFE1 Button
      </Button> */}
    </div>
  );
}

export default App;