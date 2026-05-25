"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatProps {
  sessionTitle: string;
  sessionDescription: string;
}

export default function AIChat({ sessionTitle, sessionDescription }: AIChatProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated,
          sessionTitle,
          sessionDescription,
        }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No stream");

      let assistantContent = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              assistantContent += parsed.text;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = {
                  role: "assistant",
                  content: assistantContent,
                };
                return copy;
              });
            } catch {
              // partial JSON, skip
            }
          }
        }
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Maaf, AI tutor sedang tidak tersedia. Coba lagi nanti ya! 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all"
        title="Tanya AI Tutor"
      >
        <span className="text-xl">{open ? "✕" : "🤖"}</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[500px] w-[380px] max-w-[calc(100vw-2rem)] flex-col rounded-xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-700 dark:bg-zinc-900">
          <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-700">
            <div className="flex items-center gap-2">
              <span className="text-lg">🤖</span>
              <div>
                <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Sinau AI Tutor</p>
                <p className="text-xs text-zinc-400">Tanya apa saja tentang materi ini</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <p className="text-4xl">🤖</p>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    Hai! Aku Sinau, mentor DevOps-mu.
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">
                    Tanyakan apapun tentang materi sesi ini ya!
                  </p>
                </div>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary-500 text-white"
                      : "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                  }`}
                >
                  {msg.content || (loading && msg.role === "assistant" ? "..." : "")}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role !== "assistant" && (
              <div className="flex justify-start">
                <div className="rounded-xl bg-zinc-100 px-4 py-2.5 text-sm text-zinc-400 dark:bg-zinc-800">
                  Sinau sedang mengetik...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-zinc-200 p-3 dark:border-zinc-700">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Tanyakan sesuatu..."
                disabled={loading}
                className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                className="rounded-lg bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 disabled:opacity-50 transition-colors"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
