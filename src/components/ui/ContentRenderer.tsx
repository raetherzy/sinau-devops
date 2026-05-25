"use client";

interface ContentSection {
  heading: string;
  body: string;
  codeExample?: string;
  tips?: string;
}

interface SessionContent {
  intro: string;
  sections: ContentSection[];
  summary: string[];
}

export default function ContentRenderer({ content }: { content: SessionContent }) {
  return (
    <div className="prose prose-zinc max-w-none dark:prose-invert">
      <div className="rounded-xl border border-primary-200 bg-primary-50 p-5 dark:border-primary-800 dark:bg-primary-950">
        <p className="text-sm font-medium text-primary-700 dark:text-primary-300">
          Kenapa kamu perlu tahu ini?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {content.intro}
        </p>
      </div>

      {content.sections.map((section, idx) => (
        <div key={idx} className="mt-8">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            {section.heading}
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">
            {section.body}
          </p>

          {section.codeExample && (
            <div className="mt-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 dark:border-zinc-700">
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
                <span className="text-xs text-zinc-400">💻 Terminal / Kode</span>
                <button
                  onClick={() => navigator.clipboard.writeText(section.codeExample!)}
                  className="text-xs text-zinc-500 hover:text-zinc-300"
                >
                  📋 Copy
                </button>
              </div>
              <pre className="overflow-x-auto p-4">
                <code className="text-sm text-green-400 font-mono">{section.codeExample}</code>
              </pre>
            </div>
          )}

          {section.tips && (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-950">
              <p className="text-sm font-medium text-amber-700 dark:text-amber-300">
                💡 Tips
              </p>
              <p className="mt-1 text-sm text-amber-600 dark:text-amber-400">
                {section.tips}
              </p>
            </div>
          )}
        </div>
      ))}

      <div className="mt-8 rounded-xl border border-accent-200 bg-accent-50 p-5 dark:border-accent-800 dark:bg-accent-950">
        <p className="text-sm font-medium text-accent-700 dark:text-accent-300">
          📝 Ringkasan
        </p>
        <ul className="mt-2 space-y-1">
          {content.summary.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="mt-0.5 text-accent-500">✓</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
