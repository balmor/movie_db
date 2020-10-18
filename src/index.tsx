import React from 'react';
import ReactDOM from 'react-dom';
import { CacheProvider } from 'rest-hooks';
import App from './App';

ReactDOM.render(
  <CacheProvider>
    <App />
  </CacheProvider>,
  document.getElementById('app')
);
