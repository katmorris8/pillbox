import React, { Component } from 'react';
import request from '../../helpers/request';

export default class PillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState();
  }

  initialState = () => {
    return {
      name: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request.createPill({ name: this.state.name });
    if (response.status === 200) {
      this.setState(
        this.initialState()
      );
    }
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
