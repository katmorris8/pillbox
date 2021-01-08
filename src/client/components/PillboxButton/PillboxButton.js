import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ButtonMain from '../ButtonMain/ButtonMain';

const PillboxButton = ({ viewPillboxClick }) => (
  <div>
    <ButtonMain text="x" onClick={viewPillboxClick} />
    <p>view my pillbox</p>
  </div>
);

PillboxButton.defaultProps = {
  viewPillboxClick: 'Cannot view pillbox',
};

PillboxButton.propTypes = {
  viewPillboxClick: PropTypes.func,
};

export default PillboxButton;
