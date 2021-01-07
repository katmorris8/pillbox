import React, { Component, useState } from 'react';
import './style.css';
import { Logo } from '../Logo/Logo';
import WelcomePage from '../WelcomePage/WelcomePage';
import PillSearch from '../PillSearch/PillSearch';
import MyPillbox from '../MyPillbox/MyPillbox';

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // page: 'welcome',
  //     // page: 'addPill',
  //     page: 'pillbox',
  //   };
  // }

  const [{page, pills}, setState] = useState({
    page: 'welcome',
    pills: []
  })

  handleAddPillClick = (e) => {
    e.preventDefault();
    console.log('add pill!');
    setState({
      page: 'addPill'
    });
  }

  handlePillboxClick = (e) => {
    e.preventDefault();
    console.log('see pillbox!');
    setState({
      page: 'pillbox'
    });
  }

  addPill = (pill) => {
    setState((currentState) => {
      currentState.pills.push(pill);
      return currentState;
    });
  }

  render() {
    console.log(state);

    return (
      <div>
        <Logo />
        {state.page === 'welcome' && (
          <div>
            <WelcomePage
              addPillClick={handleAddPillClick}
              viewPillboxClick={handlePillboxClick}
            />
          </div>
        )}
        {state.page === 'addPill' && (
          <div>
            <PillSearch
              addPill={addPill}
            />
          </div>
        )}
        {state.page === 'pillbox' && (
          <div>
            <MyPillbox
              addPillClick={handleAddPillClick}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
