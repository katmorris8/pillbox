import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ButtonMain from '../ButtonMain/ButtonMain';

const AddPillButton = ({ addPillClick }) => (
  <div>
    <ButtonMain text="+" onClick={addPillClick} />
    <p>load my pillbox with a new Rx</p>
  </div>
);

AddPillButton.defaultProps = {
  addPillClick: 'Cannot get add pills',
};

AddPillButton.propTypes = {
  addPillClick: PropTypes.func,
};

export default AddPillButton;
