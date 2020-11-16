import Button from "components/Button";
import { TimespanPicker } from "components/TimespanPicker";
import Track from "components/Track";
import { timeSpanOptions } from "consts";
import { useTopTracks } from "hooks/useTopTracks";
import Container from "components/Container";
import { useState } from "react";
import { Timespan } from "types/Timespan";
import Loader from "components/Loader";

export default function Tracks() {
  const [activeFilter, setActiveFilter] = useState<Timespan>(
    timeSpanOptions[0].value
  );
  const { data, error, isFetching, canFetchMore, fetchMore } = useTopTracks(
    activeFilter,
    30
  );

  if (error)
    return (
      <Container>
        <p>{error}</p>
      </Container>
    );

  return (
    <div>
      <TimespanPicker onChange={(timespan) => setActiveFilter(timespan)} />
      <Container className="space-y-4">
        {!data ? (
          <Loader />
        ) : (
          data.map((tracks) => {
            return tracks.items.map((track) => (
              <Track
                key={track.id}
                name={track.name}
                artistName={track.artists[0].name}
                albumCover={track.album.images[0].url}
                duration={track.duration_ms}
              />
            ));
          })
        )}
        {canFetchMore && (
          <Button
            disabled={isFetching}
            onClick={() => fetchMore()}
            className="mt-6"
          >
            Load more
          </Button>
        )}
      </Container>
    </div>
  );
}
