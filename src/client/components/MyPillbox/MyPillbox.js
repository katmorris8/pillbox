import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const MyPillbox = ({ pills }) => {
  const [state, setState] = useState('');

  return (
    <div>
      {pills.map(pill => (
        <div key={pill.id} className="pill">
          <button type="button">x</button>
          <p>{pill.name}</p>
        </div>
      ))}
    </div>
  );
};

MyPillbox.defaultProps = {
  pills: [],
};

MyPillbox.propTypes = {
  pills: PropTypes.arrayOf([PropTypes.string]),
};

export default MyPillbox;
