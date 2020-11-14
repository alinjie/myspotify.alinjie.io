import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

export default function Artist({ image, name }: Props) {
  return (
    <div className="flex items-center my-4">
      <Image src={image} width={50} height={50} className="rounded-full" />
      <span className="ml-4">{name}</span>
    </div>
  );
}
