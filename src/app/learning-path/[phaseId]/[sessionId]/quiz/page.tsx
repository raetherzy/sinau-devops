import Link from "next/link";
import { getSession, phases } from "@/data/learning-path";
import { getQuiz } from "@/data/quiz-data";
import { notFound } from "next/navigation";
import QuizClient from "@/components/quiz/QuizClient";

export default async function QuizPage({
  params,
}: {
  params: Promise<{ phaseId: string; sessionId: string }>;
}) {
  const { phaseId, sessionId } = await params;
  const phase = phases.find((p) => p.id === Number(phaseId));
  const session = getSession(Number(phaseId), Number(sessionId));
  const quiz = getQuiz(Number(phaseId), Number(sessionId));

  if (!phase || !session) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/learning-path" className="hover:text-zinc-900 dark:hover:text-zinc-100">
          Learning Path
        </Link>
        <span>/</span>
        <Link
          href={`/learning-path/${phase.id}`}
          className="hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Fase {phase.id}
        </Link>
        <span>/</span>
        <Link
          href={`/learning-path/${phase.id}/${session.sessionId}`}
          className="hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          Sesi {phase.id}.{session.sessionId}
        </Link>
        <span>/</span>
        <span className="text-zinc-900 dark:text-zinc-100">Kuis</span>
      </nav>

      <div className="mb-8">
        <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-950 dark:text-amber-300">
          Kuis
        </span>
        <h1 className="mt-3 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {quiz ? quiz.title : `Kuis: ${session.title}`}
        </h1>
      </div>

      {quiz ? (
        <QuizClient quiz={quiz} phaseId={phase.id} sessionId={session.sessionId} />
      ) : (
        <div className="rounded-xl border border-dashed border-zinc-300 p-12 text-center dark:border-zinc-700">
          <p className="text-4xl">📝</p>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Soal kuis untuk sesi ini sedang disiapkan
          </p>
          <Link
            href={`/learning-path/${phase.id}/${session.sessionId}`}
            className="mt-4 inline-block text-sm font-medium text-primary-500 hover:underline"
          >
            ← Kembali ke materi
          </Link>
        </div>
      )}

      <div className="mt-8 flex justify-between border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <Link
          href={`/learning-path/${phase.id}/${session.sessionId}`}
          className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← Kembali ke materi
        </Link>
      </div>
    </div>
  );
}
