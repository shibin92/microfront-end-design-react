import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Routes from './components/Routes';

function App() {
  document.getElementById('root').className = 'background-light-grey';
  return (
    <Routes />
  );
}

export default App;
