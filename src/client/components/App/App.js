import React, { useEffect, useState } from 'react';
import './style.css';
import Logo from '../Logo/Logo';
import WelcomePage from '../WelcomePage/WelcomePage';
import PillSearch from '../PillSearch/PillSearch';
import MyPillbox from '../MyPillbox/MyPillbox';
import request from '../../helpers/request';

const App = () => {
  // const buttonTypes = ['navBtn', 'logoBtn', 'welcomeBtn']
  // const pages = ['welcome', 'addPill', 'pillbox'];
  const [{ page, pills }, setState] = useState({
    page: 'welcome',
    pills: [],
  });

  const setPage = (name) => {
    setState({ pills, page: name });
  };

  useEffect(() => {
    if (pills.isEmpty) {
      setPage('welcome');
    } else {
      setPage('pillbox');
    }

    if (page === 'pillbox') {
      const getPills = async () => {
        const pillsDb = await request.getPills();
        setState({ page, pills: pillsDb });
      };
      getPills();
    }
  }, [page]);

  return (
    <div>
      <Logo page="welcome" click={setPage} />
      {page === 'welcome' && (
        <div>
          <WelcomePage click={setPage} />
        </div>
      )}
      {page === 'addPill' && (
        <div>
          <PillSearch setPage={setPage} />
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
