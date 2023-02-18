import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterConvention from './components/router/RouterConvention';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <RouterConvention />
    </BrowserRouter>
  );
}

export default App;
