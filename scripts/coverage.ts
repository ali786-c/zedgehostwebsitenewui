/**
 * Coverage gate: every URL in the legacy sitemap must exist in `dist/`, and no
 * legacy root HTML page may stay un-migrated. Partial files (header/footer
 * includes) and backups are listed separately instead of failing the build.
 *
 * Run with `npx tsx scripts/coverage.ts` (part of `npm run build`).
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from '../src/app/routes';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const legacyRoot = resolve(projectRoot, '..');
const distDir = resolve(projectRoot, 'dist');

/** Legacy files that are not standalone pages (includes and backups). */
const NON_PAGE_FILES = ['header.html', 'footer.html', 'index_backup.html'];

function outputFor(url: string): string {
  const path = url
    .replace(/^https?:\/\/[^/]+/i, '')
    .split(/[?#]/)[0]
    .replace(/^\/+/, '');
  if (!path) return 'index.html';
  return path.endsWith('.html') || path.includes('.') ? path : `${path}.html`;
}

async function exists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

async function main(): Promise<void> {
  const failures: string[] = [];
  const routeOutputs = new Set(routes.map((route) => route.output));

  const sitemap = await readFile(resolve(legacyRoot, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].trim());

  for (const url of urls) {
    const output = outputFor(url);
    if (!routeOutputs.has(output)) failures.push(`sitemap URL not routed: ${url} → ${output}`);
    if (!(await exists(resolve(distDir, output)))) {
      failures.push(`sitemap URL not prerendered: ${url} → dist/${output}`);
    }
  }

  const legacyFiles = (await readdir(legacyRoot)).filter((file) => file.endsWith('.html')).sort();
  const skipped: string[] = [];
  for (const file of legacyFiles) {
    if (routeOutputs.has(file)) continue;
    if (NON_PAGE_FILES.includes(file)) {
      skipped.push(file);
      continue;
    }
    failures.push(`legacy page not migrated: ${file}`);
  }

  console.log(`Coverage: ${urls.length} sitemap URLs, ${routeOutputs.size} routes`);
  if (skipped.length > 0) console.log(`Not pages (skipped): ${skipped.join(', ')}`);

  if (failures.length > 0) {
    for (const failure of failures) console.error(`  - ${failure}`);
    console.error(`\nCoverage FAILED with ${failures.length} gap(s)`);
    process.exitCode = 1;
    return;
  }
  console.log('Coverage: every legacy page has a prerendered, routed replacement');
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
