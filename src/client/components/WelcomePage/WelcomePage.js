import React, { Component } from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPillButton from '../AddPillButton';
import PillboxButton from '../PillboxButton/PillboxButton';
import MyPillbox from '../MyPillbox/MyPillbox';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  
  render() {
    return (
        <div>
        <h1>welcome to pillbox</h1>
        <Router>
          <AddPillButton />
          <Link to="/mypillbox">
            <PillboxButton />
          </Link>
          <Switch>
            <Route path="/mypillbox" exact render={props => <MyPillbox {...props} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}
