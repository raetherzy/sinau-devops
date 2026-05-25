import { auth } from "@/auth";
import DashboardProgress from "@/components/dashboard/DashboardProgress";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        {session?.user ? `Halo, ${session.user.name || "DevOps Learner"}!` : "Dashboard"}
      </h1>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400">
        Pantau progress perjalanan belajar DevOps-mu
      </p>

      <DashboardProgress />
    </div>
  );
}
