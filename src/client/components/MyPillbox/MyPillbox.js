import React from 'react';
import PropTypes from 'prop-types';

const MyPillbox = ({ pills }) => (
  <div>
    {pills.map((pill, i) => (
      <p key={i}>{pill.name}</p>
    ))}
  </div>
);

MyPillbox.defaultProps = {
  pills: [],
};

MyPillbox.propTypes = {
  pills: PropTypes.arrayOf([PropTypes.string]),
};

export default MyPillbox;
