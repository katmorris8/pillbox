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
  onClick: 'Try again later',
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
