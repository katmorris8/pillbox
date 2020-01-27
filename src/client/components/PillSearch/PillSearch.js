import React, { Component } from 'react';

export default class PillSearch extends Component {
  constructor(props) {
    super(props);

    this.state = null;
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Pill name" />
        </form>
      </div>
    );
  }
}
