"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

interface HeaderAuthProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
}

export default function HeaderAuth({ session }: HeaderAuthProps) {
  if (!session?.user) {
    return (
      <Link
        href="/login"
        className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
      >
        Mulai Belajar
      </Link>
    );
  }

  const initial = session.user.name?.charAt(0)?.toUpperCase() || session.user.email?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="flex items-center gap-3">
      <span className="hidden text-sm text-zinc-600 dark:text-zinc-400 sm:inline">
        {session.user.name || session.user.email}
      </span>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-sm font-medium text-white">
        {initial}
      </div>
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="rounded-lg border border-zinc-300 px-3 py-1.5 text-sm text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
      >
        Keluar
      </button>
    </div>
  );
}
