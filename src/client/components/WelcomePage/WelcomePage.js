import React, { Component } from 'react';
import './style.css';
import AddPillButton from '../AddPillButton/AddPillButton';
import PillboxButton from '../PillboxButton/PillboxButton';
import { Logo } from '../Logo/Logo';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  handleAddPillClick = (e) => {
    e.preventDefault();
    console.log('hiii');
    this.props.history.push('/newpill');
  }

  // move to app
  handlePillboxClick = (e) => {
    e.preventDefault();
    console.log('hello!');
    this.props.history.push('/mypillbox');
  }

  render() {
    return (
      <div>
        <Logo />
        <h1>welcome to pillbox</h1>
        <AddPillButton onClick={this.handleAddPillClick} />
        <PillboxButton onClick={this.handlePillboxClick} />
      </div>
    );
  }
}
