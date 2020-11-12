import cx from "classnames";
import { HTMLProps } from "react";

export default function Layout({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cx("bg-spotify-black h-screen text-white py-8", className)}
      {...props}
    >
      <main className="max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
