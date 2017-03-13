import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import firebase from 'firebase';

import App from './App';
import AddNewQuote from './AddNewQuote';
import Authentication from './Layouts/Authentication';
import {fb} from './db';

import './index.css';

function requireAuth(nextState, replace) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      user = user;
    } else {
      replace({
        pathname: '/login'
      })
    }
  });
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="admin" onEnter={requireAuth}>
        <Route path="add-new-quote" component={AddNewQuote} />
      </Route>
      <Route path="login" component={Authentication} />
    </Route>
  </Router>
  ),document.getElementById('root')
);
