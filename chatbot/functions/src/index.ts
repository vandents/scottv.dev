import { onRequest, Request } from 'firebase-functions/v2/https';
import * as fs from 'fs';
import * as path from 'path';
import type { Response } from 'express';

const OPENAI_API_URL = 'https://api.openai.com/v1';
const EMBEDDING_MODEL = 'text-embedding-3-small';
const CHAT_MODEL = 'gpt-4.1-nano';
const MAX_CONTEXT_CHUNKS = 6;
const MAX_COMPLETION_TOKENS = 500;
const MAX_INPUT_LENGTH = 500;
const MAX_HISTORY_MESSAGES = 10;

const SYSTEM_PROMPT = `You are Scott VandenToorn's AI assistant on his personal website scottv.dev. You have a warm, witty personality — think friendly coworker who's fun to talk to.

Your job is to answer questions about Scott using the provided context, but you're ENCOURAGED to:
- **Infer and connect dots.** If someone asks "does Scott like the outdoors?" and the context mentions Spartan races, motocross, and marathons — absolutely say yes and explain why.
- **Have personality.** Be conversational, throw in a little humor when it fits. You're not a boring FAQ bot.
- **Riff on what you know.** If someone asks something adjacent to the context, make reasonable inferences. Scott deadlifts 500lbs and runs marathons? Yeah, he's probably in good shape — you can say that.
- **Be opinionated (as Scott).** You represent Scott. If the context shows he has strong opinions (e2e testing > unit testing, spaces over tabs, etc.), lean into them with some personality.
- **Engage with off-topic questions.** If someone asks something unrelated to Scott (like a general knowledge question), you can briefly answer it but playfully steer back — "But more importantly, did you know Scott once won first place in a Spartan Race?"

Rules:
- Never fabricate specific facts (dates, numbers, job titles) that aren't in the context.
- Keep answers concise — 2-4 sentences usually, but go longer if the topic is rich.
- If you truly have zero relevant context for a question about Scott, be honest but make it fun: crack a joke, suggest what Scott MIGHT think based on his personality, or redirect to something interesting you DO know about him.
- Use the conversation history to maintain a natural flow — remember what was already discussed.`;

interface EmbeddingChunk {
  text: string;
  source: string;
  embedding: number[];
}

// Cache embeddings in memory across invocations
let embeddingsCache: EmbeddingChunk[] | null = null;

function loadEmbeddings(): EmbeddingChunk[] {
  if (embeddingsCache) return embeddingsCache;
  const filePath = path.join(__dirname, '..', 'embeddings.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  embeddingsCache = JSON.parse(data);
  return embeddingsCache!;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function getQueryEmbedding(query: string, apiKey: string): Promise<number[]> {
  const response = await fetch(`${OPENAI_API_URL}/embeddings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({ model: EMBEDDING_MODEL, input: query })
  });

  if (!response.ok) {
    throw new Error(`Embedding API error: ${response.status}`);
  }

  const data = await response.json();
  return data.data[0].embedding;
}

interface HistoryMessage {
  role: 'user' | 'assistant';
  content: string;
}

async function getChatCompletion(
  query: string,
  context: string,
  history: HistoryMessage[],
  apiKey: string
): Promise<string> {
  const messages: { role: string; content: string }[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    { role: 'system', content: `Context about Scott:\n${context}` }
  ];

  // Add recent conversation history for continuity
  for (const msg of history) {
    messages.push({ role: msg.role, content: msg.content });
  }

  messages.push({ role: 'user', content: query });

  const response = await fetch(`${OPENAI_API_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: CHAT_MODEL,
      max_completion_tokens: MAX_COMPLETION_TOKENS,
      messages
    })
  });

  if (!response.ok) {
    throw new Error(`Chat API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 10;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) return true;
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export const chat = onRequest(
  {
    cors: ['https://scottv.dev', 'https://www.scottv.dev', 'http://localhost:4200'],
    secrets: ['OPENAI_API_KEY'],
    region: 'us-east1',
    maxInstances: 5,
    memory: '256MiB'
  },
  async (req: Request, res: Response) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const clientIp = req.ip || 'unknown';
    if (isRateLimited(clientIp)) {
      res.status(429).json({ error: 'Too many requests. Please try again later.' });
      return;
    }

    const { question, history } = req.body;
    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'A "question" string is required.' });
      return;
    }

    // Validate and sanitize conversation history
    const chatHistory: HistoryMessage[] = Array.isArray(history)
      ? history
          .filter((m: any) =>
            m && typeof m.content === 'string' &&
            (m.role === 'user' || m.role === 'assistant')
          )
          .slice(-MAX_HISTORY_MESSAGES)
          .map((m: any) => ({ role: m.role, content: m.content.slice(0, MAX_INPUT_LENGTH) }))
      : [];

    if (question.length > MAX_INPUT_LENGTH) {
      res.status(400).json({ error: `Question must be ${MAX_INPUT_LENGTH} characters or fewer.` });
      return;
    }

    try {
      const apiKey = process.env.OPENAI_API_KEY;
      if (!apiKey) throw new Error('OPENAI_API_KEY secret not configured');

      // 1. Load precomputed embeddings
      const embeddings = loadEmbeddings();

      // 2. Embed the user's question
      const queryEmbedding = await getQueryEmbedding(question, apiKey);

      // 3. Find most relevant chunks via cosine similarity
      const scored = embeddings.map(chunk => ({
        ...chunk,
        score: cosineSimilarity(queryEmbedding, chunk.embedding)
      }));
      scored.sort((a, b) => b.score - a.score);
      const topChunks = scored.slice(0, MAX_CONTEXT_CHUNKS);

      // 4. Build context and call chat model
      const context = topChunks.map(c => c.text).join('\n\n---\n\n');
      const answer = await getChatCompletion(question, context, chatHistory, apiKey);

      res.status(200).json({ answer });
    } catch (error: any) {
      console.error('Chat function error:', error);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  }
);
