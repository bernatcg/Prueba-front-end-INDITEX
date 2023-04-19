import iPodcast from '@src/model/iPodcast';
import React from 'react';
import './PodcastInfo.scss';
import { Link } from 'react-router-dom';

type Props = { podcast: iPodcast };

export default function PodcastInfo({ podcast }: Props) {
  return (
    <div className='info shadow'>
      <div className='info__image'>
        <Link to={`/podcast/${podcast.id}`}>
          <img src={podcast?.image} />
        </Link>
      </div>
      <div className='info__details'>
        <span className='info__details__name bold'>
          <Link className='black' to={`/podcast/${podcast.id}`}>
            {podcast?.name}
          </Link>
        </span>
        <span className='info__details__artist italic'>
          by {podcast?.artist}
        </span>
      </div>
      <div className='info__description'>
        <div className='bold'>Description:</div>
        <div className='italic fs-90'>{podcast.description}</div>
      </div>
    </div>
  );
}
