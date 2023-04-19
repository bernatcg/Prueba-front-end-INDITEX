import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Common/Header/Header';

import './Layout.scss';

type Props = {};

export default function Layout({}: Props) {
  return (
    <>
      <Header />
      <div className='layout__content'>
        <Outlet></Outlet>
      </div>
    </>
  );
}
