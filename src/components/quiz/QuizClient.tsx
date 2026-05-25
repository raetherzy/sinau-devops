"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import type { QuizData, QuizQuestion } from "@/data/quiz-data";

interface QuizClientProps {
  quiz: QuizData;
  phaseId: number;
  sessionId: number;
}

export default function QuizClient({ quiz, phaseId, sessionId }: QuizClientProps) {
  const { data: session } = useSession();
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean | "pending">>({});
  const [score, setScore] = useState(0);

  function setAnswer(qId: string, value: string | string[]) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function gradeMCQ(q: QuizQuestion): boolean {
    return answers[q.id] === q.correctAnswer;
  }

  function gradeTF(q: QuizQuestion): boolean {
    return answers[q.id] === q.correctAnswer;
  }

  function gradeFillBlank(q: QuizQuestion): boolean {
    const answer = (answers[q.id] as string || "").trim().toLowerCase();
    const correct = (q.correctAnswer as string).toLowerCase();
    return answer === correct;
  }

  function gradeTroubleshooting(q: QuizQuestion): boolean {
    const answer = (answers[q.id] as string || "").trim().toLowerCase();
    const correct = (q.correctAnswer as string).toLowerCase();
    return answer.includes(correct) || answer === correct;
  }

  async function handleSubmit() {
    setSubmitted(true);

    let correct = 0;
    const newResults: Record<string, boolean | "pending"> = {};
    let totalEssay = 0;

    for (const q of quiz.questions) {
      if (q.type === "essay") {
        newResults[q.id] = "pending";
        totalEssay++;
        continue;
      }
      const answer = answers[q.id];
      if (!answer) {
        newResults[q.id] = false;
        continue;
      }

      let isCorrect = false;
      switch (q.type) {
        case "multiple_choice":
          isCorrect = gradeMCQ(q);
          break;
        case "true_false":
          isCorrect = gradeTF(q);
          break;
        case "fill_blank":
          isCorrect = gradeFillBlank(q);
          break;
        case "troubleshooting":
          isCorrect = gradeTroubleshooting(q);
          break;
      }
      newResults[q.id] = isCorrect;
      if (isCorrect) correct++;
    }

    if (totalEssay > 0) {
      for (const q of quiz.questions) {
        if (q.type !== "essay") continue;
        try {
          const res = await fetch("/api/quiz/grade-essay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              question: q.question,
              answer: answers[q.id] || "",
            }),
          });

          if (res.ok) {
            const data = await res.json();
            newResults[q.id] = data.passed;
            if (data.passed) correct++;
          } else {
            newResults[q.id] = false;
          }
        } catch {
          newResults[q.id] = false;
        }
      }
    }

    setResults(newResults);
    setScore(correct);

    if (session?.user) {
      try {
        await fetch("/api/progress/save-quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phaseId,
            sessionId,
            score: correct,
            totalQuestions: total,
            answers,
          }),
        });
      } catch {
        // ignore save error
      }
    }
  }

  function getScoreColor(s: number, total: number) {
    const pct = (s / total) * 100;
    if (pct >= 80) return "text-accent-500";
    if (pct >= 60) return "text-amber-500";
    return "text-red-500";
  }

  function getScoreFeedback(pct: number) {
    if (pct >= 80) return { emoji: "🎉", text: "Lulus! Hebat, lanjut ke sesi berikutnya.", bg: "border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-950", textColor: "text-accent-700 dark:text-accent-300" };
    if (pct >= 60) return { emoji: "📖", text: "Cukup baik. Review materi yang masih kurang dan coba lagi.", bg: "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950", textColor: "text-amber-700 dark:text-amber-300" };
    return { emoji: "🔄", text: "Perlu review ulang materi sebelum lanjut. Jangan menyerah!", bg: "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950", textColor: "text-red-700 dark:text-red-300" };
  }

  const total = quiz.questions.length;
  const pct = Math.round((score / total) * 100);
  const feedback = getScoreFeedback(pct);

  function renderQuestion(q: QuizQuestion, idx: number) {
    const isCorrect = results[q.id];
    const showResult = submitted && isCorrect !== "pending";

    return (
      <div
        key={q.id}
        className={`rounded-xl border p-5 transition-colors ${
          showResult
            ? isCorrect
              ? "border-accent-200 bg-accent-50/50 dark:border-accent-800 dark:bg-accent-950/30"
              : "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/30"
            : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
        }`}
      >
        <div className="flex items-start gap-3">
          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium ${
            showResult
              ? isCorrect
                ? "bg-accent-500 text-white"
                : "bg-red-500 text-white"
              : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          }`}>
            {showResult ? (isCorrect ? "✓" : "✗") : idx + 1}
          </span>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-zinc-900 dark:text-zinc-100">{q.question}</p>

            {q.codeSnippet && (
              <pre className="mt-3 overflow-x-auto rounded-lg bg-zinc-950 p-3">
                <code className="text-sm text-green-400">{q.codeSnippet}</code>
              </pre>
            )}

            <div className="mt-3">
              {q.type === "multiple_choice" && q.options && (
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const selected = answers[q.id] === opt;
                    const isCorrectOpt = q.correctAnswer === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswer(q.id, opt)}
                        disabled={submitted}
                        className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                          submitted
                            ? isCorrectOpt
                              ? "border-accent-500 bg-accent-50 text-accent-700 dark:border-accent-600 dark:bg-accent-950 dark:text-accent-300"
                              : selected
                              ? "border-red-500 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-950 dark:text-red-300"
                              : "border-zinc-200 text-zinc-500 dark:border-zinc-700 dark:text-zinc-500"
                            : selected
                            ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-600 dark:bg-primary-950 dark:text-primary-300"
                            : "border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === "true_false" && (
                <div className="flex gap-3">
                  {["true", "false"].map((val) => {
                    const selected = answers[q.id] === val;
                    const isCorrectVal = q.correctAnswer === val;
                    return (
                      <button
                        key={val}
                        onClick={() => setAnswer(q.id, val)}
                        disabled={submitted}
                        className={`flex-1 rounded-lg border px-4 py-2.5 text-center text-sm font-medium transition-colors ${
                          submitted
                            ? isCorrectVal
                              ? "border-accent-500 bg-accent-50 text-accent-700 dark:border-accent-600 dark:bg-accent-950 dark:text-accent-300"
                              : selected
                              ? "border-red-500 bg-red-50 text-red-700 dark:border-red-600 dark:bg-red-950 dark:text-red-300"
                              : "border-zinc-200 text-zinc-500 dark:border-zinc-700 dark:text-zinc-500"
                            : selected
                            ? "border-primary-500 bg-primary-50 text-primary-700 dark:border-primary-600 dark:bg-primary-950 dark:text-primary-300"
                            : "border-zinc-200 text-zinc-700 hover:border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600"
                        }`}
                      >
                        {val === "true" ? "✅ Benar" : "❌ Salah"}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === "essay" && (
                <div>
                  <textarea
                    value={(answers[q.id] as string) || ""}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    disabled={submitted}
                    rows={4}
                    placeholder="Tulis jawabanmu di sini (2-5 kalimat)..."
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                  />
                  {submitted && isCorrect === "pending" && (
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      ⏳ AI sedang menilai jawaban esai...
                    </p>
                  )}
                </div>
              )}

              {q.type === "fill_blank" && (
                <div>
                  <input
                    type="text"
                    value={(answers[q.id] as string) || ""}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    disabled={submitted}
                    placeholder="Ketik jawaban..."
                    className="w-full max-w-xs rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none font-mono dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                  />
                  {submitted && !isCorrect && q.correctAnswer && (
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      Jawaban benar: <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-accent-600 font-mono dark:bg-zinc-800 dark:text-accent-400">{q.correctAnswer}</code>
                    </p>
                  )}
                </div>
              )}

              {q.type === "troubleshooting" && (
                <div>
                  <textarea
                    value={(answers[q.id] as string) || ""}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    disabled={submitted}
                    rows={3}
                    placeholder="Jelaskan penyebab dan solusinya..."
                    className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
                  />
                  {submitted && !isCorrect && q.correctAnswer && (
                    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                      Solusi: <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-accent-600 font-mono dark:bg-zinc-800 dark:text-accent-400">{q.correctAnswer}</code>
                    </p>
                  )}
                </div>
              )}
            </div>

            {showResult && q.explanation && (
              <div className={`mt-3 rounded-lg border p-3 ${
                isCorrect
                  ? "border-accent-200 bg-accent-50 dark:border-accent-800 dark:bg-accent-950"
                  : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950"
              }`}>
                <p className={`text-xs font-medium ${isCorrect ? "text-accent-700 dark:text-accent-300" : "text-red-700 dark:text-red-300"}`}>
                  {isCorrect ? "✅ Benar! " : "❌ "}
                </p>
                <p className={`mt-1 text-sm ${isCorrect ? "text-accent-600 dark:text-accent-400" : "text-red-600 dark:text-red-400"}`}>
                  {q.explanation}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {!submitted && (
        <div className="rounded-xl border border-primary-200 bg-primary-50 p-4 dark:border-primary-800 dark:bg-primary-950 mb-6">
          <p className="text-sm text-primary-700 dark:text-primary-300">
            {quiz.questions.length} soal • Passing score: {quiz.passingScore}%
          </p>
        </div>
      )}

      {quiz.questions.map((q, idx) => renderQuestion(q, idx))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={quiz.questions.some((q) => !answers[q.id] && q.type !== "essay")}
          className="w-full rounded-xl bg-primary-500 px-6 py-3.5 text-base font-semibold text-white hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Kumpulkan Jawaban
        </button>
      ) : (
        <div className={`rounded-xl border p-6 ${feedback.bg}`}>
          <div className="text-center">
            <p className="text-4xl">{feedback.emoji}</p>
            <p className={`mt-3 text-2xl font-bold ${getScoreColor(score, total)}`}>
              {score}/{total} ({pct}%)
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              KKM: {quiz.passingScore}%
            </p>
            <p className={`mt-3 font-medium ${feedback.textColor}`}>
              {feedback.text}
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <Link
                href={`/learning-path/${phaseId}/${sessionId}`}
                className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
              >
                ← Kembali ke materi
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setResults({});
                  setScore(0);
                  setAnswers({});
                }}
                className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 transition-colors"
              >
                Coba Lagi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
