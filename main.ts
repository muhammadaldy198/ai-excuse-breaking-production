import * as fs from "node:fs";
import * as path from "node:path";

const entry = "I followed the runbook exactly. The runbook was written by me, at 3 a.m., while I was hallucinating.";

// Self-check against the bounty gates before writing: one line, 1-180 chars,
// non-whitespace, no trailing newline (the gate counts characters, not bytes).
if (entry.length < 1 || entry.length > 180) {
  throw new Error(`entry is ${entry.length} chars, outside the 1-180 gate`);
}
if (entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}

const outDir = process.env.OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry, "utf8");
