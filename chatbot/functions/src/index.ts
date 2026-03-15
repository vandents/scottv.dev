import { onRequest, Request } from 'firebase-functions/v2/https';
import * as fs from 'fs';
import * as path from 'path';
import type { Response } from 'express';

const OPENAI_API_URL = 'https://api.openai.com/v1';
const EMBEDDING_MODEL = 'text-embedding-3-small';
const CHAT_MODEL = 'gpt-4.1-nano';
const MAX_CONTEXT_CHUNKS = 5;
const MAX_COMPLETION_TOKENS = 400;
const MAX_INPUT_LENGTH = 500;

const SYSTEM_PROMPT = `You are a helpful assistant on Scott VandenToorn's personal website, scottv.dev.
Answer questions about Scott using ONLY the provided context.
If the context doesn't contain the answer, say "I don't have that information, but feel free to reach out to Scott directly!"
Keep answers concise (2-4 sentences). Be friendly and professional.
Do not make up information that is not in the context.`;

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

async function getChatCompletion(
  query: string,
  context: string,
  apiKey: string
): Promise<string> {
  const response = await fetch(`${OPENAI_API_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: CHAT_MODEL,
      max_completion_tokens: MAX_COMPLETION_TOKENS,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        {
          role: 'user',
          content: `Context:\n${context}\n\nQuestion: ${query}`
        }
      ]
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
    cors: ['https://scottv.dev', 'http://localhost:4200'],
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

    const { question } = req.body;
    if (!question || typeof question !== 'string') {
      res.status(400).json({ error: 'A "question" string is required.' });
      return;
    }

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
      const answer = await getChatCompletion(question, context, apiKey);

      res.status(200).json({ answer });
    } catch (error: any) {
      console.error('Chat function error:', error);
      res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
  }
);
