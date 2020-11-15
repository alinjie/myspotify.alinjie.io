import Button from "components/Button";
import Select from "components/Select";
import Track from "components/Track";
import { timeSpanOptions } from "consts";
import { useTopTracks } from "hooks/useTopTracks";
import { useState } from "react";
import { Timespan } from "types/Timespan";

export default function Tracks() {
  const [activeFilter, setActiveFilter] = useState<Timespan>(
    timeSpanOptions[0].value
  );
  const { data, error, isFetching, canFetchMore, fetchMore } = useTopTracks();

  if (error) return <p>{error}</p>;

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Select
        className="mb-6"
        options={timeSpanOptions}
        onChange={(selected) =>
          setActiveFilter(
            timeSpanOptions.find((item) => item.value === selected.value).value
          )
        }
      />
      <div className="space-y-4">
        {data.map((tracks) => {
          return tracks.items.map((track) => (
            <Track
              key={track.id}
              name={track.name}
              artistName={track.artists[0].name}
              albumCover={track.album.images[0].url}
              duration={track.duration_ms}
            />
          ));
        })}
        {canFetchMore && (
          <Button
            disabled={isFetching}
            onClick={() => fetchMore()}
            className="mt-6"
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
}
