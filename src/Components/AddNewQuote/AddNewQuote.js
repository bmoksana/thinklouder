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
    var that = this;
    db.child("AllQuotes").push().set(this.state, function(error, value){
  if (error) {
    alert("Data could not be saved." + error);
  } else {
      that.setState({
        title: '',
        quote: '',
        author: '',
        tag: '',
      });
    console.log(value);
};
    });
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
        <form className="col-xs-6" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input className="form-control" name="title" value={this.state.title} placeholder="Title" required onChange={this.updateInput}/>
          </div>

          <div className="form-group">
            <input className="form-control" name="quote" value={this.state.quote} placeholder="Quote" required onChange={this.updateInput}/>
          </div>

          <div className="form-group">
            <input className="form-control" name="author" value={this.state.author} placeholder="Author" required onChange={this.updateInput}/>
          </div>

          <div className="form-group">
            <input className="form-control" name="tag" value={this.state.tag} placeholder="Tag" required onChange={this.updateInput}/>
          </div>

          <button className="btn btn-default" class="btn btn-primary btn-lg active" type="submit">Save</button>
          <button className="btn btn-default" onClick={this.cancel}>Cancel</button>
        </form>
      </div>
    );
  }
}

export default AddNewQuote;
