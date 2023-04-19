import iPodcast from '@src/model/iPodcast';
import { getTop100Podcasts } from '@src/service/PodcastService';
import React, { ChangeEvent, useEffect, useState } from 'react';
import PodcastCard from './PodcastCard';

import './PodcastList.scss';
import Badge from '@src/components/Common/Badge/Badge';

function PodcastList() {
  const [podcasts, setPodcasts] = useState<iPodcast[]>([]);
  const [filtered, setFiltered] = useState<iPodcast[]>([]);
  const [filter, setFilter] = useState<string>(null);

  useEffect(() => {
    getTop100Podcasts().then((podcastList: iPodcast[]) => {
      setPodcasts(podcastList);
      setFiltered(podcastList);
    });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFilter(value);
    if (value) {
      setFiltered(
        podcasts.filter(
          (p) =>
            p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            p.artist.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
        ),
      );
    } else {
      setFiltered(podcasts);
    }
  };

  return (
    <section className='podcast-list'>
      <div className='podcast-list__filter'>
        <Badge value={filtered.length}></Badge>
        <input
          onChange={handleChange}
          value={filter}
          placeholder='Filter podcasts...'
        ></input>
      </div>
      <div className='podcast-list__content'>
        {filtered?.map((p: iPodcast) => {
          return <PodcastCard key={p.id} podcast={p} />;
        })}
      </div>
    </section>
  );
}

export default PodcastList;
