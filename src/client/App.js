import React, { Component } from 'react';
import './app.css';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }
  // remove username

  render() {
    return (
      <div>
        <h1>welcome to pillbox</h1>
      </div>
    );
  }
}
