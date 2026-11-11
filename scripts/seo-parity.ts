import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from '../src/app/routes';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const legacyRoot = resolve(projectRoot, '..');
const distDir = resolve(projectRoot, 'dist');

const ASSET_EXTENSIONS = [
  '.css',
  '.js',
  '.mjs',
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.svg',
  '.ico',
  '.gif',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot',
  '.pdf',
  '.xml',
  '.txt',
];

interface Extracted {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string[];
  schema: string[];
  links: string[];
}

interface PageReport {
  page: string;
  failures: string[];
  checks: number;
}

function decodeEntities(value: string): string {
  return (
    value
      // React escapes apostrophes as `&#x27;`; legacy markup keeps them literal.
      .replace(/&#x([0-9a-f]+);/gi, (_match, hex: string) =>
        String.fromCodePoint(Number.parseInt(hex, 16)),
      )
      .replace(/&#(\d+);/g, (_match, dec: string) => String.fromCodePoint(Number(dec)))
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#0?39;/g, "'")
      .replace(/&nbsp;/g, ' ')
  );
}

function normalizeText(value: string): string {
  return decodeEntities(value).replace(/\s+/g, ' ').trim();
}

function matchFirst(html: string, pattern: RegExp): string {
  const match = html.match(pattern);
  return match?.[1] ? normalizeText(match[1]) : '';
}

function extractHead(html: string): Omit<Extracted, 'links' | 'schema'> {
  const title = matchFirst(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = matchFirst(
    html,
    /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i,
  );
  const canonical = matchFirst(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const robots = matchFirst(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i);

  const h1: string[] = [];
  const h1Pattern = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
  let h1Match: RegExpExecArray | null;
  while ((h1Match = h1Pattern.exec(html)) !== null) {
    const text = normalizeText(h1Match[1].replace(/<[^>]+>/g, ' '));
    if (text) h1.push(text);
  }

  return { title, description, canonical, robots, h1 };
}

function stableJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`;
  if (value && typeof value === 'object') {
    const entries = Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, item]) => `${JSON.stringify(key)}:${stableJson(item)}`);
    return `{${entries.join(',')}}`;
  }
  return JSON.stringify(value ?? null);
}

function extractSchema(html: string): string[] {
  const blocks: string[] = [];
  const pattern = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    const raw = match[1].trim();
    if (!raw) continue;
    try {
      blocks.push(stableJson(JSON.parse(raw)));
    } catch {
      blocks.push(`INVALID_JSON:${raw.slice(0, 120)}`);
    }
  }
  return blocks.sort();
}

function normalizeLink(href: string): string {
  let value = decodeEntities(href.trim());
  value = value.replace(/^https?:\/\/[^/]+/i, '');
  value = value.replace(/^\/+/, '');
  value = value.replace(/[?#].*$/, '');
  return value;
}

function isInternalPageLink(href: string): boolean {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith('#')) return false;
  if (/^(mailto:|tel:|javascript:|data:)/i.test(trimmed)) return false;
  if (trimmed.startsWith('//')) return false;
  if (/^https?:\/\//i.test(trimmed)) {
    return /^https?:\/\/(www\.)?zedgehost\.com/i.test(trimmed);
  }
  const path = normalizeLink(trimmed).toLowerCase();
  if (!path || path === '.' || path === './') return false;
  return !ASSET_EXTENSIONS.some((extension) => path.endsWith(extension));
}

function extractLinks(html: string): string[] {
  const links = new Set<string>();
  const pattern = /href=["']([^"']+)["']/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(html)) !== null) {
    const href = match[1];
    if (!isInternalPageLink(href)) continue;
    const link = normalizeLink(href);
    if (!link) continue;
    links.add(link);
  }
  return [...links].sort();
}

function extract(html: string): Extracted {
  return {
    ...extractHead(html),
    schema: extractSchema(html),
    links: extractLinks(html),
  };
}

function comparePage(page: string, legacy: Extracted, current: Extracted): PageReport {
  const failures: string[] = [];
  let checks = 0;

  const assertEqual = (label: string, expected: string, actual: string): void => {
    checks += 1;
    if (expected !== actual) {
      failures.push(
        `${label} differs\n    legacy: ${expected || '(empty)'}\n    new:    ${actual || '(empty)'}`,
      );
    }
  };

  assertEqual('title', legacy.title, current.title);
  assertEqual('meta description', legacy.description, current.description);
  assertEqual('canonical', legacy.canonical, current.canonical);
  assertEqual('robots', legacy.robots, current.robots);

  checks += 1;
  if (legacy.h1.join(' | ') !== current.h1.join(' | ')) {
    failures.push(
      `H1 differs\n    legacy: ${legacy.h1.join(' | ') || '(none)'}\n    new:    ${current.h1.join(' | ') || '(none)'}`,
    );
  }

  checks += 1;
  const missingSchema = legacy.schema.filter((block) => !current.schema.includes(block));
  if (missingSchema.length > 0) {
    failures.push(
      `JSON-LD blocks missing or changed (${missingSchema.length} of ${legacy.schema.length})`,
    );
    for (const block of missingSchema.slice(0, 3)) {
      failures.push(`  - ${block.slice(0, 160)}...`);
    }
  }

  checks += 1;
  const missingLinks = legacy.links.filter((link) => !current.links.includes(link));
  if (missingLinks.length > 0) {
    failures.push(`internal links missing (${missingLinks.join(', ')})`);
  }

  return { page, failures, checks };
}

async function main(): Promise<void> {
  const reports: PageReport[] = [];

  for (const route of routes) {
    const legacyPath = resolve(legacyRoot, route.output);
    const currentPath = resolve(distDir, route.output);

    let legacyHtml: string;
    let currentHtml: string;
    try {
      [legacyHtml, currentHtml] = await Promise.all([
        readFile(legacyPath, 'utf8'),
        readFile(currentPath, 'utf8'),
      ]);
    } catch (error) {
      reports.push({
        page: route.output,
        failures: [
          `could not read page: ${error instanceof Error ? error.message : String(error)}`,
        ],
        checks: 1,
      });
      continue;
    }

    reports.push(comparePage(route.output, extract(legacyHtml), extract(currentHtml)));
  }

  let failed = 0;
  for (const report of reports) {
    if (report.failures.length === 0) {
      console.log(`PASS ${report.page} (${report.checks} checks)`);
      continue;
    }
    failed += 1;
    console.error(`FAIL ${report.page}`);
    for (const failure of report.failures) {
      console.error(`  - ${failure}`);
    }
  }

  const passed = reports.length - failed;
  console.log(`\nSEO parity: ${passed}/${reports.length} pages match legacy markup`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
