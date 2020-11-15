import { SPOTIFY_API_URL } from "consts";
import { TopTracks } from "dtos/TopTracks";
import { useSession } from "next-auth/client";
import { useInfiniteQuery } from "react-query";
import { Timespan } from "types/Timespan";

export function useTopTracks(timespan: Timespan = "medium_term", limit = 10) {
  const [session] = useSession();

  return useInfiniteQuery<TopTracks, string>(
    ["top-tracks", timespan, limit],
    async (_key, _timeSpan, _limit, offset = 0) => {
      const url = `${SPOTIFY_API_URL}/me/top/tracks?limit=${limit}&offset=${offset}&time_range=${timespan}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      });

      if (!response.ok) {
        throw await response.text();
      }

      return await response.json();
    },
    {
      getFetchMore: (lastGroup) =>
        lastGroup.next ? lastGroup.offset + limit : null,
    }
  );
}
