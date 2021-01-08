import React from 'react';
import './style.css';
import ButtonMain from '../ButtonMain/ButtonMain';

const AddPillButton = ({ addPillClick }) => (
  <div>
    <ButtonMain text="+" onClick={addPillClick} />
    <p>load my pillbox with a new Rx</p>
  </div>
);

export default AddPillButton;
