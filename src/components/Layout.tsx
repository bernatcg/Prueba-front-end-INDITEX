import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header/Header';

import './Layout.scss';

export default function Layout() {
  return (
    <>
      <Header />
      <div className='layout__content'>
        <Outlet></Outlet>
      </div>
    </>
  );
}
