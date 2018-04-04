import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './store/configureStore';

import Root from './components/Root'
import './styles/styles.scss'
import 'normalize.css/normalize.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route component={Root} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
