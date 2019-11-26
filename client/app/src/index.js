import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import debounce from 'lodash.debounce'
import reducers from './Redux/reducers';
import reduxThunk from 'redux-thunk';
import App from './App.js';

//app

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);






ReactDOM.render(
  <Provider store={store}
  >
    <App />
  </Provider>,
  document.querySelector('#root')
)

