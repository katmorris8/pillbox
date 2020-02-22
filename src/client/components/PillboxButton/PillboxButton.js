import React, { Component } from 'react';
import './style.css';
import ButtonMain from '../ButtonMain/ButtonMain';

export default class PillboxButton extends Component {
  constructor(props) {
    super(props);
    this.btnText = 'x';
  }

  render() {
    return (
      <div>
        <ButtonMain text={this.btnText} onClick={this.props.onClick} />
        <p>view my pillbox</p>
      </div>
    );
  }
}
