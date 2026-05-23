import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SinauDevOps — Belajar DevOps dari Nol sampai Mahir",
  description:
    "Platform belajar DevOps berbahasa Indonesia dengan bantuan AI. Dari nol sampai mahir secara terstruktur dan menyenangkan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              var theme = localStorage.getItem('theme');
              if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.add('light');
              }
            })();
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      </body>
    </html>
  );
}
