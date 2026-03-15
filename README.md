# scottv.dev


## About
This is my personal website to showcase my projects and serve as an extension of my resume. I also like to experiment with things on here e.g. the Tic Tac Toe robot (try it out!).


## CI/CD
This site uses GitHub actions and a self-hosted runner to continously integrate and deploy to GitHub pages.
The runner executes a YAML file located at `.github/workflows/deploy-pages.yml`.

Note: Start the runner by running `zsh run.sh` in the actions-runner directory.

Note: ~~Need to re-add custom domain (www.scottv.dev) in GitHub pages settings after deploying.~~ This is now done by runner.


## AI Chatbot
A RAG (Retrieval-Augmented Generation) chatbot that answers questions about me. Uses static embeddings with OpenAI.

### Architecture
- **Knowledge base**: Markdown files in `chatbot/knowledge/`
- **Embeddings**: Generated via `text-embedding-3-small`, stored as static JSON in `src/assets/knowledge/embeddings.json`
- **Backend**: Firebase Cloud Function (`chatbot/functions/`) — embeds the user's question, finds relevant chunks via cosine similarity, sends context to `gpt-4.1-nano`
- **Frontend**: Angular standalone component (`src/app/elements/chatbot/`)

### Local Development
```bash
# Terminal 1 — Firebase emulator
cd chatbot/functions && npm run serve

# Terminal 2 — Angular dev server
ng serve
```

### Updating Knowledge
Edit markdown files in `chatbot/knowledge/`, then regenerate embeddings:
```bash
OPENAI_API_KEY=sk-... node chatbot/scripts/generate-embeddings.js
```
Embeddings are also regenerated automatically during `npm run build`.

### Deploying the Cloud Function
```bash
cd chatbot/functions
npm install
npm run deploy
```

### Secrets
- `OPENAI_API_KEY` — stored in Firebase secrets (for Cloud Function) and GitHub Actions secrets (for build-time embedding generation)
