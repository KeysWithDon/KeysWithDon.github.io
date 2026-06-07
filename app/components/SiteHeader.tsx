"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Resources" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <Image
            className="brand-headshot"
            src="/images/headshot.png"
            alt=""
            width={72}
            height={72}
            priority
          />
          <Image
            className="brand-logo"
            src="/images/logo.png"
            alt=""
            width={92}
            height={44}
            priority
          />
          <span className="brand-copy">
            <strong>Donovan Teasley</strong>
            <span>NC Realtor · The Next Level Realty Plus</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-nav ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? "active" : ""}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            className="button button-small"
            href="/consult"
            onClick={() => setOpen(false)}
          >
            Schedule a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
