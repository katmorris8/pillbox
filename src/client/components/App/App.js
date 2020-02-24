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
      // page: 'welcome',
      page: 'addPill',
      // page: 'pillbox',
      pills: {},
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
    console.log('add pill!');
    // this.props.history.push('/newpill');
    this.setState({
      page: 'addPill'
    });
  }

  handlePillboxClick = (e) => {
    e.preventDefault();
    console.log('see pillbox!');
    // this.props.history.push('/mypillbox');
    this.setState({
      page: 'pillbox'
    });
  }

  // this.setState({prevState => {}})
  getPillName = (e) => {
    e.preventDefault();
    console.log('new pill submitted!');
    e.currentTarget.reset();
  }

  pillName = (e) => {
    console.log(e.target.value);
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
            <PillSearch
              getPillName={this.getPillName}
              pillName={this.pillName}
            />
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
