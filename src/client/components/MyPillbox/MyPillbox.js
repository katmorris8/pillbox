import React from 'react';
import PropTypes from 'prop-types';
import request from '../../helpers/request';
import './style.css';

const MyPillbox = ({ pills }) => {
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <ul>
      {pills.map(pill => (
        <li key={pill.id} className="pill">
          <button onClick={() => handleClick(pill.id)} type="button">x</button>
          <p>{pill.name}</p>
        </li>
      ))}
    </ul>
  );
};

MyPillbox.defaultProps = {
  pills: [],
};

MyPillbox.propTypes = {
  pills: PropTypes.arrayOf([PropTypes.string]),
};

export default MyPillbox;
