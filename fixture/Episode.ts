import iPodcastEpisode from '@src/model/iPodcastEpisode';

const mockEpisode1: iPodcastEpisode = {
  id: 1,
  title: 'Episode 1',
  date: '2023-04-19T07:00:00Z',
  durationMilisec: '10192000',
  description: 'This is the episode 1',
  type: '',
  url: '',
};

const mockEpisode2: iPodcastEpisode = {
  id: 2,
  title: 'Episode 2',
  date: '2023-04-230T07:00:00Z',
  durationMilisec: '12192000',
  description: 'This is the episode 2',
  type: '',
  url: '',
};
export { mockEpisode1, mockEpisode2 };
