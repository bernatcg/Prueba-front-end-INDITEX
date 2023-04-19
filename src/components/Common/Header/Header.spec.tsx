import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('Should render component', async () => {
    await render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      {},
    );

    expect(screen.getByRole('logo')).toBeInTheDocument();
    expect(screen.getByRole('indicator')).toBeInTheDocument();
  });
});
