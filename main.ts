import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One loading-screen tip (142 chars) for a stressed developer watching an AI coding agent work mid-build.
const TIP = "Tip: your agent isn't stuck. It's reading your code the way you read error messages - skimming, panicking, hoping the answer is at the bottom.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
