import React, { Component } from 'react';
import logo from './logo.svg';
import { db } from './db';
import './App.css';

class AddNewQuote extends Component {
  constructor(props) {
    super(props);
    console.log(db);
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        <form>
          <input placeholder="Title" />
        </form>
      </div>
    );
  }
}

export default AddNewQuote;
