// Renders assets/images/og-{en,cs}.png (1200×630) from og-template.html.
// Usage: npx playwright install chromium && node tools/og/render-og.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));
const template = path.join(here, "og-template.html");
const outDir = path.join(here, "..", "..", "assets", "images");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

for (const lang of ["en", "cs"]) {
  await page.goto(`file://${template}?lang=${lang}`, { waitUntil: "networkidle" });
  const out = path.join(outDir, `og-${lang}.png`);
  await page.screenshot({ path: out });
  console.log(`✓ ${out}`);
}

await browser.close();
