import { SPOTIFY_API_URL, timeSpans } from "consts";
import { TopArtists } from "dtos/TopArtists";
import { useSession } from "next-auth/client";
import useSWR from "swr";

export function useTopArtists() {
  const [session] = useSession();

  return useSWR<TopArtists[], string>(`top-artists`, async () => {
    return await Promise.all(
      timeSpans.map(async (timeSpan) => {
        const response = await fetch(
          `${SPOTIFY_API_URL}/me/top/artists?limit=5&time_range=${timeSpan}`,
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
