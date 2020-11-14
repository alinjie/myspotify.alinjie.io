import { SPOTIFY_API_URL } from "consts";
import { ArtistFollowing } from "dtos/ArtistFollowing";
import { useSession } from "next-auth/client";
import useSWR from "swr";

export function useArtistFollowing() {
  const [session] = useSession();
  return useSWR<ArtistFollowing, string>("artist-following", async () => {
    const response = await fetch(
      `${SPOTIFY_API_URL}/me/following?type=artist`,
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
  });
}
