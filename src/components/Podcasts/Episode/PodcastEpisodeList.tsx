import iPodcastEpisode from '@src/model/iPodcastEpisode';
import moment from 'moment';
import React from 'react';
import './PodcastEpisodeList.scss';
import { Link } from 'react-router-dom';

type Props = { episodes: iPodcastEpisode[]; podcastId: number | string };

export default function PodcastEpisodeList({ episodes, podcastId }: Props) {
  const header = (
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>Duration</th>
      </tr>
    </thead>
  );

  const row = (episode: iPodcastEpisode) => {
    const validDuration = moment
      .unix(Number(episode.durationMilisec) / 1000)
      .isValid();
    return (
      <tr key={episode.id}>
        <td>
          <Link to={`/podcast/${podcastId}/episode/${episode.id}`}>
            {episode.title}
          </Link>
        </td>
        <td>{moment(episode.date).format('D/M/YYYY')}</td>
        <td>
          {validDuration &&
            moment.unix(Number(episode.durationMilisec) / 1000).format('HH:mm')}
          {!validDuration && '--:--'}
        </td>
      </tr>
    );
  };

  return (
    <table className='episodes-list'>
      {header}
      <tbody>
        {episodes &&
          episodes.map((episode: iPodcastEpisode) => {
            return row(episode);
          })}
      </tbody>
    </table>
  );
}
