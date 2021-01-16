import React, { useState } from 'react';
import request from '../../helpers/request';

const PillSearch = ({ setPage }) => {
  const [state, setState] = useState('');

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request.createPill({ name: state });
    if (response.status === 200) {
      setState('');
    }
    setPage('pillbox');
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
