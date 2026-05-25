# Timeline Pengembangan SinauDevOps

Proyek: **SinauDevOps** — Platform Pembelajaran DevOps Berbasis AI
Dimulai: 23 Mei 2026

---

## Fase 0: Project Initialization & Core Setup
**Status:** ✅ Selesai
**Tanggal:** 23 Mei 2026

### Yang sudah dikerjakan:
- [x] Inisialisasi project Next.js 16 + TypeScript + Tailwind CSS v4
- [x] Setup struktur folder project (`src/components/`, `src/lib/`, `src/types/`, `src/data/`, `src/hooks/`)
- [x] Setup ESLint, `.gitignore`, `.env.example`
- [x] Setup Prisma ORM v7 dengan MySQL (database schema: User, Account, Session, QuizResult, Note, Progress)
- [x] Konfigurasi `prisma.config.ts` untuk Prisma v7
- [x] Setup Prisma Client singleton (`src/lib/prisma.ts`)
- [x] Definisi TypeScript types (`src/types/index.ts`)
- [x] Tema kustom Tailwind CSS dengan dark mode support
- [x] Komponen layout: Header, Footer, ThemeToggle
- [x] Halaman Landing Page dengan: Hero section, Features, Learning Path preview (7 fase), CTA
- [x] Placeholder pages: `/learning-path`, `/dashboard`, `/login`
- [x] Database schema mencakup: User, Account, Session, UserProgress, CompletedSession, QuizResult, Note

### Tech Stack yang digunakan:
- **Frontend:** Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling:** Tailwind CSS v4
- **Database:** MySQL 8.0 + Prisma ORM v6
- **Auth:** NextAuth.js v5 (Beta)
- **Dependencies tambahan:** bcryptjs, react-hot-toast

---

## Fase 1: Authentication & Database
**Status:** ✅ Selesai
**Tanggal:** 23 Mei 2026

### Yang sudah dikerjakan:
- [x] Setup NextAuth.js v5 config (`src/auth.ts`) dengan Prisma adapter
- [x] Credentials provider (email + password) dengan bcryptjs
- [x] JWT session strategy + session callback (user ID)
- [x] API route handler (`/api/auth/[...nextauth]`)
- [x] Protected routes middleware untuk `/dashboard`
- [x] Halaman Login dengan form email/password + toast notification
- [x] Halaman Register dengan form name/email/password + validasi
- [x] API register (`/api/register`) — hash password, cek duplikasi email
- [x] Header menampilkan status login (avatar + tombol logout)
- [x] Dashboard page menampilkan data user yang login
- [x] `Toaster` (react-hot-toast) di root layout
- [x] Downgrade Prisma 7 → 6 (lebih stabil, tanpa adapter complexity)

### Notes:
- OAuth (Google/GitHub) belum di-setup, bisa ditambahkan nanti
- `learning-path` tidak diproteksi (bisa diakses tanpa login)
- Password di-hash dengan bcrypt 12 rounds

---

## Fase 2: Dashboard & Learning Path UI
**Status:** ✅ Selesai
**Tanggal:** 23 Mei 2026

### Yang sudah dikerjakan:
- [x] Data learning path lengkap (`src/data/learning-path.ts`) — 7 fase, 63 sesi sesuai PRD
- [x] Halaman Learning Path (`/learning-path`) — semua fase dan sesi ditampilkan sekaligus
- [x] Halaman detail Fase (`/learning-path/fase-[id]`) — daftar sesi per fase dengan navigasi
- [x] Halaman detail Sesi (`/learning-path/fase-[id]/sesi-[id]`) — breadcrumb, metadata, placeholder konten, navigasi prev/next
- [x] Dashboard page enhanced — 4 stat cards (total sesi, selesai, progress), progress bar per fase
- [x] Progress bar visual per fase dengan warna gradient
- [x] Breadcrumb navigasi di halaman fase dan sesi
- [x] Link "Detail" per fase di dashboard
- [x] Static params generation untuk semua halaman sesi (SSG ready)

---

## Fase 3: Session Content & AI Tutor
**Status:** ✅ Selesai
**Tanggal:** 25 Mei 2026

### Yang sudah dikerjakan:
- [x] Install Anthropic SDK (`@anthropic-ai/sdk`)
- [x] AI system prompt sesuai panduan PRD bab 10 — persona "Sinau", Bahasa Indonesia santai, analogi
- [x] AI Chat API route (`/api/chat`) — streaming response dari Claude Sonnet 4
- [x] Komponen AIChat — floating chat panel, streaming text, dark mode, tombol toggle
- [x] Komponen ContentRenderer — render konten dengan: hook intro, sections, code blocks (copy), tips, ringkasan
- [x] Konten pembelajaran Fase 1 (`src/data/session-content.ts`) — 7 sesi lengkap:
  - Sesi 1.1: Apa itu DevOps?
  - Sesi 1.2: DevOps vs Traditional IT
  - Sesi 1.3: DevOps Culture (CALMS)
  - Sesi 1.4: Software Development Lifecycle (SDLC)
  - Sesi 1.5: Pengenalan Linux untuk DevOps
  - Sesi 1.6: Dasar-dasar Networking
  - Sesi 1.7: Version Control dengan Git
  - Sesi 1.8: Kuis & Recap Fase 1
- [x] Update halaman Sesi — konten asli + AI Chat panel + navigasi lanjut ke Fase berikutnya

### Notes:
- AI Chat membutuhkan `ANTHROPIC_API_KEY` di `.env` untuk berfungsi
- Konten Fase 2-7 masih placeholder (akan diisi bertahap)
- Model: claude-sonnet-4-20250514

---

## Fase 4: Quiz System
**Status:** ⏳ Belum dimulai

---

## Fase 5: Progress Tracking & Polish
**Status:** ⏳ Belum dimulai

---
*Last updated: 23 Mei 2026*
