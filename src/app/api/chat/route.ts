import { NextRequest } from "next/server";
import Groq from "groq-sdk";
import { AI_SYSTEM_PROMPT } from "@/lib/ai-prompt";

export async function POST(req: NextRequest) {
  try {
    const { messages, sessionTitle, sessionDescription } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return new Response(
        JSON.stringify({ error: "AI API key belum dikonfigurasi" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY,
    });

    const contextMessage = `Konteks sesi saat ini:
Judul: ${sessionTitle}
Deskripsi: ${sessionDescription}

Gunakan konteks di atas untuk memberikan jawaban yang relevan dengan topik yang sedang dipelajari user.`;

    const formattedMessages = messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    }));

    const stream = await groq.chat.completions.create({
      model: "llama-4-maverick-17b-128e-instruct",
      max_tokens: 1024,
      temperature: 0.7,
      messages: [
        { role: "system", content: AI_SYSTEM_PROMPT + "\n\n" + contextMessage },
        ...formattedMessages,
      ],
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content;
          if (text) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
            );
          }
        }
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("AI Chat error:", error);
    return new Response(
      JSON.stringify({ error: "Gagal menghubungi AI tutor" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
