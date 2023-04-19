import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import PodcastEpisodeList from './PodcastEpisodeList';
import mockPodcastDetails from '@fixture/PodcastDetails';

describe('PodcastEpisodeList.spec', () => {
  it('Should render component', async () => {
    const component = await act(async () =>
      render(
        <BrowserRouter>
          <PodcastEpisodeList
            episodes={mockPodcastDetails.episodes}
            podcastId={1}
          />
        </BrowserRouter>,
      ),
    );

    expect(
      component.container.getElementsByClassName('episodes-list').length,
    ).toBe(1);

    mockPodcastDetails.episodes.forEach((episode) => {
      expect(screen.getByText(episode.title)).toBeInTheDocument();
    });
  });
});
