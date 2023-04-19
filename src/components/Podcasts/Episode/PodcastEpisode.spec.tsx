import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

import mockPodcastList from '@fixture/PodcastList';
import mockPodcastDetails from '@fixture/PodcastDetails';

var getPodcastsDetailsMock = jest.fn(() => Promise.resolve(mockPodcastDetails));
var getTop100PodcastsMock = jest.fn(() => Promise.resolve(mockPodcastList));
jest.mock('@src/service/PodcastService', () => {
  return {
    __esModule: true,
    getPodcastsDetails: getPodcastsDetailsMock,
    getTop100Podcasts: getTop100PodcastsMock,
  };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    podcastId: '1',
    episodeId: '1',
  }),
  useRouteMatch: () => ({ url: '/podcast/1/episode/1' }),
}));

import PodcastEpisode from './PodcastEpisode';

const episode = mockPodcastDetails.episodes[0];

describe('PodcastEpisode', () => {
  it('Should render component', async () => {
    const component = await act(async () =>
      render(
        <BrowserRouter>
          <PodcastEpisode />
        </BrowserRouter>,
      ),
    );

    await act(async () => {
      await waitFor(getPodcastsDetailsMock);
      await waitFor(getTop100PodcastsMock);

      expect(getPodcastsDetailsMock).toBeCalled();
      expect(getTop100PodcastsMock).toBeCalled();
    });
    expect(component.container.getElementsByClassName('episode').length).toBe(
      1,
    );

    expect(screen.getByText(episode.title)).toBeInTheDocument();
    expect(screen.getByText(episode.description)).toBeInTheDocument();
  });
});
