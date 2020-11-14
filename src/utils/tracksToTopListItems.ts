import { TopTracks } from "dtos/TopTracks";

export function tracksToTopListItems(tracks: TopTracks) {
  return tracks.items.map((item) => ({
    artist: item.artists[0].name,
    id: item.id,
    image: item.album.images[0].url,
    songOrAlbum: item.name,
  }));
}
