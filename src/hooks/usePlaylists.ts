import { SPOTIFY_API_URL } from "consts";
import { Playlists } from "dtos/Playlists";
import { useSession } from "next-auth/client";
import { useQuery } from "react-query";

export function usePlaylists() {
  const [session] = useSession();
  return useQuery<Playlists, string>("playlists", async () => {
    const response = await fetch(`${SPOTIFY_API_URL}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });

    if (!response.ok) {
      throw await response.text();
    }

    return await response.json();
  });
}
