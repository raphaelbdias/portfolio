 "use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { profile } from "./portfolioData";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="text-base font-semibold uppercase tracking-[0.12em] text-[var(--accent)] sm:text-lg"
        >
          RD
        </a>
        <div className="items-center gap-6 md:flex hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] p-2 text-[var(--text)] md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open ? (
        <div id="mobile-nav" className="border-t border-[var(--border)] px-5 py-4 md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-[var(--muted)] transition hover:bg-[var(--surface)] hover:text-[var(--text)]"
              >
                {item.label}
              </a>
            ))}
            <Link
              href={profile.resumeHref}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center rounded-md border border-[var(--border-strong)] px-3 py-2 text-sm text-[var(--text)] transition hover:bg-[var(--surface)]"
            >
              Resume
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
