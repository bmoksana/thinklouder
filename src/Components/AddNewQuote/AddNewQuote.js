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
        </form>
      </div>
    );
  }
}

export default AddNewQuote;
