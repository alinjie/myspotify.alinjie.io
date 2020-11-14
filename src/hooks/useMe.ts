import { SPOTIFY_API_URL } from "consts";
import { Me } from "dtos/Me";
import { useSession } from "next-auth/client";
import useSWR from "swr";

export function useMe() {
  const [session] = useSession();
  return useSWR<Me, string>("me", async () => {
    const response = await fetch(`${SPOTIFY_API_URL}/me`, {
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
