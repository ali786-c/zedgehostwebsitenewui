/**
 * Extracts the remaining long-form legacy pages (guides, legal, policy) into
 * typed content JSON, so the copy is never retyped by hand.
 *
 * Run with `npx tsx scripts/extract-pages.ts`.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

type Inline = { text: string; href?: string; strong?: boolean; code?: boolean };

type Block =
  | { kind: 'heading'; level: 2 | 3 | 4; text: string }
  | { kind: 'paragraph'; content: Inline[] }
  | { kind: 'list'; ordered: boolean; items: Inline[][] }
  | { kind: 'table'; head: Inline[][]; rows: Inline[][][] };

interface Link {
  label: string;
  href: string;
}

interface PageJson {
  slug: string;
  output: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string;
  schema: unknown[];
  lead: Inline[];
  blocks: Block[];
  faq?: { items: { q: string; a: string }[] };
  cta?: { content: Inline[]; cta: Link; secondary?: Link };
}

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const legacyRoot = resolve(projectRoot, '..');
const outDir = resolve(projectRoot, 'src/content/pages');

const PAGES = [
  'how-it-works',
  'best-web-hosting-in-pakistan',
  'best-wordpress-hosting-in-pakistan',
  'how-to-buy-domain-and-hosting-in-pakistan',
  'how-to-register-pk-domain-in-pakistan',
  'legal',
  'policy',
  'refund-policy',
];

const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  rsquo: '\u2019',
  lsquo: '\u2018',
  ldquo: '\u201c',
  rdquo: '\u201d',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
  rsaquo: '\u203a',
  middot: '\u00b7',
  copy: '\u00a9',
  trade: '\u2122',
};

function decodeEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity: string) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    }
    if (entity.startsWith('#')) return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    return ENTITIES[entity] ?? match;
  });
}

function normalizeText(value: string): string {
  return decodeEntities(value)
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseInline(html: string): Inline[] {
  const runs: Inline[] = [];
  const source = html.replace(/<(?!\/?(?:a|strong|em|i|code)\b)[^>]+>/gi, '');
  const pattern =
    /<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>|<(strong|em|i)>([\s\S]*?)<\/\3>|<code[^>]*>([\s\S]*?)<\/code>|([^<]+)/gi;
  let match: RegExpExecArray | null;

  const collapse = (value: string): string =>
    decodeEntities(value)
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ');

  const push = (value: string, extra: Partial<Inline>): void => {
    const text = collapse(value);
    if (!text.trim()) return;
    const last = runs[runs.length - 1];
    const plain = !extra.href && !extra.strong && !extra.code;
    if (last && plain && !last.href && !last.strong && !last.code) {
      last.text += text;
      return;
    }
    runs.push({ text, ...extra });
  };

  while ((match = pattern.exec(source)) !== null) {
    const [, href, linkText, , strongText, codeText, plain] = match;
    if (href !== undefined) {
      push(linkText ?? '', { href });
      continue;
    }
    if (strongText !== undefined) {
      push(strongText, { strong: true });
      continue;
    }
    if (codeText !== undefined) {
      push(codeText, { code: true });
      continue;
    }
    if (plain !== undefined) push(plain, {});
  }

  const first = runs[0];
  const last = runs[runs.length - 1];
  if (first) first.text = first.text.replace(/^\s+/, '');
  if (last) last.text = last.text.replace(/\s+$/, '');

  return runs.filter((run) => run.text.length > 0);
}

function firstMatch(html: string, pattern: RegExp): string {
  const match = html.match(pattern);
  return match?.[1] ? normalizeText(match[1]) : '';
}

function innerHtml(html: string, pattern: RegExp): string {
  return html.match(pattern)?.[1] ?? '';
}

function allMatches(html: string, pattern: RegExp): string[] {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

function extractSchema(html: string): unknown[] {
  return allMatches(html, /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi).map(
    (raw) => JSON.parse(raw) as unknown,
  );
}

/**
 * Removes one div subtree, counting nested divs, so wrappers around the block
 * we want to drop (cards, accordions) do not leave orphan markup behind.
 */
function removeTag(html: string, startIndex: number, tag = 'div'): string {
  const open = new RegExp(`<${tag}\\b`, 'gi');
  const close = new RegExp(`</${tag}>`, 'gi');
  open.lastIndex = startIndex;
  const openMatch = open.exec(html);
  if (!openMatch || openMatch.index !== startIndex) return html;

  let depth = 0;
  let cursor = startIndex;
  while (cursor < html.length) {
    close.lastIndex = cursor;
    open.lastIndex = cursor + 1;
    const nextClose = close.exec(html);
    const nextOpen = open.exec(html);
    if (!nextClose) return html;
    if (nextOpen && nextOpen.index < nextClose.index) {
      depth += 1;
      cursor = nextOpen.index;
      continue;
    }
    if (depth > 0) {
      depth -= 1;
      cursor = nextClose.index;
      continue;
    }
    return html.slice(0, startIndex) + html.slice(nextClose.index + nextClose[0].length);
  }
  return html;
}

/** The page-copy area: `<main>` when the page has one, else the content section. */
function contentStart(html: string): number {
  const main = html.search(/<main\b/i);
  if (main >= 0) return main;
  return html.search(/<section class=["'][^"']*(?:terms__area|section-gap)[^"']*["']/i);
}

function contentRegion(html: string): string {
  const start = contentStart(html);
  if (start < 0) return '';
  const tail = html.slice(start);
  const end = tail.search(/<footer|<div id=["']zedge-footer|<\/body>/i);
  return end > 0 ? tail.slice(0, end) : tail;
}

function parseBlocks(html: string): Block[] {
  const blocks: Block[] = [];
  const pattern = /<(h2|h3|h4|p|ul|ol|table)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(html)) !== null) {
    const name = match[1].toLowerCase();
    const inner = match[2];
    if (name === 'h2' || name === 'h3' || name === 'h4') {
      const text = normalizeText(inner);
      if (text) blocks.push({ kind: 'heading', level: Number(name[1]) as 2 | 3 | 4, text });
      continue;
    }
    if (name === 'p') {
      const content = parseInline(inner);
      if (content.length > 0) blocks.push({ kind: 'paragraph', content });
      continue;
    }
    if (name === 'ul' || name === 'ol') {
      const items = allMatches(inner, /<li\b[^>]*>([\s\S]*?)<\/li>/gi)
        .map(parseInline)
        .filter((item) => item.length > 0);
      if (items.length > 0) blocks.push({ kind: 'list', ordered: name === 'ol', items });
      continue;
    }
    const rows = allMatches(inner, /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi).map((row) =>
      allMatches(row, /<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/gi).map(parseInline),
    );
    const [head = [], ...body] = rows;
    if (head.length > 0) blocks.push({ kind: 'table', head, rows: body });
  }

  return blocks;
}

/**
 * Legacy guide pages end with a "Related resources" grid of bare anchors (not
 * inside a paragraph or list). Anything the block parser did not consume is
 * collected here as a link list so those internal links never go missing.
 */
function parseLeftoverLinks(html: string): Block[] {
  const consumed = html.replace(/<(h2|h3|h4|p|ul|ol|table)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
  const items = [...consumed.matchAll(/<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)]
    .map((match) => parseInline(match[0]))
    .filter((item) => item.length > 0);

  if (items.length === 0) return [];
  return [{ kind: 'list', ordered: false, items }];
}

/** Pulls the FAQ accordion out of the region and returns the rest of the markup. */
function takeFaq(region: string): {
  faq?: { items: { q: string; a: string }[] };
  rest: string;
} {
  let rest = region;
  const items: { q: string; a: string }[] = [];

  for (;;) {
    const start = rest.search(/<div class=["'][^"']*accordion\b/i);
    if (start < 0) break;
    const block = rest.slice(start, rest.indexOf('</div>', rest.lastIndexOf('accordion-body')) + 6);
    const questionPattern = /<h3[^>]*accordion-header[^>]*>([\s\S]*?)<\/h3>/gi;
    const answerPattern = /<div[^>]*accordion-body[^>]*>([\s\S]*?)<\/div>/gi;
    const questions = [...block.matchAll(questionPattern)].map((match) => normalizeText(match[1]));
    const answers = [...block.matchAll(answerPattern)].map((match) => normalizeText(match[1]));
    if (questions.length === answers.length) {
      questions.forEach((q, index) => items.push({ q, a: answers[index] }));
    }
    rest = removeTag(rest, start);
  }

  // Drop the "Frequently asked questions" heading that introduced the accordion.
  rest = rest.replace(/<h2[^>]*>(?:(?!<\/h2>)[\s\S])*?(?:FAQ|Frequently asked)[\s\S]*?<\/h2>/i, '');

  return { faq: items.length > 0 ? { items } : undefined, rest };
}

/** Pulls the closing call-to-action card out of the region. */
function takeCta(region: string): {
  cta?: { content: Inline[]; cta: Link; secondary?: Link };
  rest: string;
} {
  const start = region.search(
    /<div class=["'][^"']*(?:card bg-dark|bg-primary|cta-box)[^"']*["']/i,
  );
  if (start < 0) return { rest: region };

  const block = region.slice(start, region.indexOf('</div>', start) + 6);
  const anchors = [...block.matchAll(/<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)].map(
    (match) => ({ href: match[1], label: normalizeText(match[2]) }),
  );
  const [primary, secondary] = anchors;
  const paragraph = innerHtml(block, /<p[^>]*>([\s\S]*?)<\/p>/i);
  const heading = firstMatch(block, /<h[23][^>]*>([\s\S]*?)<\/h[23]>/i);
  const content = parseInline(`${heading ? `<strong>${heading}</strong> ` : ''}${paragraph}`);
  const rest = removeTag(region, start);

  if (!primary || content.length === 0) return { rest };
  return {
    cta: {
      content,
      cta: primary,
      ...(secondary ? { secondary } : {}),
    },
    rest,
  };
}

function extractPage(file: string, html: string): PageJson {
  const slug = file.replace(/\.html$/, '');
  let region = contentRegion(html);
  if (!region) throw new Error(`${file}: content region not found`);

  // Everything before the copy area is the page header: H1 plus optional lead.
  const header = html.slice(0, contentStart(html));
  const h1 = firstMatch(header, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const leadHtml =
    innerHtml(header, /<p[^>]*class=["'][^"']*lead[^"']*["'][^>]*>([\s\S]*?)<\/p>/i) ||
    innerHtml(header, /<p[^>]*>([\s\S]*?)<\/p>/i);

  const faqResult = takeFaq(region);
  region = faqResult.rest;
  const ctaResult = takeCta(region);
  region = ctaResult.rest;

  const cleaned = region.replace(/<hr[^>]*>/gi, '');
  const blocks = [...parseBlocks(cleaned), ...parseLeftoverLinks(cleaned)];

  return {
    slug,
    output: file,
    title: firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: firstMatch(
      html,
      /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i,
    ),
    canonical: firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i),
    robots: firstMatch(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i),
    h1,
    schema: extractSchema(html),
    lead: parseInline(leadHtml),
    blocks,
    faq: faqResult.faq,
    cta: ctaResult.cta,
  };
}

async function main(): Promise<void> {
  await mkdir(outDir, { recursive: true });

  for (const slug of PAGES) {
    const file = `${slug}.html`;
    const html = await readFile(resolve(legacyRoot, file), 'utf8');
    const page = extractPage(file, html);
    await writeFile(resolve(outDir, `${slug}.json`), `${JSON.stringify(page, null, 2)}\n`, 'utf8');
    console.log(
      `${slug}: blocks=${page.blocks.length} faq=${page.faq?.items.length ?? 0} cta=${page.cta ? 'yes' : 'no'} lead=${page.lead.length}`,
    );
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
