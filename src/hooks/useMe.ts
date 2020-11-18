import { SPOTIFY_API_URL } from "consts";
import { Me } from "dtos/Me";
import { useSession } from "next-auth/client";
import { useQuery } from "react-query";

export function useMe() {
  const [session] = useSession();
  return useQuery<Me, string>("me", async () => {
    const response = await fetch(`${SPOTIFY_API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    });

    if (!response.ok) {
      throw await response.text();
    }

    return await response.json();
  });
}
