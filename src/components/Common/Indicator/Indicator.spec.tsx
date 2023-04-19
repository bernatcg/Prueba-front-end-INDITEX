import React from 'react';
import { render, screen } from '@testing-library/react';
import Indicator from './Indicator';

describe('Indicator', () => {
  it('Should render no indicator', async () => {
    const component = await render(<Indicator busy={false} />);

    expect(
      component.container.getElementsByClassName('indicator__dot').length,
    ).toBe(1);
    expect(
      component.container.getElementsByClassName('indicator__dot--busy').length,
    ).toBe(0);
  });
  it('Should render no indicator', async () => {
    const component = await render(<Indicator busy={true} />);

    expect(
      component.container.getElementsByClassName('indicator__dot').length,
    ).toBe(1);
    expect(
      component.container.getElementsByClassName('indicator__dot--busy').length,
    ).toBe(1);
  });
});
