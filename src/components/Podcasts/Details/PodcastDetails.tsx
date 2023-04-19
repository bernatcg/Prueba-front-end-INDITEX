import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getPodcastsDetails,
  getTop100Podcasts,
} from '@src/service/PodcastService';
import iPodcast from '@src/model/iPodcast';
import PodcastInfo from '../Info/PodcastInfo';

import './PodcastDetails.scss';
import iPodcastDetails from '@src/model/iPodcastDetails';
import PodcastEpisodeList from '../Episode/PodcastEpisodeList';

type Props = {};

function PodcastDetails({}: Props) {
  let { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getPodcastsDetails(podcastId).then((details: iPodcastDetails) => {
      setDetails(details);
    });
    getTop100Podcasts().then((podcastList: iPodcast[]) => {
      setPodcast(podcastList.find((p) => p.id === podcastId));
    });
  }, []);

  return (
    <div className='details'>
      <div className='details__right info'>
        {podcast && <PodcastInfo podcast={podcast} />}
      </div>
      <div className='details__left'>
        <div className='details__left__counter shadow'>
          Episodes: {(details && details.count) || 0}
        </div>
        <div className='details__left__episodes shadow scroll--y'>
          <PodcastEpisodeList
            episodes={details?.episodes}
            podcastId={podcastId}
          />
        </div>
      </div>
    </div>
  );
}

export default PodcastDetails;
