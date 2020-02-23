import React, { Component } from 'react';
import './style.css';
import AddPillButton from '../AddPillButton/AddPillButton';
import PillboxButton from '../PillboxButton/PillboxButton';

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div>
        <h1>welcome to pillbox</h1>
        <AddPillButton addPillClick={this.props.addPillClick} />
        <PillboxButton viewPillboxClick={this.props.viewPillboxClick} />
      </div>
    );
  }
}
