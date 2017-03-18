import React, { Component } from 'react';
import { db } from '../../db';

class AddNewQuote extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    console.log(this);
    return (
      <div className="App">
        <form>
          <input placeholder="Title" />
          <input placeholder="Quote" />
          <input placeholder="Author" />
          <input placeholder="Tag" />
        </form>
      </div>
    );
  }
}

export default AddNewQuote;
