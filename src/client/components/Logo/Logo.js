import React from 'react';
import './style.css';

const Logo = ({ page, click }) => (
  <button type="button" onClick={() => click(page)}>
    <h1 className="logo">Pillbox</h1>
  </button>
);

export default Logo;
