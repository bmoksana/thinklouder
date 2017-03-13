import React, { Component } from 'react';
import { db, fb } from '../db';
import './MainLayout.css';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: {
            name: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
          }
        });
      }
    });
  }

  render() {
    return (
      <div>{React.cloneElement(this.props.children, { user: this.state.user })}</div>
    )
  }

}

export default AdminLayout;
