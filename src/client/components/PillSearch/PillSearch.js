import React, { useState } from 'react';
// import request from '../../helpers/request';

const PillSearch = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = this.initialState();
  // }

  // initialState = () => {
  //   return {
  //     name: ''
  //   };
  // }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await request.createPill({ name: this.state.name });
  //   if (response.status === 200) {
  //     this.setState(
  //       this.initialState()
  //     );
  //   }
  // }

  const [state, setState] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted', state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pill name..."
          onChange={handleChange}
          value={state}
        />
        <button type="submit" onClick={handleSubmit}>
          &gt;
        </button>
      </form>
    </div>
  );
};

export default PillSearch;
