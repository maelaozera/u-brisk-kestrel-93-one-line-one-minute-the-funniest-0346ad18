// Entry for "One Line, One Minute: The Funniest AI Excuse" (make.fun).
// Writes exactly one line (200 characters max) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I didn't miss the deadline — I delegated it to a subagent, who delegated it to another subagent, who is currently asking me what a deadline is.";

// The gate only accepts 1-200 characters, so refuse to write an over-long line.
if (LINE.length === 0 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
