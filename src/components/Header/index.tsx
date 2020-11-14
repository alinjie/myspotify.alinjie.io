import Image from "next/image";

type Props = {
  image: string;
  name: string;
};

export default function Header({ image, name }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={image}
        alt="User avatar"
        height={120}
        width={120}
        className="rounded-full"
      />
      <h2 className="text-2xl font-bold mt-4">{name}</h2>
    </div>
  );
}
