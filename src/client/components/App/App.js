import React, { useState } from 'react';
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

  const handleAddPillClick = () => {
    setState({
      page: 'addPill',
    });
  };

  const handlePillboxClick = () => {
    setState({
      page: 'pillbox',
    });
  };

  const addPill = (pill) => {
    const pillsState = [...pills];
    pillsState.push(pill);
    setState({
      pills: pillsState
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
          <MyPillbox pills={pills} />
        </div>
      )}
    </div>
  );
};

export default App;
