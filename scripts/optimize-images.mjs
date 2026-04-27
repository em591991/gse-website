import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const TARGETS = ['src/assets', 'public'];
const MAX_WIDTH = 1920;
const JPG_QUALITY = 82;
const PNG_COMPRESSION = 9;
const WEBP_QUALITY = 82;
const SKIP_BELOW_BYTES = 400 * 1024;

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  if (!IMAGE_EXTS.has(ext)) return null;

  const before = (await stat(file)).size;
  if (before < SKIP_BELOW_BYTES) return null;

  const input = await readFile(file);
  const img = sharp(input, { failOn: 'none' });
  const meta = await img.metadata();
  const needsResize = (meta.width || 0) > MAX_WIDTH;

  let pipeline = img.rotate();
  if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

  if (ext === '.png') pipeline = pipeline.png({ compressionLevel: PNG_COMPRESSION, palette: true });
  else if (ext === '.webp') pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  else pipeline = pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true });

  const output = await pipeline.toBuffer();
  if (output.length >= before) return { file, before, after: before, skipped: 'no gain' };

  await writeFile(file, output);
  return { file, before, after: output.length };
}

const fmt = (n) => `${(n / 1024 / 1024).toFixed(2)} MB`;

let totalBefore = 0;
let totalAfter = 0;
for (const root of TARGETS) {
  for await (const file of walk(root)) {
    try {
      const result = await optimize(file);
      if (!result) continue;
      const tag = result.skipped ? `skip (${result.skipped})` : `${fmt(result.before)} → ${fmt(result.after)}`;
      console.log(`${result.file.padEnd(50)} ${tag}`);
      totalBefore += result.before;
      totalAfter += result.after;
    } catch (err) {
      console.error(`error: ${file}: ${err.message}`);
    }
  }
}
console.log(`\nTotal: ${fmt(totalBefore)} → ${fmt(totalAfter)} (saved ${fmt(totalBefore - totalAfter)})`);
