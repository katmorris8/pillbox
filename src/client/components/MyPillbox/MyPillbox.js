import React, { Component } from 'react';
import AddPillButton from '../AddPillButton';

export default class MyPillbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true
    };
  }

  render() {
    return (
      <div>
        {
          this.state.isEmpty &&
          <div className="empty-pillbox-message">
            <h2>your pillbox is currently empty!</h2>
            <AddPillButton />
          </div>
        }
      </div>
    );
  }
}
