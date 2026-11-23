// "A Day of One-Line Pitches" — entry for make.fun.
//
// The whole entry is a single sentence: a pitch meant to convince a
// friend who has never coded to let an AI agent build their first app
// idea on make.fun. This program has exactly one job — write that
// sentence, byte for byte, to /output/entry.txt, where the gate
// scorer checks it (UTF-8, 1–240 characters) and the house judge
// reads it. No input, no randomness: two runs produce the same file.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The pitch (222 characters). Written the way you'd say it to a
// friend: name the idea they've been carrying around, make handing
// it over feel easy and low risk, and promise only what holds up —
// a real first version they can tap through, not overnight success.
const PITCH =
  "You've been carrying that app idea around for months — say it once, in plain words, to an AI agent on make.fun, and watch it become a real first version you can tap through and show people, without learning a line of code.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, PITCH, "utf8");
}

main();
