// components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "#experience" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition"
            style={{ fontFamily: "'Silkscreen', monospace" }}
          >
            RD
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-all hover:text-teal-400 ${
                  pathname === item.href || (item.href === "#experience" && pathname === "/")
                    ? "text-teal-400"
                    : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/Raphael-Dias-Resume.pdf"
              download
              className="ml-6 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-semibold hover:scale-105 transition transform"
            >
              Resume
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay — Full Screen, Smooth Slide */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="fixed inset-x-0 top-0 z-50 md:hidden animate-in slide-in-from-top duration-300">
            <div className="bg-black/95 backdrop-blur-2xl border-b border-white/10 h-screen pt-24 px-8">
              <div className="space-y-8">
                {navItems.map((item, i) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block text-3xl font-medium text-white/80 hover:text-teal-400 transition transform hover:translate-x-2"
                    style={{ animation: `fadeInUp 0.4s ease-out forwards ${i * 0.05}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/Raphael-Dias-Resume.pdf"
                  download
                  onClick={closeMenu}
                  className="block w-full text-center py-5 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-black text-xl font-bold hover:scale-105 transition transform"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Tiny CSS animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}