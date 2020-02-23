import React, { Component } from 'react';
import AddPillButton from '../AddPillButton/AddPillButton';

export default class MyPillbox extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div>

        <div className="empty-pillbox-message">
          <h2>your pillbox is currently empty!</h2>
          <AddPillButton addPillClick={this.props.addPillClick} />
        </div>

      </div>
    );
  }
}
