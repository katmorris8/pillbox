import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddPillButton from './components/AddPillButton';
import PillboxButton from './components/PillboxButton/PillboxButton';
import MyPillbox from './components/MyPillbox/MyPillbox';

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
      <div>
        <h1>welcome to pillbox</h1>
        <Router>
          <AddPillButton />
          <Link to="/mypillbox">
            <PillboxButton />
          </Link>
          <Route path="/mypillbox" exact render={props => <MyPillbox {...props} />} />
        </Router>
      </div>
    );
  }
}
