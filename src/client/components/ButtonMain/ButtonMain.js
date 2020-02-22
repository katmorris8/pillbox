import React, { Component } from 'react';
import './style.css';

export default class ButtonMain extends Component {
  render() {
    return (
      <div>
        <button type="button" className="button" onClick={this.props.onClick}>{this.props.text}</button>
      </div>
    );
  }
}
