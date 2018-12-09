import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const routes = (
  <BrowserRouter>

  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
