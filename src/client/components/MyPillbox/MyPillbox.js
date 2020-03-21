import React, { Component } from 'react';
import request from '../../helpers/request';
// import AddPillButton from '../AddPillButton/AddPillButton';

export default class MyPillbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pills: []
    };
  }

  componentDidMount() {
    this.getPills();
  }

  getPills = async () => {
    const pills = await request.getPills();
    console.log(pills);
    this.setState({
      pills
    });
  }

  render() {
    return (
      <div>

        {/* <div className="empty-pillbox-message">
          <h2>your pillbox is currently empty!</h2>
          <AddPillButton addPillClick={this.props.addPillClick} />
        </div> */}

        {this.state.pills.map((pill, i) => {
          return <p key={i}>{pill.name}</p>;
        })}

      </div>
    );
  }
}
