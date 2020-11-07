import React from 'react';
import ReactDOM from 'react-dom';
import { CacheProvider } from 'rest-hooks';
import App from './App';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <CacheProvider>
    <Normalize />
    <App />
  </CacheProvider>,
  document.getElementById('app')
);
