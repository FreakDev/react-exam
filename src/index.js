/**
 * 
 * Updated by mathias on 9/20/2017
 * 
 * I tried to seperate as soon as possible the code into different components. keeping in mind that
 * I have to minimize the number of statfull compoenents. I also tried to keep this idea of separation
 * and strcit isolation as much as possible.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
