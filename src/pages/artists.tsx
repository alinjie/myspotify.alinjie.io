import Artist from "components/Artist";
import { timeSpanOptions } from "consts";
import { useTopArtists } from "hooks/useTopArtists";
import { Fragment, useState } from "react";
import { Timespan } from "types/Timespan";
import { TimespanPicker } from "components/TimespanPicker";
import Container from "components/Container";
import Loader from "components/Loader";
import Button from "components/Button";
import cx from "classnames";
import Transition from "components/Transition";

export default function Artists() {
  const [activeFilter, setActiveFilter] = useState<Timespan>(
    timeSpanOptions[0].value
  );

  const { data, error, canFetchMore, fetchMore, isFetching } = useTopArtists(
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
    <Fragment>
      <TimespanPicker onChange={(timespan) => setActiveFilter(timespan)} />

      <Container>
        {!data ? (
          <Loader />
        ) : (
          <Fragment>
            <div className={cx("grid grid-cols-autofit-150 gap-4")}>
              {data.map((artists) =>
                artists.items.map((artist) => (
                  <Artist
                    large={true}
                    image={artist.images[0].url}
                    name={artist.name}
                  />
                ))
              )}
            </div>

            {canFetchMore && (
              <Button
                disabled={isFetching}
                onClick={() => fetchMore()}
                className="mt-6"
              >
                Load more
              </Button>
            )}
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
}
