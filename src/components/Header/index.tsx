import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/dist/client/router";
import Button from "components/Button";
import { signOut } from "next-auth/client";

type NavLinkProps = {
  href: string;
  pageName: string;
};

function NavLink({ href, pageName }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <a
        className={cx(
          "font-semibold uppercase text-xs opacity-50 transition-opacity duration-150 hover:opacity-100 md:text-sm",
          isActive && "opacity-100"
        )}
      >
        {pageName}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header className="p-4">
      <div className="max-w-6xl mx-auto md:flex md:items-center md:justify-between">
        <div className="flex justify-between mb-2">
          <Link href="/">
            <a>
              <Image
                src="/img/spotify-logo.png"
                height={40}
                width={40}
                className="rounded-full"
              />
            </a>
          </Link>
          <Button
            className="md:hidden"
            variant="outlined"
            onClick={() => signOut()}
          >
            Sign out
          </Button>
        </div>
        <nav>
          <ul className="flex space-x-3">
            <li>
              <NavLink href="/" pageName="Overview" />
            </li>
            <li>
              <NavLink href="/artists" pageName="Artists" />
            </li>
            <li>
              <NavLink href="/tracks" pageName="Tracks" />
            </li>
          </ul>
        </nav>
        <Button
          className="hidden md:block"
          variant="outlined"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </div>
    </header>
  );
}
