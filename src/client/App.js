import React, { Component } from 'react';
import './app.css';
import WelcomePage from './components/WelcomePage/WelcomePage';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import AddPillButton from './components/AddPillButton';
// import PillboxButton from './components/PillboxButton/PillboxButton';
// import MyPillbox from './components/MyPillbox/MyPillbox';

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
        <WelcomePage />
        {/* <h1>welcome to pillbox</h1>
        <Router>
          <AddPillButton />
          <Link to="/mypillbox">
            <PillboxButton />
          </Link>
          <Switch>
            <Route path="/mypillbox" exact render={props => <MyPillbox {...props} />} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}
