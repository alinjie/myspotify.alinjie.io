import Image from "next/image";

type Props = {
  artistName: string;
  name: string;
  albumCover: string;
  duration?: number;
};

export default function Track({
  artistName,
  albumCover,
  name,
  duration,
}: Props) {
  const trackDuration = `${Math.floor(
    (duration % (1000 * 60 * 60)) / (1000 * 60)
  )}:${Math.floor((duration % (1000 * 60)) / 1000)}`;

  return (
    <div className="flex justify-between">
      <div className="flex">
        <div>
          <Image key={name} src={albumCover} height={50} width={50} />
        </div>
        <div className="flex flex-col ml-4">
          <span className="font-semibold">{artistName}</span>
          <span>{name}</span>
        </div>
      </div>
      {duration && <span className="opacity-50">{trackDuration}</span>}
    </div>
  );
}
