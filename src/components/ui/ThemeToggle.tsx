"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-zinc-300 transition-colors dark:border-zinc-600"
      aria-label="Toggle theme"
    >
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white text-xs transition-transform ${
          dark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {mounted ? (dark ? "🌙" : "☀️") : "☀️"}
      </span>
    </button>
  );
}
