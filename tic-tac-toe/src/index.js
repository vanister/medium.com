import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './state/store';
import App from './views/App.jsx';

// At a later point, we can pull the state stored in local storage (or another source)
// and use it to create the store from a previous state
const initialState = {};

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);