import Header from "components/Header";
import TopList from "components/TopList";
import { SPOTIFY_API_URL } from "consts";
import { TopTracks } from "dtos/TopTracks";
import { useSession } from "next-auth/client";
import useSWR from "swr";
import { tracksToTopListItems } from "utils/tracksToTopListItems";

const terms = ["long_term", "medium_term", "short_term"];

export default function Home() {
  const [session] = useSession();

  const { data, error } = useSWR("top-tracks", async () => {
    return await Promise.all(
      terms.map(async (timeSpan) => {
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

        return (await response.json()) as TopTracks;
      })
    );
  });

  if (error) return <p>{error}</p>;

  if (!data) return <h1>Loading...</h1>;

  const [longTermTopTrack, mediumTermTopTracks, shortTermTopTracks] = data;

  return (
    <div>
      <Header image={session.user.image} name={session.user.name} />
      <TopList
        header="Top tracks (Last month)"
        items={tracksToTopListItems(shortTermTopTracks)}
      />
      <TopList
        header="Top tracks (Last 6 months)"
        items={tracksToTopListItems(mediumTermTopTracks)}
      />
      <TopList
        header="Top tracks (All time)"
        items={tracksToTopListItems(longTermTopTrack)}
      />
    </div>
  );
}
