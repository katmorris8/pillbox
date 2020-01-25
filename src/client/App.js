import React, { Component } from 'react';
import './app.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import WelcomePage from './components/WelcomePage/WelcomePage';
// import AddPillButton from './components/AddPillButton';
// import PillboxButton from './components/PillboxButton/PillboxButton';
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
      <Router>
        <div>
          <WelcomePage />
          <nav className="nav-bar">
            <Link to="/mypillbox">pill</Link>
          </nav>

          <Switch>
            {/* <Route path="/mypillbox" exact render={props => <MyPillbox {...props} />} /> */}
            <Route path="/mypillbox">
              <MyPillbox />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
