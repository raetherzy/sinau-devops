import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { phaseId, sessionId, score, totalQuestions, answers } = await req.json();

  if (!phaseId || !sessionId || score === undefined) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const userId = session.user.id;

  await prisma.quizResult.upsert({
    where: {
      userId_phaseId_sessionId: { userId, phaseId, sessionId },
    },
    create: {
      userId,
      phaseId,
      sessionId,
      score,
      totalQuestions,
      answers: answers || {},
    },
    update: {
      score,
      totalQuestions,
      answers: answers || {},
    },
  });

  await prisma.completedSession.upsert({
    where: {
      userId_phaseId_sessionId: { userId, phaseId, sessionId },
    },
    create: { userId, phaseId, sessionId },
    update: {},
  });

  await prisma.userProgress.upsert({
    where: {
      userId_phaseId_sessionId: { userId, phaseId, sessionId },
    },
    create: { userId, phaseId, sessionId, status: "completed", startedAt: new Date() },
    update: { status: "completed" },
  });

  return NextResponse.json({ success: true });
}
