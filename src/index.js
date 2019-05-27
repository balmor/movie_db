import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import Root from './components/Root'
import './styles/styles.scss'
import 'normalize.css/normalize.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger),
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('app')
);
