import React from 'react';
import router from '../routes';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Application.scss';

const Application: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-right' />
    </>
  );
};

export default Application;
