"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { phases } from "@/data/learning-path";

interface ProgressData {
  completedSessions: { phaseId: number; sessionId: number; completedAt: string }[];
  quizResults: { phaseId: number; sessionId: number; score: number; totalQuestions: number }[];
  userProgress: { phaseId: number; sessionId: number; status: string }[];
}

export default function DashboardProgress() {
  const { data: session } = useSession();
  const [data, setData] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/progress")
      .then((r) => r.json())
      .then((d) => setData(d.error ? null : d))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [session]);

  const totalSessions = phases.reduce((s, p) => s + p.totalSessions, 0);
  const completedCount = data?.completedSessions?.length || 0;
  const progressPct = totalSessions > 0 ? Math.round((completedCount / totalSessions) * 100) : 0;

  const quizResults = data?.quizResults || [];
  const avgScore = quizResults.length > 0
    ? Math.round(quizResults.reduce((s, r) => s + (r.score / r.totalQuestions) * 100, 0) / quizResults.length)
    : 0;

  const lastSession = data?.completedSessions?.[data.completedSessions.length - 1];
  const lastPhase = lastSession ? phases.find((p) => p.id === lastSession.phaseId) : null;
  const lastSessionInPhase = lastPhase?.sessions.find((s) => s.sessionId === lastSession?.sessionId);

  function getPhaseCompletion(phaseId: number): number {
    if (!data) return 0;
    const total = phases.find((p) => p.id === phaseId)?.totalSessions || 1;
    const completed = data.completedSessions.filter((s) => s.phaseId === phaseId).length;
    return Math.round((completed / total) * 100);
  }

  if (!session?.user) {
    return (
      <div className="text-center py-12">
        <p className="text-zinc-500 dark:text-zinc-400">Silakan login untuk melihat progress.</p>
        <Link href="/login" className="mt-4 inline-block rounded-lg bg-primary-500 px-6 py-2 text-sm font-medium text-white">
          Masuk
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900 animate-pulse">
            <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-700 rounded" />
            <div className="h-8 w-12 bg-zinc-200 dark:bg-zinc-700 rounded mt-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Total Sesi</p>
          <p className="mt-1 text-3xl font-bold text-primary-500">{totalSessions}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Selesai</p>
          <p className="mt-1 text-3xl font-bold text-accent-500">{completedCount}</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Progress</p>
          <p className="mt-1 text-3xl font-bold text-primary-500">{progressPct}%</p>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-sm text-zinc-500">Rata-rata Kuis</p>
          <p className={`mt-1 text-3xl font-bold ${avgScore >= 80 ? "text-accent-500" : avgScore >= 60 ? "text-amber-500" : "text-zinc-400"}`}>
            {quizResults.length > 0 ? `${avgScore}%` : "-"}
          </p>
        </div>
      </div>

      {lastSession && lastPhase && lastSessionInPhase && (
        <div className="mt-6 rounded-xl border border-primary-200 bg-primary-50 p-5 dark:border-primary-800 dark:bg-primary-950">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Terakhir Belajar
              </p>
              <p className="mt-1 text-sm text-primary-600 dark:text-primary-400">
                Fase {lastPhase.id}: {lastSessionInPhase.title}
              </p>
            </div>
            <Link
              href={`/learning-path/${lastPhase.id}/${lastSessionInPhase.sessionId}`}
              className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
            >
              Lanjutkan →
            </Link>
          </div>
        </div>
      )}

      {completedCount === 0 && !lastSession && (
        <div className="mt-6 rounded-xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
          <p className="text-4xl">🚀</p>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Belum ada progress. Mulai sesi pertama yuk!
          </p>
          <Link
            href="/learning-path/1"
            className="mt-3 inline-block rounded-lg bg-primary-500 px-6 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
          >
            Mulai Fase 1 →
          </Link>
        </div>
      )}

      <h2 className="mt-10 text-xl font-bold text-zinc-900 dark:text-zinc-100">Progress per Fase</h2>
      <div className="mt-4 space-y-3">
        {phases.map((phase) => {
          const pct = getPhaseCompletion(phase.id);
          return (
            <div
              key={phase.id}
              className="flex items-center gap-4 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-2xl">{phase.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-zinc-400">Fase {phase.id}</span>
                  <span className="text-xs text-zinc-500">{phase.difficulty}</span>
                  {pct === 100 && <span className="text-xs text-accent-500 font-medium">✅ Lulus</span>}
                </div>
                <p className="font-medium text-zinc-900 dark:text-zinc-100">{phase.title}</p>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${phase.color} transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-zinc-400">
                  {data?.completedSessions.filter((s) => s.phaseId === phase.id).length || 0}/{phase.totalSessions} sesi
                </p>
              </div>
              <Link
                href={`/learning-path/${phase.id}`}
                className="shrink-0 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
              >
                Detail
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
