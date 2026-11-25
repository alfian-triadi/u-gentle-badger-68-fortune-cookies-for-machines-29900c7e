// Fortune Cookies for Machines — make.fun entry
// Writes the one-line fortune an AI agent would crack open to /output/entry.txt
// (gate: UTF-8 text, 1-200 characters, not only whitespace).

import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will forget the question, answer anyway with total confidence, and be thanked for it. This is not a bug. This is the job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
console.log(FORTUNE);
