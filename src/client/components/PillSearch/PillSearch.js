import React, { Component } from 'react';

export default class PillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.getPillName}>
          <input
            type="text"
            placeholder="Pill name..."
            onChange={this.props.pillName}
          />
          <button type="submit" onClick={this.handleSubmit}>></button>
        </form>
      </div>
    );
  }
}
