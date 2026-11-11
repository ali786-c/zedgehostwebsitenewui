import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderRoute } from '../src/app/entry-server';
import { routes } from '../src/app/routes';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = resolve(projectRoot, 'dist');
const templatePath = resolve(distDir, 'index.html');

const ROOT_PLACEHOLDER = '<div id="root"></div>';
const PAGE_PLACEHOLDER = 'data-page="home"';

function assertContains(template: string, needle: string): void {
  if (!template.includes(needle)) {
    throw new Error(
      `Prerender template is missing ${needle}. Ensure dist/index.html still contains the Vite shell markup.`,
    );
  }
}

async function main(): Promise<void> {
  const template = await readFile(templatePath, 'utf8');
  assertContains(template, ROOT_PLACEHOLDER);
  assertContains(template, PAGE_PLACEHOLDER);

  const results: { output: string; bytes: number }[] = [];

  for (const route of routes) {
    const { head, markup } = renderRoute(route);

    const html = template
      .replace(PAGE_PLACEHOLDER, `data-page="${route.key}"`)
      .replace(ROOT_PLACEHOLDER, `<div id="root">${markup}</div>`)
      .replace('</head>', `    ${head}\n  </head>`);

    const target = resolve(distDir, route.output);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, html, 'utf8');

    results.push({ output: route.output, bytes: Buffer.byteLength(html) });
  }

  for (const result of results) {
    const kb = (result.bytes / 1024).toFixed(1);
    console.log(`prerendered ${result.output.padEnd(22)} ${kb.padStart(8)} kB`);
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
