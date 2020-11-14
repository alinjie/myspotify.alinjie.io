import { SPOTIFY_API_URL, timeSpans } from "consts";
import { TopTracks } from "dtos/TopTracks";
import { useSession } from "next-auth/client";
import useSWR from "swr";

export function useTopTracks() {
  const [session] = useSession();

  return useSWR<TopTracks[], string>(`top-tracks`, async () => {
    return await Promise.all(
      timeSpans.map(async (timeSpan) => {
        const response = await fetch(
          `${SPOTIFY_API_URL}/me/top/tracks?limit=5&time_range=${timeSpan}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );

        if (!response.ok) {
          throw await response.text();
        }

        return await response.json();
      })
    );
  });
}
