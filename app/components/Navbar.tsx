// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-lg">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl md:text-5xl tracking-tighter text-primary hover:text-primary/80 transition"
          style={{ fontFamily: "'Silkscreen', monospace" }}
        >
          RD
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors hover:text-primary ${
                pathname === item.href || (item.href === "#experience" && pathname === "/")
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/Raphael-Dias-Resume.pdf"
            download
            className="ml-6 px-5 py-2 rounded-full bg-primary text-background font-medium hover:bg-primary/90 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-primary/10 bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xl font-medium text-foreground/80 hover:text-primary transition"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Raphael-Dias-Resume.pdf"
              download
              className="block w-full text-center py-3 rounded-full bg-primary text-background font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}