import React from 'react';
import { render, screen } from '@testing-library/react';
import PodcastInfo from './PodcastInfo';
import { BrowserRouter } from 'react-router-dom';
import { mockPodcast } from '@fixture/Podcast';
import '@testing-library/jest-dom';

describe('PodcastInfo', () => {
  it('Should render component', async () => {
    const component = await render(
      <BrowserRouter>
        <PodcastInfo podcast={mockPodcast} />
      </BrowserRouter>,
      {},
    );

    expect(
      screen.getByText(mockPodcast.name, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPodcast.artist, { exact: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(mockPodcast.description, { exact: false }),
    ).toBeInTheDocument();
    expect(component.container.getElementsByClassName('info').length).toBe(1);
  });
});
