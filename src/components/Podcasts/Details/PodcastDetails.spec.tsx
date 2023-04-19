import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockPodcastDetails from '@fixture/PodcastDetails';
import '@testing-library/jest-dom';

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
  }),
  useRouteMatch: () => ({ url: '/podcast/1' }),
}));

import PodcastDetails from './PodcastDetails';
import mockPodcastList from '@fixture/PodcastList';

describe('PodcastDetails', () => {
  it('Should render component', async () => {
    const component = await act(async () =>
      render(
        <BrowserRouter>
          <PodcastDetails />
        </BrowserRouter>,
      ),
    );

    await act(async () => {
      await waitFor(getPodcastsDetailsMock);
      await waitFor(getTop100PodcastsMock);
    });

    expect(getPodcastsDetailsMock).toBeCalled();
    expect(getTop100PodcastsMock).toBeCalled();

    expect(component.container.getElementsByClassName('details').length).toBe(
      1,
    );
    expect(
      component.container.getElementsByClassName('episodes-list').length,
    ).toBe(1);
    expect(
      screen.getByText('Episodes: 2', { exact: false }),
    ).toBeInTheDocument();
    expect(screen.getByText('Episode 1', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Title', { exact: false })).toBeInTheDocument();
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Duration', { exact: false })).toBeInTheDocument();
  });
});
