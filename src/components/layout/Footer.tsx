import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-primary-500 text-white text-xs font-bold">
              SD
            </span>
            <span>
              SinauDevOps &mdash; From Zero to Hero
            </span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <Link href="/learning-path" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Learning Path
            </Link>
            <Link href="/dashboard" className="hover:text-zinc-900 dark:hover:text-zinc-100">
              Dashboard
            </Link>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} SinauDevOps. Dibuat untuk belajar DevOps.
          </p>
        </div>
      </div>
    </footer>
  );
}
