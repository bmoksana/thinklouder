import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import firebase from 'firebase';

import App from './Layouts/App';
import AdminLayout from './Layouts/AdminLayout';

import Authentication from './Layouts/Authentication';
import AddNewQuote from './Components/AddNewQuote/AddNewQuote';


import {fb} from './db';

import './index.css';

function requireAuth(nextState, replace) {
  const user = localStorage.getItem('firebase:authUser:AIzaSyA0kE4u26LNCIv8Fkm8AQmJvrXAavT2YAU:[DEFAULT]');
  if (!user) {
    replace({ pathname: '/login' })
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="admin" onEnter={requireAuth} component={AdminLayout}>
        <Route path="add-new-quote" component={AddNewQuote} />
      </Route>
      <Route path="login" component={Authentication} />
    </Route>
  </Router>
  ),document.getElementById('root')
);
