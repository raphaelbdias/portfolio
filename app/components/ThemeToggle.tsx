// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setIsDark(!isDark);
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