import Image from "next/image";

type Item = {
  id: string;
  image: string;
  artist: string;
  songOrAlbum: string;
};

type Props = {
  header: string;
  items: Item[];
};

export default function TopList({ header, items }: Props) {
  return (
    <div>
      <h3 className="text-spotify-green font-bold text-xl my-4">{header}</h3>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex flex-col">
            <div className="flex items-center">
              <div className="flex mr-2">
                <Image
                  src={item.image}
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">{item.artist}</span>
                <span>{item.songOrAlbum}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
