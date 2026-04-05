// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const prefersDarkTheme = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return localStorage.theme === "dark" || (!("theme" in localStorage) && prefersDarkTheme());
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggle = () => {
    setIsDark((current) => !current);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed top-6 right-6 z-[9999] p-3 rounded-full bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg hover:scale-110 transition-all duration-300"
    >
      <Sun className={`w-5 h-5 text-primary absolute inset-3 transition-all duration-500 ${isDark ? "opacity-0 rotate-180" : "opacity-100 rotate-0"}`} />
      <Moon className={`w-5 h-5 text-primary absolute inset-3 transition-all duration-500 ${isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"}`} />
    </button>
  );
}
