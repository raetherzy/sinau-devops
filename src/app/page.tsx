import Link from "next/link";

const phases = [
  {
    id: 1,
    title: "Pondasi DevOps",
    subtitle: "Konsep & Mindset",
    description: "Memahami apa itu DevOps, kenapa penting, dan dasar-dasar lingkungan teknis yang dibutuhkan.",
    icon: "🧱",
    sessions: 8,
    difficulty: "Dasar",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "Fondasi Teknis",
    subtitle: "Linux, Scripting & Jaringan",
    description: "Mahir menggunakan Linux, menulis script otomasi, dan memahami jaringan secara mendalam.",
    icon: "💻",
    sessions: 8,
    difficulty: "Dasar-Menengah",
    color: "from-cyan-500 to-teal-500",
  },
  {
    id: 3,
    title: "Containerization",
    subtitle: "Docker & Registry",
    description: "Menggunakan Docker untuk packaging, menjalankan, dan mendistribusikan aplikasi.",
    icon: "📦",
    sessions: 9,
    difficulty: "Menengah",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 4,
    title: "CI/CD Pipeline",
    subtitle: "Automation",
    description: "Membuat pipeline otomatis untuk build, test, dan deploy aplikasi.",
    icon: "🔄",
    sessions: 9,
    difficulty: "Menengah",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "IaC & Cloud",
    subtitle: "Infrastructure as Code",
    description: "Mendefinisikan infrastruktur melalui kode dan mengelola resource cloud secara otomatis.",
    icon: "☁️",
    sessions: 9,
    difficulty: "Menengah-Mahir",
    color: "from-purple-500 to-violet-600",
  },
  {
    id: 6,
    title: "Kubernetes",
    subtitle: "Container Orchestration",
    description: "Mengelola container dalam skala besar menggunakan Kubernetes.",
    icon: "⚙️",
    sessions: 10,
    difficulty: "Mahir",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 7,
    title: "Observability & Security",
    subtitle: "Expert Practices",
    description: "Monitoring, keamanan infrastruktur, dan best practice DevOps di production.",
    icon: "🔭",
    sessions: 10,
    difficulty: "Mahir",
    color: "from-emerald-500 to-green-600",
  },
];

const features = [
  {
    icon: "🤖",
    title: "AI Tutor",
    desc: "Belajar dengan bantuan AI yang menjelaskan materi dalam bahasa Indonesia yang santai dan mudah dipahami.",
  },
  {
    icon: "🗺️",
    title: "Learning Path Terstruktur",
    desc: "Jalur belajar yang jelas dari Dasar hingga Mahir, dengan 7 fase dan 60+ sesi pembelajaran.",
  },
  {
    icon: "✅",
    title: "Kuis Interaktif",
    desc: "Uji pemahaman di setiap akhir sesi dengan berbagai tipe soal dan feedback dari AI.",
  },
  {
    icon: "📊",
    title: "Progress Tracker",
    desc: "Pantau perkembangan belajarmu dengan dashboard visual yang informatif.",
  },
  {
    icon: "📝",
    title: "Catatan Pribadi",
    desc: "Simpan catatan dari setiap sesi belajar untuk review nanti.",
  },
  {
    icon: "💡",
    title: "Contoh Praktis",
    desc: "Setiap sesi dilengkapi contoh perintah CLI, konfigurasi, dan skenario nyata.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-300">
              🚀 From Zero to Hero
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-100">
              Belajar DevOps{" "}
              <span className="gradient-text">dari Nol sampai Mahir</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              SinauDevOps adalah platform belajar DevOps berbahasa Indonesia yang didukung AI.
              Materi disusun terstruktur dari dasar hingga expert, disajikan dengan bahasa santai
              seperti belajar dari mentor pribadi.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/learning-path"
                className="rounded-xl bg-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 transition-colors"
              >
                Mulai Belajar Sekarang
              </Link>
              <Link
                href="/learning-path"
                className="rounded-xl border border-zinc-300 px-8 py-3.5 text-base font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors"
              >
                Lihat Learning Path
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Kenapa Belajar di SinauDevOps?
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Dibangun dengan prinsip belajar yang efektif dan menyenangkan
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card p-6 dark:bg-zinc-900 dark:border-zinc-800"
              >
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Learning Path Lengkap
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              7 Fase, 60+ sesi, dari nol hingga mahir dalam DevOps
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {phases.map((phase) => (
              <Link
                key={phase.id}
                href={`/learning-path/${phase.id}`}
                className="card group overflow-hidden dark:bg-zinc-900 dark:border-zinc-800"
              >
                <div className={`h-2 bg-gradient-to-r ${phase.color}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{phase.icon}</span>
                    <div>
                      <span className="text-xs font-medium text-primary-500 uppercase">
                        Fase {phase.id}
                      </span>
                      <span className="ml-2 rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                        {phase.difficulty}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-500 transition-colors">
                    {phase.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{phase.subtitle}</p>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {phase.description}
                  </p>
                  <p className="mt-3 text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    {phase.sessions} sesi
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">Siap Mulai Belajar?</h2>
          <p className="mt-3 text-lg text-blue-100">
            Tidak perlu pengalaman sebelumnya. Mulai dari nol, dibimbing sampai mahir.
          </p>
          <Link
            href="/learning-path"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-primary-600 hover:bg-blue-50 transition-colors"
          >
            Mulai Sekarang — Gratis
          </Link>
        </div>
      </section>
    </>
  );
}
