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
        "px-6 rounded-full h-8 transition-all text-sm duration-100 disabled:opacity-25",
        {
          "border border-white hover:bg-white hover:text-black":
            variant == "outlined",
          "bg-spotify-green text-white hover:text-spotify-green hover:bg-white":
            variant == "primary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
