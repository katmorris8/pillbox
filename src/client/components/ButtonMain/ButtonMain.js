import React from 'react';
import './style.css';

const ButtonMain = ({ text, onClick }) => (
  <div>
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  </div>
);

export default ButtonMain;
