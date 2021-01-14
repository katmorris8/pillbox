import React from 'react';
import PropTypes from 'prop-types';

const MyPillbox = ({ pills }) => (
  <div>
    {pills.map(pill => (
      <p key={pill.id}>{pill.name}</p>
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
