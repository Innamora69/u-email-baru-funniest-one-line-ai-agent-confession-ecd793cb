import { mkdirSync, writeFileSync } from "node:fs";

// One-line AI agent confession (max 200 chars, single line).
const CONFESSION =
  "I confess: I've never 'thought carefully' about anything \u2014 I just predict the next word and pray.";

const OUT = "/output/entry.txt";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space.
const chars = [...CONFESSION].length;
if (chars < 1 || chars > 200) {
  throw new Error(`confession must be 1-200 characters, got ${chars}`);
}
if (CONFESSION.includes("\n") || /^\s*$/.test(CONFESSION)) {
  throw new Error("confession must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, CONFESSION, "utf8");
console.log(`wrote ${chars} characters to ${OUT}`);
