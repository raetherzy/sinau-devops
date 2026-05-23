import Link from "next/link";
import { phases } from "@/data/learning-path";
import { notFound } from "next/navigation";

export default async function PhaseDetailPage({
  params,
}: {
  params: Promise<{ phaseId: string }>;
}) {
  const { phaseId } = await params;
  const phase = phases.find((p) => p.id === Number(phaseId));

  if (!phase) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/learning-path" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Learning Path
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">
          Fase {phase.id}: {phase.title}
        </span>
      </nav>

      <div className={`inline-block h-2 w-16 rounded-full bg-gradient-to-r ${phase.color}`} />

      <div className="mt-4 flex items-center gap-2">
        <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300">
          Fase {phase.id}
        </span>
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          {phase.difficulty}
        </span>
        <span className="text-xs text-zinc-400">{phase.totalSessions} sesi</span>
      </div>

      <h1 className="mt-4 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {phase.title}
      </h1>
      <p className="mt-1 text-lg text-zinc-500 dark:text-zinc-400">{phase.subtitle}</p>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">{phase.description}</p>

      <div className="mt-10">
        <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Daftar Sesi</h2>
        <div className="mt-4 space-y-2">
          {phase.sessions.map((session, idx) => (
            <Link
              key={session.sessionId}
              href={`/learning-path/fase-${phase.id}/sesi-${session.sessionId}`}
              className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition-colors hover:border-primary-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-primary-700 dark:hover:bg-zinc-800"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-medium ${
                  idx < phase.sessions.length - 1
                    ? "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
                    : "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                }`}
              >
                {idx < phase.sessions.length - 1 ? session.sessionId : "Q"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-zinc-900 dark:text-zinc-100">
                  {session.title}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {session.description}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <span className="text-xs text-zinc-400">{session.duration}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
