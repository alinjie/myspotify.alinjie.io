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
        "px-6 py-2 rounded-full font-semibold hover:opacity-50 transition-opacity duration-100 disabled:opacity-25",
        {
          "border border-white": variant == "outlined",
          "bg-spotify-green": variant == "primary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
