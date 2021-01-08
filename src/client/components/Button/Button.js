import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ text, page, click }) => (
  <button type="button" className="button" onClick={() => click(page)}>
    {text}
  </button>
);

Button.defaultProps = {
  text: '∙',
  page: 'welcome',
  click: 'Try again later',
};

Button.propTypes = {
  text: PropTypes.string,
  page: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
