import React, { Component } from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
// import WelcomePage from './components/WelcomePage/WelcomePage';
import MyPillbox from './components/MyPillbox/MyPillbox';
import { Logo } from './components/Logo/Logo';
import PillSearch from './components/PillSearch/PillSearch';

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
      <Router>
        <div>
          {/* <WelcomePage /> */}
          <Logo />
          <PillSearch />
          <nav className="nav-bar">
            <Link to="/newpill">+</Link>
            <Link to="/mypillbox">pill</Link>
          </nav>

          <Switch>
            <Route path="/mypillbox">
              <MyPillbox />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
