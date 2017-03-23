import React, { Component } from 'react';
import { db, fb } from '../db';
import QuoteTile from '../Components/QuoteTile';
import './MainLayout.css';

class QuoteLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    db.child('AllQuotes').on('value', snapshot => {
      this.setState({quotes: snapshot.val()});
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {Object.keys(this.state.quotes).map(key => {
          return <QuoteTile key={key} quote={this.state.quotes[key]} />
        })}
      </div>
    )
  }

}

export default QuoteLayout;
