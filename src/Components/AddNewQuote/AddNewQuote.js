import React, { Component } from 'react';
import { db } from '../../db';

class AddNewQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      quote:'',
      author:'',
      tag:'',
    }
  }

  handleSubmit = ( event ) => {
    event.preventDefault();
    alert('Done!')
  }

  updateInput = ( event ) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

cancel = ( event ) => {
  event.preventDefault();
  this.setState({
    title: '',
    quote: '',
    author: '',
    tag: '',
  });
}

  render() {
    //console.log(this);
    return (
      <div className="App">
        <form className="col-md-6" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" name="title" value={this.state.title} placeholder="Title" onChange={this.updateInput}/>
          </div>

          <div className="form-group">
            <input className="form-control" name="quote" value={this.state.quote} placeholder="Quote" onChange={this.updateInput}/>
          </div>

          <div className="form-group">
            <input className="form-control" name="author" value={this.state.author} placeholder="Author" onChange={this.updateInput}/>
          </div>

          <div className="form-group">
            <input className="form-control" name="tag" value={this.state.tag} placeholder="Tag" onChange={this.updateInput}/>
          </div>

          <button className="btn btn-default" type="submit">Save</button>
          <button className="btn btn-default" onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddNewQuote;
