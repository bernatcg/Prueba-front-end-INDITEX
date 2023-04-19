import iPodcast from '@src/model/iPodcast';
import iPodcastDetails from '@src/model/iPodcastDetails';
import iPodcastEpisode from '@src/model/iPodcastEpisode';
import {
  getPodcastsDetails,
  getTop100Podcasts,
} from '@src/service/PodcastService';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PodcastInfo from '../Info/PodcastInfo';
import './PodcastEpisode.scss';

function PodcastEpisode() {
  const { podcastId, episodeId } = useParams();
  const [episode, setEpisode] = useState<iPodcastEpisode>(null);
  const [podcast, setPodcast] = useState<iPodcast>(null);

  useEffect(() => {
    getPodcastsDetails(podcastId).then((details: iPodcastDetails) => {
      const ep = details.episodes.find((e) => e.id.toString() === episodeId);
      setEpisode(ep);
    });
    getTop100Podcasts().then((podcastList: iPodcast[]) => {
      setPodcast(podcastList.find((p) => p.id === podcastId));
    });
  }, []);

  return (
    <div className='episode'>
      {podcast && (
        <div className='episode__info'>
          <PodcastInfo podcast={podcast} />
        </div>
      )}
      {episode && (
        <div className='episode__data'>
          <div className='episode__data data shadow w--100'>
            <div className='data__title'>
              <h2>{episode.title}</h2>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: episode.description }}
              className='data__description italic'
            ></div>
            <div className='data__player'>
              {episode.type === 'video' && (
                <video controls>
                  <source src={episode.url} />
                </video>
              )}
              {episode.type === 'audio' && (
                <audio controls>
                  <source src={episode.url} />
                </audio>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PodcastEpisode;
