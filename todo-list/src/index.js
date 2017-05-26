import React from 'react';
import ReactDOM from 'react-dom'
// import './index.css';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import reducers from './reducers'

let store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
