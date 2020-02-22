import React, { Component } from 'react';
import './style.css';
// import WelcomePage from './components/WelcomePage/WelcomePage';
// import MyPillbox from './components/MyPillbox/MyPillbox';
import { Logo } from '../Logo/Logo';
// import PillSearch from './components/PillSearch/PillSearch';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  // state = { username: null };

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }
  // remove username

  render() {
    return (
      <Logo />
    );
  }
}
