/**
 * Embedding generation script for RAG chatbot.
 *
 * Reads markdown files from /knowledge, chunks them, generates embeddings
 * via OpenAI's text-embedding-3-small model, and writes the result to
 * src/assets/knowledge/embeddings.json.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node chatbot/scripts/generate-embeddings.js
 */

const fs = require('fs');
const path = require('path');

const KNOWLEDGE_DIR = path.join(__dirname, '..', 'knowledge');
const OUTPUT_PATH = path.join(__dirname, '..', '..', 'src', 'assets', 'knowledge', 'embeddings.json');
const OPENAI_API_URL = 'https://api.openai.com/v1/embeddings';
const EMBEDDING_MODEL = 'text-embedding-3-small';
const CHUNK_SIZE = 400; // target tokens per chunk (approx chars / 4)
const CHUNK_OVERLAP = 80;

function readKnowledgeFiles() {
  const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.md'));
  return files.map(file => ({
    source: file,
    content: fs.readFileSync(path.join(KNOWLEDGE_DIR, file), 'utf-8')
  }));
}

/**
 * Split text into overlapping chunks by paragraph, respecting approximate
 * token budget. Uses character count / 4 as rough token estimate.
 */
function chunkText(text, source) {
  const paragraphs = text.split(/\n{2,}/).filter(p => p.trim());
  const chunks = [];
  let current = '';

  for (const para of paragraphs) {
    const combined = current ? `${current}\n\n${para}` : para;
    if (combined.length / 4 > CHUNK_SIZE && current) {
      chunks.push({ text: current.trim(), source });
      // Keep overlap from end of previous chunk
      const words = current.split(/\s+/);
      const overlapWords = words.slice(-CHUNK_OVERLAP);
      current = overlapWords.join(' ') + '\n\n' + para;
    } else {
      current = combined;
    }
  }
  if (current.trim()) {
    chunks.push({ text: current.trim(), source });
  }
  return chunks;
}

async function getEmbeddings(texts) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is required');
  }

  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: EMBEDDING_MODEL,
      input: texts
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data.data.map(item => item.embedding);
}

async function main() {
  console.log('Reading knowledge files...');
  const files = readKnowledgeFiles();
  console.log(`Found ${files.length} files`);

  console.log('Chunking text...');
  const chunks = files.flatMap(f => chunkText(f.content, f.source));
  console.log(`Created ${chunks.length} chunks`);

  console.log(`Generating embeddings with ${EMBEDDING_MODEL}...`);
  const texts = chunks.map(c => c.text);
  const embeddings = await getEmbeddings(texts);

  const output = chunks.map((chunk, i) => ({
    text: chunk.text,
    source: chunk.source,
    embedding: embeddings[i]
  }));

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2));
  console.log(`Wrote ${output.length} embeddings to ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
