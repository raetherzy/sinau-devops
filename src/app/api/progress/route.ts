import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  const [completedSessions, quizResults, userProgress] = await Promise.all([
    prisma.completedSession.findMany({ where: { userId } }),
    prisma.quizResult.findMany({ where: { userId } }),
    prisma.userProgress.findMany({ where: { userId } }),
  ]);

  return NextResponse.json({
    completedSessions,
    quizResults,
    userProgress,
  });
}
