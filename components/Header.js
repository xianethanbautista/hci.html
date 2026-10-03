"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Programs" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Iron House home">
        <span className="brand-mark" aria-hidden="true">I</span>
        <span>IRON<span className="brand-light">HOUSE</span></span>
      </Link>
      <nav className="site-nav" aria-label="Main navigation">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              className={`nav-link${active ? " active" : ""}`}
              href={link.href}
              aria-current={active ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        <Link className="nav-join" href="/about#visit">Join us <span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
