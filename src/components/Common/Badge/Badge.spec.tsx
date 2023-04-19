import Badge from './Badge';
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('Should render component', async () => {
    const component = await render(<Badge value={123} />);

    expect(screen.getByText('123')).toBeInTheDocument();
    expect(component.container.getElementsByClassName('badge').length).toBe(1);
  });
});
