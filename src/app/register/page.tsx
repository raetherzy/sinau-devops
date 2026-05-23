"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      toast.error(data.error || "Gagal mendaftar");
    } else {
      toast.success("Berhasil daftar! Silakan login.");
      router.push("/login");
    }
  }

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md items-center justify-center px-4">
      <div className="w-full rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-700 dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Daftar di SinauDevOps</h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Mulai perjalanan DevOps dari nol sampai mahir
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
              placeholder="Nama kamu"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
              placeholder="kamu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-500"
              placeholder="Minimal 6 karakter"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary-600 disabled:opacity-50 transition-colors mt-2"
          >
            {loading ? "Memproses..." : "Daftar"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-primary-500 hover:underline font-medium">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
