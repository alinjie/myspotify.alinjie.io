import { SPOTIFY_API_URL } from "consts";
import { TopArtists } from "dtos/TopArtists";
import { useSession } from "next-auth/client";
import { Timespan } from "types/Timespan";
import { useInfiniteQuery } from "react-query";

export function useTopArtists(timespan: Timespan = "medium_term", limit = 10) {
  const [session] = useSession();

  return useInfiniteQuery<TopArtists, string>(
    ["top-artists", timespan, limit],
    async (_key, _timespan, _limit, offset = 0) => {
      const url = `${SPOTIFY_API_URL}/me/top/artists?limit=${limit}&offset=${offset}&time_range=${timespan}`;

      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
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
