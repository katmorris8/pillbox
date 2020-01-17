import React, { Component } from 'react';
import './style.css';

export default class AddPillButton extends Component {
  render() {
    return (
      <div>
        <button className="button">+</button>
        <p>load my pillbox with a new Rx</p>
      </div>
    )
  }
}
