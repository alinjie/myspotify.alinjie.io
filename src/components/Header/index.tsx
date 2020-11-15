import Image from "next/image";
import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/dist/client/router";

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
          "font-semibold uppercase text-sm opacity-50",
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
    <header className="flex items-center justify-between p-4 max-w-6xl mx-auto">
      <div>
        <Link href="/">
          <a>
            <Image
              src="/img/spotify-logo.png"
              height={32}
              width={32}
              className="rounded-full"
            />
          </a>
        </Link>
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
    </header>
  );
}
