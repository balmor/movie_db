import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize';

ReactDOM.render(
  <>
    <Normalize />
    <App />
  </>,
  document.getElementById('app')
);
