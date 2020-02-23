import React, { Component } from 'react';
import './style.css';
import ButtonMain from '../ButtonMain/ButtonMain';

export default class AddPillButton extends Component {
  constructor(props) {
    super(props);
    this.btnText = '+';
  }

  render() {
    return (
      <div>
        <ButtonMain text={this.btnText} onClick={this.props.addPillClick} />
        <p>load my pillbox with a new Rx</p>
      </div>
    );
  }
}
