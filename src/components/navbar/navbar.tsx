import Link from "next/link";
import NavItem from "./nav-item";
import { ThemeToggleButton } from "./theme-toggle-button";
import { getServerAuthSession } from "~/server/auth";

const navItems = [
  { href: "/renting", title: "Bérlés" },
  { href: "/about", title: "Rólunk" },
];

export default async function Navbar() {

  const session = await getServerAuthSession();

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <Link href="/">
        <h1>Edénykölcsönző</h1>
      </Link>
      <ul className="flex gap-2">
        {session && session.user && (
          <li>
            <NavItem href="/profile" title={session.user.name ?? "asd"} />
          </li>
        )}
        {navItems.map((item) => (
          <li key={item.href}>
            <NavItem href={item.href} title={item.title} />
          </li>
        ))}
        <ThemeToggleButton />
      </ul>
    </nav>
  );
}
