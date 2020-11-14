import cx from "classnames";
import { signIn, useSession } from "next-auth/client";
import { HTMLProps } from "react";

export default function Layout({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const [session, loading] = useSession();

  if (!session)
    return <button onClick={() => signIn("spotify")}>Sign in</button>;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div
      className={cx(
        "min-h-screen h-full py-8 text-white bg-spotify-black",
        className
      )}
      {...props}
    >
      <main className="px-4">{children}</main>
    </div>
  );
}
