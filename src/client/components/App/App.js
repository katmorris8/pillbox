import React, { useEffect, useReducer, useState } from 'react';
import './style.css';
import Logo from '../Logo/Logo';
import WelcomePage from '../WelcomePage/WelcomePage';
import PillSearch from '../PillSearch/PillSearch';
import MyPillbox from '../MyPillbox/MyPillbox';
import request from '../../helpers/request';
import Button from '../Button/Button';

const initialState = {
  pills: [],
  page: 'welcome',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setPage': {
      return { ...state, page: action.page };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
};

const App = () => {
  // const buttonTypes = ['navBtn', 'logoBtn', 'welcomeBtn']
  // const pages = ['welcome', 'addPill', 'pillbox'];

  // const [{ pills, page }, setState] = useState({
  //   pills: [],
  //   page: 'welcome',
  // });

  const [{ pills, page }, dispatch] = useReducer(reducer, initialState);

  const setPage = (name) => {
    setState({ pills, page: name });
  };

  useEffect(() => {
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
      <nav>
        <Logo page="welcome" click={setPage} />
        <Button text="+" page="addPill" click={setPage} />
      </nav>
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
