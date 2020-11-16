import Artist from "components/Artist";
import Button from "components/Button";
import { timeSpanOptions } from "consts";
import { useTopArtists } from "hooks/useTopArtists";
import { useState } from "react";
import Select from "components/Select";
import { Timespan } from "types/Timespan";
import { TimespanPicker } from "components/TimespanPicker";
import Container from "components/Container";

export default function Artists() {
  const [activeFilter, setActiveFilter] = useState<Timespan>(
    timeSpanOptions[0].value
  );
  const { data, error, canFetchMore, fetchMore, isFetching } = useTopArtists(
    activeFilter,
    30
  );

  if (error) return <p>{error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <TimespanPicker onChange={(timespan) => setActiveFilter(timespan)} />
      <Container className="grid grid-cols-autofit-150 gap-4">
        {data.map((artists) =>
          artists.items.map((artist) => (
            <Artist
              key={artist.id}
              large={true}
              image={artist.images[0].url}
              name={artist.name}
            />
          ))
        )}
      </Container>

      {canFetchMore && (
        <button
          disabled={isFetching}
          onClick={() => fetchMore()}
          className="mt-6 underline"
        >
          Load more
        </button>
      )}
    </div>
  );
}
