import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import App from './App';
import Authentication from './Layouts/Authentication';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="login" component={Authentication} />
    </Route>
  </Router>
  ),document.getElementById('root')
);
