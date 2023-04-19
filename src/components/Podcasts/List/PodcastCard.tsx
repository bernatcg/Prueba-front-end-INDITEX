import iPodcast from '@src/model/iPodcast';
import React from 'react';
import './PodcastCard.scss';
import { Link } from 'react-router-dom';

type Props = { podcast: iPodcast };

export default function PodcastCard({ podcast }: Props) {
  return (
    <Link to={`/podcast/${podcast.id}`}>
      <div className='card'>
        <div className='card__image'>
          <div className='card__image__wrapper'>
            <img src={podcast.image} />
          </div>
        </div>
        <div className='card__content shadow'>
          <div className='card__content__name'>{podcast.name}</div>
          <div className='card__content__author'>{`Author: ${podcast.artist}`}</div>
        </div>
      </div>
    </Link>
  );
}
