import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ButtonMain = ({ text, onClick }) => (
  <div>
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  </div>
);

ButtonMain.defaultProps = {
  text: '∙',
  onClick: 'Try again later',
};

ButtonMain.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonMain;
