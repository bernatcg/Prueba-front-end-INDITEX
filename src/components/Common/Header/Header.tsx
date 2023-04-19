import React from 'react';
import { Link } from 'react-router-dom';
import Indicator from '../Indicator/Indicator';
import { usePromiseTracker } from 'react-promise-tracker';
import './Header.scss';

function Header() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <header className='header'>
      <div className='header__logo' role='logo'>
        <Link to='/'>Podcaster</Link>
      </div>
      <div className='header__indicator' role='indicator'>
        <Indicator busy={promiseInProgress}></Indicator>
      </div>
    </header>
  );
}

export default Header;
