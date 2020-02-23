import React, { Component } from 'react';

export default class PillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = null
  }

  handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const name = 
    // this.setState({
    //   name:
    // });
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Pill name..." onChange={this.handleChange} />
          <button type="submit" onClick={this.handleSubmit}>></button>
        </form>
      </div>
    );
  }
}
