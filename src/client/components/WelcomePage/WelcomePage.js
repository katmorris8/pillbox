import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Button from '../Button/Button';

const WelcomePage = ({ click }) => (
  <div>
    <h1>welcome to pillbox</h1>
    <div>
      <Button text="+" page="addPill" click={click} />
      <p>load my pillbox with a new Rx</p>
    </div>
    <div>
      <Button text="x" page="pillbox" click={click} />
      <p>view my pillbox</p>
    </div>
  </div>
);

WelcomePage.defaultProps = {
  click: 'Try again',
};

WelcomePage.propTypes = {
  click: PropTypes.func,
};

export default WelcomePage;
