import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import AddPillButton from '../AddPillButton/AddPillButton';
import PillboxButton from '../PillboxButton/PillboxButton';

const WelcomePage = ({ addPillClick, viewPillboxClick }) => (
  <div>
    <h1>welcome to pillbox</h1>
    <AddPillButton addPillClick={addPillClick} />
    <PillboxButton viewPillboxClick={viewPillboxClick} />
  </div>
);

WelcomePage.defaultProps = {
  addPillClick: 'Cannot get add pills',
  viewPillboxClick: 'Cannot view pillbox',
};

WelcomePage.propTypes = {
  addPillClick: PropTypes.func,
  viewPillboxClick: PropTypes.func,
};

export default WelcomePage;
