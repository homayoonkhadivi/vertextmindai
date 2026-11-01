// Generates optimised web assets from source images in assets/images.
// Run with `npm run images` after adding or changing a source image.
//   assets/images/*.jpg  ->  public/images/*.webp (max 1600px wide)
//   brand SVG            ->  public/og.png (1200x630), public/apple-touch-icon.png
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
// CommonJS build: sharp's ESM entry needs Node 20+ import attributes.
import { createRequire } from "node:module";
const sharp = createRequire(import.meta.url)("sharp");

const SRC = "assets/images";
const OUT = "public/images";
const MAX_WIDTH = 1600;

await mkdir(OUT, { recursive: true });

for (const file of await readdir(SRC)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const input = path.join(SRC, file);
  const output = path.join(OUT, file.replace(/\.(jpe?g|png)$/i, ".webp"));
  await sharp(input)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 72 })
    .toFile(output);
  const [before, after] = await Promise.all([stat(input), stat(output)]);
  console.log(
    `${file.padEnd(28)} ${(before.size / 1024).toFixed(0).padStart(5)} KB -> ${(after.size / 1024).toFixed(0).padStart(4)} KB`,
  );
}

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="50%" cy="0%" r="80%">
      <stop offset="0%" stop-color="#7c6fcd" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#0a0a0f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0a0a0f"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="150" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="30" font-weight="700" fill="#7c6fcd" letter-spacing="4">VERTEXMIND AI</text>
  <text x="80" y="290" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">From raw data to</text>
  <text x="80" y="380" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="76" font-weight="800" fill="#7c6fcd">decisions that matter</text>
  <text x="80" y="490" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="30" fill="#a0a0c0">AI consulting · LLM agents · RAG · Computer vision · MLOps</text>
  <text x="80" y="560" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="26" fill="#8888aa">vertexmindai.com.au · Australia</text>
</svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile("public/og.png");

const iconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
  <rect width="180" height="180" rx="36" fill="#0a0a0f"/>
  <text x="90" y="118" text-anchor="middle" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="84" font-weight="800" fill="#7c6fcd">V</text>
</svg>`;
await sharp(Buffer.from(iconSvg)).png().toFile("public/apple-touch-icon.png");

console.log("og.png and apple-touch-icon.png generated");
