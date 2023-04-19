import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PodcastList from './components/Podcasts/List/PodcastList';
import PodcastDetails from './components/Podcasts/Details/PodcastDetails';
import PodcastEpisode from './components/Podcasts/Episode/PodcastEpisode';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PodcastList />,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetails />,
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <PodcastEpisode />,
      },
    ],
  },
]);

export default router;
