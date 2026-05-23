import Link from "next/link";
import { getSession } from "@/data/learning-path";
import { phases } from "@/data/learning-path";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return phases.flatMap((phase) =>
    phase.sessions.map((session) => ({
      phaseId: String(phase.id),
      sessionId: String(session.sessionId),
    }))
  );
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ phaseId: string; sessionId: string }>;
}) {
  const { phaseId, sessionId } = await params;
  const phase = phases.find((p) => p.id === Number(phaseId));
  const session = getSession(Number(phaseId), Number(sessionId));

  if (!phase || !session) {
    notFound();
  }

  const currentIdx = phase.sessions.findIndex((s) => s.sessionId === Number(sessionId));
  const prevSession = currentIdx > 0 ? phase.sessions[currentIdx - 1] : null;
  const nextSession = currentIdx < phase.sessions.length - 1 ? phase.sessions[currentIdx + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/learning-path" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Learning Path
        </Link>
        <span>/</span>
        <Link
          href={`/learning-path/fase-${phase.id}`}
          className="hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Fase {phase.id}: {phase.title}
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">
          Sesi {phase.id}.{session.sessionId}
        </span>
      </nav>

      <div className="mb-2">
        <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300">
          Fase {phase.id}
        </span>
        <span className="ml-2 text-sm text-zinc-400">{session.duration}</span>
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {session.title}
      </h1>
      <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
        {session.description}
      </p>

      <div className="mt-10 rounded-xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
        <p className="text-zinc-400 dark:text-zinc-500">
          📝 Konten pembelajaran akan hadir di fase berikutnya
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
        {prevSession ? (
          <Link
            href={`/learning-path/fase-${phase.id}/sesi-${prevSession.sessionId}`}
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← {prevSession.title}
          </Link>
        ) : (
          <div />
        )}
        {nextSession ? (
          <Link
            href={`/learning-path/fase-${phase.id}/sesi-${nextSession.sessionId}`}
            className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            {nextSession.title} →
          </Link>
        ) : (
          <div />
        )}
      </div>

      <div className="mt-8 rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          Semua sesi di {phase.title}
        </h3>
        <div className="mt-3 space-y-1">
          {phase.sessions.map((s) => (
            <Link
              key={s.sessionId}
              href={`/learning-path/fase-${phase.id}/sesi-${s.sessionId}`}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                s.sessionId === Number(sessionId)
                  ? "bg-primary-50 text-primary-700 dark:bg-primary-950 dark:text-primary-300"
                  : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded border border-zinc-200 text-xs dark:border-zinc-700">
                {s.sessionId}
              </span>
              {s.title}
              <span className="ml-auto text-xs text-zinc-400">{s.duration}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
