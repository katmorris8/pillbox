import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ text, onClick }) => (
  <div>
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  </div>
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
