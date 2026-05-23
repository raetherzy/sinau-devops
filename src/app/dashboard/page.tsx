import { auth } from "@/auth";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 text-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-2 text-zinc-500">Silakan login untuk melihat dashboard.</p>
        <Link href="/login" className="mt-4 inline-block rounded-lg bg-primary-500 px-4 py-2 text-sm text-white">
          Masuk
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold">Halo, {session.user.name || "DevOps Learner"}!</h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Selamat datang di dashboard SinauDevOps. Progress belajarmu akan muncul di sini.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card p-6 dark:bg-zinc-900 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Sesi Selesai</p>
          <p className="mt-1 text-3xl font-bold text-primary-500">0</p>
        </div>
        <div className="card p-6 dark:bg-zinc-900 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Fase Aktif</p>
          <p className="mt-1 text-3xl font-bold text-accent-500">Fase 1</p>
        </div>
        <div className="card p-6 dark:bg-zinc-900 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Skor Rata-rata Kuis</p>
          <p className="mt-1 text-3xl font-bold text-amber-500">-</p>
        </div>
      </div>

      <div className="mt-8">
        <Link
          href="/learning-path"
          className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
        >
          Mulai Belajar &rarr;
        </Link>
      </div>
    </div>
  );
}
