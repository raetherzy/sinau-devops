"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

interface CompleteButtonProps {
  phaseId: number;
  sessionId: number;
}

export default function CompleteButton({ phaseId, sessionId }: CompleteButtonProps) {
  const { data: session } = useSession();
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!session?.user) return null;

  async function handleComplete() {
    setLoading(true);
    try {
      await fetch("/api/progress/complete-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phaseId, sessionId }),
      });
      setSaved(true);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  if (saved) {
    return (
      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-xl border border-accent-200 bg-accent-50 px-6 py-3 text-base font-semibold text-accent-700 dark:border-accent-800 dark:bg-accent-950 dark:text-accent-300">
          ✅ Sesi Selesai
        </span>
      </div>
    );
  }

  return (
    <div className="mt-6 flex justify-center">
      <button
        onClick={handleComplete}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-xl border-2 border-dashed border-primary-300 px-6 py-3 text-base font-semibold text-primary-600 hover:border-primary-500 hover:bg-primary-50 disabled:opacity-50 dark:border-primary-700 dark:text-primary-400 dark:hover:bg-primary-950 transition-colors"
      >
        {loading ? "Menyimpan..." : "✅ Tandai Selesai"}
      </button>
    </div>
  );
}
