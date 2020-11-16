import { HTMLProps } from "react";
import cx from "classnames";

type Variant = "outlined" | "primary";

type Props = HTMLProps<HTMLButtonElement> & {
  variant?: Variant;
};

export default function Button({
  children,
  type = "button",
  className,
  variant = "primary",
  ...props
}: Props) {
  return (
    <button
      className={cx(
        "px-6 rounded-full h-8 transition-all text-sm duration-100 disabled:opacity-25 hover:bg-white hover:text-black",
        {
          "border border-white": variant == "outlined",
          "bg-spotify-green text-white": variant == "primary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
