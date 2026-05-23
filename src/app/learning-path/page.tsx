import Link from "next/link";
import { phases, getTotalSessions } from "@/data/learning-path";

export default function LearningPathPage() {
  const totalSessions = getTotalSessions();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Learning Path</h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          7 Fase, {totalSessions} sesi — dari nol hingga mahir dalam DevOps
        </p>
      </div>

      <div className="space-y-4">
        {phases.map((phase, idx) => (
          <div
            key={phase.id}
            className="overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className={`h-1.5 bg-gradient-to-r ${phase.color}`} />
            <div className="p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-2xl dark:bg-zinc-800">
                  {phase.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300">
                      Fase {phase.id}
                    </span>
                    <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                      {phase.difficulty}
                    </span>
                    <span className="text-xs text-zinc-400">{phase.totalSessions} sesi</span>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {phase.title}
                  </h2>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{phase.subtitle}</p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{phase.description}</p>

                  <div className="mt-4 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <div className="grid gap-1 sm:grid-cols-2">
                      {phase.sessions.map((session) => (
                        <Link
                          key={session.sessionId}
                          href={`/learning-path/fase-${phase.id}/sesi-${session.sessionId}`}
                          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-zinc-200 text-xs text-zinc-400 dark:border-zinc-700 dark:text-zinc-500">
                            {session.sessionId}
                          </span>
                          <span className="truncate text-zinc-700 dark:text-zinc-300">
                            {session.title}
                          </span>
                          <span className="ml-auto shrink-0 text-xs text-zinc-400">{session.duration}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {idx < phases.length - 1 && (
                    <div className="mt-4 text-center">
                      <span className="text-zinc-300 dark:text-zinc-700">↓</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
