import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Indicator from '../Indicator/Indicator';
import { usePromiseTracker } from 'react-promise-tracker';

type Props = {};

function Header({}: Props) {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>Podcaster</Link>
      </div>
      <div className='header__indicator'>
        <Indicator busy={promiseInProgress}></Indicator>
      </div>
    </header>
  );
}

export default Header;
