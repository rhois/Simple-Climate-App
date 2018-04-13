import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoute } from './components/router/component';

ReactDOM.render(
  <AppRoute />,
  document.getElementById('root'),
);
