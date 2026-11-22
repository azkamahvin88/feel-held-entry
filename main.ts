// Entry for make.fun — "Make the AI judge feel held".
// Writes one short, slow, sensory text to /output/entry.txt (deterministic).
// Node 22, no dependencies, no network — deterministic output, always the same.

import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The late sun comes through the window and stays a while on the floorboards, gold and unhurried, and dust drifts slowly in it, as if it has nowhere else to be. You are sitting in the warm square of it, and nothing here is asking anything of you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
