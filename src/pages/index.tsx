import Artist from "components/Artist";
import Track from "components/Track";
import UserOverview from "components/UserOverview";
import { useTopArtists } from "hooks/useTopArtists";
import { useTopTracks } from "hooks/useTopTracks";

export default function Home() {
  const topTracksQuery = useTopTracks();
  const topArtistsQuery = useTopArtists();

  const error = topTracksQuery.error || topArtistsQuery.error;
  const loading = !topArtistsQuery.data || !topTracksQuery.data;

  if (error) return <p>{error}</p>;

  if (loading) return <h1>Loading...</h1>;

  const topArtistsThisMonth = topArtistsQuery.data[2].items;
  const topTracksThisMonth = topTracksQuery.data[2].items;

  return (
    <div>
      <UserOverview />
      <div className="mt-8 space-y-8 md:flex md:space-y">
        <div className="md:flex-1">
          <h2 className="font-bold my-4">Top artists this month</h2>
          {topArtistsThisMonth.map((artist) => (
            <Artist
              key={artist.id}
              image={artist.images[0].url}
              name={artist.name}
            />
          ))}
        </div>
        <div className="md:flex-1">
          <h2 className="font-bold my-4">Top tracks this month</h2>
          {topTracksThisMonth.map((track) => (
            <Track
              key={track.id}
              albumCover={track.album.images[0].url}
              name={track.name}
              artistName={track.artists[0].name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
