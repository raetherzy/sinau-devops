"use client";

import { useState, useLayoutEffect } from "react";

function getIsDark(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem("theme");
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => getIsDark());

  useLayoutEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-zinc-300 transition-colors dark:border-zinc-600"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white text-xs transition-transform ${
          dark ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
