import React, { Component } from 'react';
import './style.css';
import { Logo } from '../Logo/Logo';
import WelcomePage from '../WelcomePage/WelcomePage';
import PillSearch from '../PillSearch/PillSearch';
import MyPillbox from '../MyPillbox/MyPillbox';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'welcome'
      // page: 'addPill'
      // page: 'pillbox'
    };
  }

  // componentDidMount() {
  //   fetch('/api/getUsername')
  //     .then(res => res.json())
  //     .then(user => this.setState({ username: user.username }));
  // }
  // remove username

  handleAddPillClick = (e) => {
    e.preventDefault();
    console.log('hiii');
    // this.props.history.push('/newpill');
  }

  handlePillboxClick = (e) => {
    e.preventDefault();
    console.log('hello!');
    // this.props.history.push('/mypillbox');
  }

  render() {
    return (
      <div>
        <Logo />
        {this.state.page === 'welcome' && (
          <div>
            <WelcomePage
              addPillClick={this.handleAddPillClick}
              viewPillboxClick={this.handlePillboxClick}
            />
          </div>
        )}
        {this.state.page === 'addPill' && (
          <div>
            <PillSearch />
          </div>
        )}
        {this.state.page === 'pillbox' && (
          <div>
            <MyPillbox
              addPillClick={this.handleAddPillClick}
            />
          </div>
        )}
      </div>
    );
  }
}
