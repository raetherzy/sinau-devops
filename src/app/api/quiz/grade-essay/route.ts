import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";
import { AI_SYSTEM_PROMPT } from "@/lib/ai-prompt";

export async function POST(req: NextRequest) {
  try {
    const { question, answer } = await req.json();

    if (!answer || !answer.trim()) {
      return NextResponse.json({ passed: false, feedback: "Jawaban kosong." });
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json({ passed: true });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const prompt = `Sebagai mentor DevOps, nilai jawaban esai singkat ini.

PERTANYAAN: ${question}
JAWABAN USER: ${answer}

Tugasmu:
1. Tentukan apakah jawaban "LULUS" atau "TIDAK LULUS"
2. Jawab dengan format JSON SAJA: {"passed": true/false, "feedback": "feedback singkat 1-2 kalimat dalam Bahasa Indonesia"}

Aturan penilaian:
- LULUS jika jawaban menunjukkan pemahaman dasar tentang konsep yang ditanyakan, meskipun tidak sempurna.
- TIDAK LULUS jika jawaban kosong, tidak relevan, atau salah total.
- Feedback harus supportif dan menggunakan kata "kamu", bukan "Anda".`;

    const completion = await groq.chat.completions.create({
      model: "llama-4-maverick-17b-128e-instruct",
      max_tokens: 200,
      temperature: 0.3,
      messages: [
        { role: "system", content: AI_SYSTEM_PROMPT },
        { role: "user", content: prompt },
      ],
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0]?.message?.content;
    if (content) {
      const result = JSON.parse(content);
      return NextResponse.json(result);
    }

    return NextResponse.json({ passed: true });
  } catch {
    return NextResponse.json({ passed: true });
  }
}
