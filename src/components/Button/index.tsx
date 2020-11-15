import { HTMLProps } from "react";
import cx from "classnames";

export default function Button({
  children,
  type = "button",
  className,
  ...props
}: HTMLProps<HTMLButtonElement>) {
  return (
    <button
      className={cx(
        "px-6 py-2 border border-white rounded-full font-semibold hover:opacity-50 transition-opacity duration-100 disabled:opacity-25",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
