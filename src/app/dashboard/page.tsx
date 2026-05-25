import Link from "next/link";
import { phases } from "@/data/learning-path";

export default async function DashboardPage() {
  const totalSessions = phases.reduce((s, p) => s + p.totalSessions, 0);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Dashboard</h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Pantau progress perjalanan belajar DevOps-mu
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Total Sesi</p>
          <p className="mt-1 text-3xl font-bold text-primary-500">{totalSessions}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Selesai</p>
          <p className="mt-1 text-3xl font-bold text-accent-500">0</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Sedang Berjalan</p>
          <p className="mt-1 text-3xl font-bold text-amber-500">0</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Progress</p>
          <p className="mt-1 text-3xl font-bold text-zinc-400">0%</p>
        </div>
      </div>

      <h2 className="mt-10 text-xl font-bold text-zinc-900 dark:text-zinc-100">Progress per Fase</h2>
      <div className="mt-4 space-y-3">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-2xl">{phase.icon}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-400">Fase {phase.id}</span>
                <span className="text-xs text-zinc-500">{phase.difficulty}</span>
              </div>
              <p className="font-medium text-zinc-900 dark:text-zinc-100">{phase.title}</p>
              <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${phase.color}`}
                  style={{ width: "0%" }}
                />
              </div>
              <p className="mt-1 text-xs text-zinc-400">0/{phase.totalSessions} sesi</p>
            </div>
            <Link
              href={`/learning-path/${phase.id}`}
              className="shrink-0 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
