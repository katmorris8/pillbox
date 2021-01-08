import React from 'react';
import './style.css';
import ButtonMain from '../ButtonMain/ButtonMain';

const PillboxButton = ({ viewPillboxClick }) => (
  <div>
    <ButtonMain text="x" onClick={viewPillboxClick} />
    <p>view my pillbox</p>
  </div>
);

export default PillboxButton;
