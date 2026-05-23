"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-zinc-900 dark:text-zinc-100">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-white text-sm">
            SD
          </span>
          <span>
            Sinau<span className="text-primary-500">DevOps</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/learning-path" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Learning Path
          </Link>
          <Link href="/dashboard" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
          >
            Mulai Belajar
          </Link>
        </div>
      </div>
    </header>
  );
}
