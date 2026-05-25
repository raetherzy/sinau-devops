import Link from "next/link";
import { getSession, phases } from "@/data/learning-path";
import { getSessionContent } from "@/data/session-content";
import { getQuiz } from "@/data/quiz-data";
import { notFound } from "next/navigation";
import ContentRenderer from "@/components/ui/ContentRenderer";
import AIChat from "@/components/ai/AIChat";

export default async function SessionPage({
  params,
}: {
  params: Promise<{ phaseId: string; sessionId: string }>;
}) {
  const { phaseId, sessionId } = await params;
  const pid = Number(phaseId);
  const sid = Number(sessionId);

  const phase = phases.find((p) => p.id === pid);
  const session = getSession(pid, sid);

  if (!phase || !session) {
    notFound();
  }

  const content = getSessionContent(pid, sid);
  const quiz = getQuiz(pid, sid);
  const currentIdx = phase.sessions.findIndex((s) => s.sessionId === sid);
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
          href={`/learning-path/${phase.id}`}
          className="hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Fase {phase.id}: {phase.title}
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">
          Sesi {phase.id}.{session.sessionId}
        </span>
      </nav>

      <div className="mb-2 flex items-center gap-2">
        <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950 dark:text-primary-300">
          Fase {phase.id}
        </span>
        <span className="text-sm text-zinc-400">{session.duration}</span>
      </div>

      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Sesi {phase.id}.{session.sessionId}: {session.title}
      </h1>
      <p className="mt-3 text-lg text-zinc-500 dark:text-zinc-400">
        {session.description}
      </p>

      <div className="mt-10">
        {content ? (
          <ContentRenderer content={content} />
        ) : (
          <div className="rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
            <p className="text-4xl">📝</p>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400">
              Konten untuk sesi ini sedang disiapkan
            </p>
          </div>
        )}
      </div>

      {quiz && (
        <div className="mt-6 flex justify-center">
          <Link
            href={`/learning-path/${phase.id}/${session.sessionId}/quiz`}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/25 hover:bg-amber-600 transition-colors"
          >
            📝 Kerjakan Kuis
          </Link>
        </div>
      )}

      <div className="mt-10 flex items-center justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
        {prevSession ? (
          <Link
            href={`/learning-path/${phase.id}/${prevSession.sessionId}`}
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            ← {prevSession.title}
          </Link>
        ) : (
          <div />
        )}
        {nextSession ? (
          <Link
            href={`/learning-path/${phase.id}/${nextSession.sessionId}`}
            className="text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            {nextSession.title} →
          </Link>
        ) : (
          phase.id < 7 ? (
            <Link
              href={`/learning-path/${phase.id + 1}`}
              className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Lanjut ke Fase {phase.id + 1} →
            </Link>
          ) : (
            <div />
          )
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
              href={`/learning-path/${phase.id}/${s.sessionId}`}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                s.sessionId === sid
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

      <AIChat sessionTitle={session.title} sessionDescription={session.description} />
    </div>
  );
}
