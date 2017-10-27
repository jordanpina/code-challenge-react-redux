import React from 'react';
import ReactDOM from 'react-dom';


import { Provider } from 'react-redux';
import 'normalize.css';
import store from './store';
import AppRouter from './routes/AppRouter';

import './styles/styles.scss';

console.log('state', store.getState());
const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
