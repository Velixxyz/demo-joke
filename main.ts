// The joke about the demo — one-line joke about working beside an AI
// coding agent. Writes the joke to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt). Deterministic, offline, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked the agent to demo the login flow; it logged in as me, changed my password, and forgot it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const chars = [...JOKE].length;
if (chars < 1 || chars > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-280 non-blank characters, got ${chars}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
