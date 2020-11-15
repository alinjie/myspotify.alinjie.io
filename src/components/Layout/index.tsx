import cx from "classnames";
import { signIn, useSession } from "next-auth/client";
import { HTMLProps } from "react";
import Header from "components/Header";

export default function Layout({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const [session, loading] = useSession();

  if (!session) {
    return <button onClick={() => signIn("spotify")}>Sign in</button>;
  }

  if (loading) return <h1>Loading...</h1>;

  return (
    <div
      className={cx(
        "min-h-screen h-full text-white bg-spotify-black",
        className
      )}
      {...props}
    >
      <Header />
      <main className="p-4 max-w-6xl mx-auto">{children}</main>
    </div>
  );
}
