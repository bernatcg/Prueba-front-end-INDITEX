import iPodcast from '@src/model/iPodcast';
import PodcastMapper from '@src/model/PodcastMapper';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';
import StorageService from './StorageService';
import iPodcastDetails from '@src/model/iPodcastDetails';
import { toast } from 'react-toastify';

const getTop100Podcasts = async (): Promise<iPodcast[]> => {
  let data = StorageService.get<iPodcast[]>('podcasts');
  if (!data) {
    try {
      const response = await trackPromise(axios.get(process.env.PODCAST_URL));
      data = PodcastMapper.mapToPodcast(response.data);
      StorageService.set('podcasts', data);
    } catch (ex) {
      console.log('error: ', ex);
      toast.error(`Error getting podcasts. ${ex.message}`);
    }
  }
  return data;
};

const getPodcastsDetails = async (
  podcastId: number | string,
): Promise<iPodcastDetails> => {
  const url = `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`;
  let data = StorageService.get<iPodcastDetails>(`podcast-${podcastId}`);
  if (!data) {
    try {
      const response = await trackPromise(axios.get(url));
      data = PodcastMapper.mapToDetails(response.data);
    } catch (ex) {
      console.log('error: ', ex);
      toast.error(`Error getting podcasts details. ${ex.message}`);
    }
  }
  return data;
};

export { getTop100Podcasts, getPodcastsDetails };
