import Artist from "components/Artist";
import Container from "components/Container";
import Loader from "components/Loader";
import Track from "components/Track";
import UserOverview from "components/UserOverview";
import { useTopArtists } from "hooks/useTopArtists";
import { useTopTracks } from "hooks/useTopTracks";
import { Fragment } from "react";

export default function Home() {
  const topTracksQuery = useTopTracks("short_term", 10);
  const topArtistsQuery = useTopArtists("short_term", 10);

  const error = topTracksQuery.error || topArtistsQuery.error;
  const loading = !topArtistsQuery.data || !topTracksQuery.data;

  if (error)
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <UserOverview />
          <div className="mt-8 space-y-8 md:flex md:space-y-0">
            <div className="md:flex-1 space-y-4">
              <h2 className="text-lg font-bold my-4">
                Top artists last 4 weeks
              </h2>
              {topArtistsQuery.data[0].items.map((artist) => (
                <Artist
                  key={artist.id}
                  image={artist.images[0].url}
                  name={artist.name}
                />
              ))}
            </div>
            <div className="md:flex-1 space-y-4">
              <h2 className="text-lg font-bold my-4">
                Top tracks last 4 weeks
              </h2>
              {topTracksQuery.data[0].items.map((track) => (
                <Track
                  key={track.id}
                  albumCover={track.album.images[0].url}
                  name={track.name}
                  artistName={track.artists[0].name}
                />
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Container>
  );
}
