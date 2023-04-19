import iPodcastDetails from './iPodcastDetails';
import iPodcast from './iPodcast';
import iPodcastEpisode from './iPodcastEpisode';

export default class PodcastMapper {
  static mapToPodcast(raw: any): iPodcast[] {
    const list: iPodcast[] = [];
    raw.feed.entry.forEach((entry: any) => {
      const podcast: iPodcast = {
        name: entry['im:name'].label,
        id: entry.id.attributes['im:id'],
        artist: entry['im:artist'].label,
        image: entry['im:image'][0]?.label,
        description: entry.summary.label,
      };
      list.push(podcast);
    });
    return list;
  }

  static mapToDetails(data: any): iPodcastDetails {
    const details: iPodcastDetails = {
      count: data.resultCount,
      episodes: [],
    };
    console.log('data ', data.results);
    data?.results?.slice(1).forEach((result: any) => {
      const episode: iPodcastEpisode = {
        id: result.trackId,
        title: result.trackName,
        date: result.releaseDate,
        durationMilisec: result.trackTimeMillis,
        description: result.description,
        type: result.episodeContentType,
        url: result.previewUrl,
      };
      details.episodes.push(episode);
    });
    console.log('details ', details);
    return details;
  }
}
