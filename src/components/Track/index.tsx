import Image from "next/image";

type Props = {
  artistName: string;
  name: string;
  albumCover: string;
};

export default function Track({ artistName, albumCover, name }: Props) {
  return (
    <div className="flex my-4">
      <Image src={albumCover} height={50} width={50} />
      <div className="flex flex-col ml-4">
        <span className="font-semibold">{artistName}</span>
        <span>{name}</span>
      </div>
    </div>
  );
}
