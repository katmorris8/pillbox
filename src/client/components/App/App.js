import React, { Component, useState } from 'react';
import './style.css';
import { Logo } from '../Logo/Logo';
import WelcomePage from '../WelcomePage/WelcomePage';
import PillSearch from '../PillSearch/PillSearch';
import MyPillbox from '../MyPillbox/MyPillbox';

const App = () => {
  const [{ page, pills }, setState] = useState({
    page: 'welcome',
    pills: [],
  });

  const handleAddPillClick = (e) => {
    e.preventDefault();
    console.log('add pill!');
    setState({
      page: 'addPill',
    });
  };

  const handlePillboxClick = (e) => {
    e.preventDefault();
    console.log('see pillbox!');
    setState({
      page: 'pillbox',
    });
  };

  const addPill = (pill) => {
    setState(currentState => {
      currentState.pills.push(pill);
      return currentState;
    });
  };

  return (
    <div>
      <Logo />
      {page === 'welcome' && (
        <div>
          <WelcomePage
            addPillClick={handleAddPillClick}
            viewPillboxClick={handlePillboxClick}
          />
        </div>
      )}
      {page === 'addPill' && (
        <div>
          <PillSearch addPill={addPill} />
        </div>
      )}
      {page === 'pillbox' && (
        <div>
          <MyPillbox addPillClick={handleAddPillClick} />
        </div>
      )}
    </div>
  );
};

export default App;
