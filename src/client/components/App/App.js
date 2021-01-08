import React, { useState } from 'react';
import './style.css';
import Logo from '../Logo/Logo';
import WelcomePage from '../WelcomePage/WelcomePage';
import PillSearch from '../PillSearch/PillSearch';
import MyPillbox from '../MyPillbox/MyPillbox';

const App = () => {
  // const pages = ['welcome', 'addPill', 'pillbox'];
  const [{ page, pills }, setState] = useState({
    page: 'welcome',
    pills: [],
  });

  const setPage = (name) => {
    setState({ ...page, ...pills, page: name });
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
      <Logo page="welcome" click={setPage} />
      {page === 'welcome' && (
        <div>
          <WelcomePage
            click={setPage}
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
