import React, { Component } from 'react';

export default class PillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPill(this.state);
    this.setState({
      name: ''
    });
  }

  pillName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Pill name..."
            onChange={this.pillName}
            value={this.state.name}
          />
          <button type="submit" onClick={this.handleSubmit}>></button>
        </form>
      </div>
    );
  }
}
