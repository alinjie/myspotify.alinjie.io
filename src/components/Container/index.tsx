import { HTMLProps } from "react";
import cx from "classnames";

export default function Container({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cx("mx-auto max-w-6xl p-4 md:py-10", className)}
    />
  );
}
