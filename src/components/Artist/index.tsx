import Image from "next/image";
import cx from "classnames";

type Props = {
  name: string;
  image: string;
  large?: boolean;
};

export default function Artist({ image, name, large = false }: Props) {
  const imageSize = large ? 100 : 50;

  return (
    <div
      data-testid="artist"
      className={cx("flex items-center text-center", {
        "flex-col space-y-2": large,
      })}
    >
      <Image
        key={name}
        src={image}
        width={imageSize}
        height={imageSize}
        className="rounded-full"
      />
      <span className={cx(large ? "ml-0" : "ml-4")}>{name}</span>
    </div>
  );
}
