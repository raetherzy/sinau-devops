import Link from "next/link";
import { auth } from "@/auth";
import ThemeToggle from "@/components/ui/ThemeToggle";
import HeaderAuth from "@/components/layout/HeaderAuth";

export default async function Header() {
  const session = await auth();

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
          <HeaderAuth session={session} />
        </div>
      </div>
    </header>
  );
}
