import cx from "classnames";
import { signIn, useSession } from "next-auth/client";
import { HTMLProps } from "react";
import Header from "components/Header";
import Loader from "components/Loader";
import Container from "components/Container";

export default function Layout({
  className,
  children,
  ...props
}: HTMLProps<HTMLDivElement>) {
  const [session, loading] = useSession();

  if (!session) {
    return <button onClick={() => signIn("spotify")}>Sign in</button>;
  }

  if (loading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  console.log(document.cookie);
  return (
    <div className={cx("min-h-screen h-full text-white", className)} {...props}>
      <Header />
      <main className="bg-spotify-gray min-h-screen">{children}</main>
    </div>
  );
}
