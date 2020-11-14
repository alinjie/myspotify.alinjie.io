import { useArtistFollowing } from "hooks/useArtistFollowing";
import { useMe } from "hooks/useMe";
import { usePlaylists } from "hooks/usePlaylists";
import Image from "next/image";

type StatProps = {
  label: string;
  value: string | number;
};

function Stat({ value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-semibold text-spotify-green">{value}</span>
      <span className="opacity-50">{label}</span>
    </div>
  );
}

export default function UserOverview() {
  const meQuery = useMe();
  const playlistsQuery = usePlaylists();
  const artistFollowingQuery = useArtistFollowing();

  const error =
    meQuery.error || playlistsQuery.error || artistFollowingQuery.error;
  const loading =
    !meQuery.data || !playlistsQuery.data || !artistFollowingQuery.data;

  if (error) <p>{error}</p>;

  if (loading) return null;

  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src={meQuery.data.images[0].url}
          height={100}
          width={100}
          className="rounded-full"
        />
        <h2 className="text-xl text-center font-semibold my-4">
          {meQuery.data.display_name}
        </h2>
      </div>
      <div className="flex space-x-8">
        <Stat label="Followers" value={meQuery.data.followers.total} />
        <Stat
          label="Following"
          value={artistFollowingQuery.data.artists.total}
        />
        <Stat label="Playlists" value={playlistsQuery.data.total} />
      </div>
    </div>
  );
}
