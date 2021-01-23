import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Logo = ({ page, click }) => (
  <button className="logo-button" type="button" onClick={() => click(page)}>
    <h1 className="logo">Pillbox</h1>
  </button>
);

Logo.defaultProps = {
  page: 'welcome',
  click: 'Try again later',
};

Logo.propTypes = {
  page: PropTypes.string,
  click: PropTypes.func,
};

export default Logo;
