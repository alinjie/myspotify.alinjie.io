export async function refreshAccessToken(refreshToken: string) {
  const body = new URLSearchParams();
  body.append("refresh_token", refreshToken);
  body.append("grant_type", "refresh_token");

  const encodedCredentials = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
    },
    body,
  });

  if (!response.ok) {
    throw await response.text();
  }

  return await response.json();
}
