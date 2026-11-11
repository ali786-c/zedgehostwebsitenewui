/**
 * Extracts the legacy blog markup into typed post data.
 *
 * Run with `npx tsx scripts/extract-blog.ts`. The legacy pages at the repo root
 * stay the source of truth for copy while the redesign is being built; this
 * script turns each page into `src/content/blog/posts/<slug>.json` plus the
 * listing page data, so no copy is retyped by hand and nothing drifts.
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

type Inline = { text: string; href?: string; strong?: boolean };

type Block =
  | { kind: 'heading'; level: 2 | 3; text: string }
  | { kind: 'paragraph'; content: Inline[] }
  | { kind: 'list'; ordered: boolean; items: Inline[][] }
  | { kind: 'table'; head: Inline[][]; rows: Inline[][][] };

interface PostJson {
  slug: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string;
  schema: unknown[];
  category: string;
  crumb: string;
  author: string;
  date: string;
  dateISO: string;
  readTime: string;
  hero: { src: string; alt: string };
  answer: Inline[];
  blocks: Block[];
  cta: { content: Inline[]; cta: { label: string; href: string } };
  faq: { q: string; a: string }[];
}

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const legacyRoot = resolve(projectRoot, '..');
const outDir = resolve(projectRoot, 'src/content/blog');

const HERO = { src: '/assets/img/blog-hosting.webp', alt: 'ZedgeHost hosting servers' };

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
};

function decodeEntities(value: string): string {
  return value.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity: string) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(2), 16));
    }
    if (entity.startsWith('#')) {
      return String.fromCodePoint(Number.parseInt(entity.slice(1), 10));
    }
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

/**
 * Splits inline HTML into text / link / strong runs.
 * Whitespace inside a run is preserved (collapsed to single spaces) so the
 * rendered sentence keeps the spacing the legacy copy had around inline tags.
 */
function parseInline(html: string): Inline[] {
  const runs: Inline[] = [];
  // Drop wrapper tags (p, span …) but keep the inline elements we render.
  const source = html.replace(/<(?!\/?(?:a|strong|em)\b)[^>]+>/gi, '');
  const pattern =
    /<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>|<(strong|em)>([\s\S]*?)<\/\3>|([^<]+)/gi;
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
    if (last && !extra.href && !extra.strong && !last.href && !last.strong) {
      last.text += text;
      return;
    }
    runs.push({ text, ...extra });
  };

  while ((match = pattern.exec(source)) !== null) {
    const [, href, linkText, , strongText, plain] = match;
    if (href !== undefined) {
      push(linkText ?? '', { href });
      continue;
    }
    if (strongText !== undefined) {
      push(strongText, { strong: true });
      continue;
    }
    if (plain !== undefined) push(plain, {});
  }

  // Trim only the very start/end of the run list, never between runs.
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

/** Raw inner HTML of the first match, for blocks that still need parsing. */
function innerHtml(html: string, pattern: RegExp): string {
  return html.match(pattern)?.[1] ?? '';
}

function allMatches(html: string, pattern: RegExp): string[] {
  return [...html.matchAll(pattern)].map((match) => match[1]);
}

function extractSchema(html: string): unknown[] {
  const blocks: unknown[] = [];
  for (const raw of allMatches(
    html,
    /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi,
  )) {
    try {
      blocks.push(JSON.parse(raw));
    } catch {
      throw new Error(`Invalid JSON-LD block: ${raw.slice(0, 80)}`);
    }
  }
  return blocks;
}

function parseBodyBlocks(html: string): Block[] {
  const blocks: Block[] = [];
  const pattern = /<(h2|h3|p|ul|ol|table)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(html)) !== null) {
    const [, tag, inner] = match;
    const name = tag.toLowerCase();
    if (name === 'h2' || name === 'h3') {
      const text = normalizeText(inner);
      if (text) blocks.push({ kind: 'heading', level: name === 'h2' ? 2 : 3, text });
      continue;
    }
    if (name === 'p') {
      const content = parseInline(inner);
      if (content.length > 0) blocks.push({ kind: 'paragraph', content });
      continue;
    }
    if (name === 'ul' || name === 'ol') {
      const items = allMatches(inner, /<li\b[^>]*>([\s\S]*?)<\/li>/gi).map(parseInline);
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

function extractPost(file: string, html: string): PostJson {
  const slug = file.replace(/\.html$/, '');
  const mainStart = html.search(/<main\b[^>]*class=["'][^"']*blog-article/i);
  const mainEnd = html.lastIndexOf('</main>');
  if (mainStart < 0 || mainEnd < 0) throw new Error(`${file}: blog article container not found`);
  const main = html.slice(mainStart, mainEnd);

  const category = firstMatch(main, /<p class=["']blog-eyebrow["'][^>]*>([\s\S]*?)<\/p>/i);
  const h1 = firstMatch(main, /<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const crumb = firstMatch(
    main,
    /<nav[^>]*class=["']blog-breadcrumb["'][^>]*>[\s\S]*?<span>([\s\S]*?)<\/span>/i,
  );
  const metaLine = firstMatch(main, /<p class=["']blog-meta["'][^>]*>([\s\S]*?)<\/p>/i);
  const heroAlt = firstMatch(main, /<img[^>]*class=["']blog-hero["'][^>]*alt=["']([^"']*)["']/i);

  const metaMatch = metaLine.match(/^By\s+(.+?)\s*\u00b7\s*(.+?)\s*\u00b7\s*(.+)$/);
  const author = metaMatch?.[1]?.trim() ?? '';
  const date = metaMatch?.[2]?.trim() ?? '';
  const readTime = metaMatch?.[3]?.trim() ?? '';

  const answerHtml = innerHtml(main, /<div class=["']blog-answer["'][^>]*>([\s\S]*?)<\/div>/i);
  const ctaHtml = innerHtml(main, /<div class=["']blog-cta["'][^>]*>([\s\S]*?)<\/div>/i);
  const faqHtml = innerHtml(main, /<div class=["']blog-faq["'][^>]*>([\s\S]*?)<\/div>/i);
  if (!answerHtml || !ctaHtml) throw new Error(`${file}: answer or CTA block missing`);

  const faq: { q: string; a: string }[] = [];
  const faqPattern = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let faqMatch: RegExpExecArray | null;
  while ((faqMatch = faqPattern.exec(faqHtml)) !== null) {
    faq.push({ q: normalizeText(faqMatch[1]), a: normalizeText(faqMatch[2]) });
  }

  // Body = main minus the fixed prologue, CTA, FAQ, CTA button list and back link.
  let bodyHtml = main;
  for (const chunk of [
    /<nav[^>]*class=["']blog-breadcrumb["'][\s\S]*?<\/nav>/i,
    /<p class=["']blog-eyebrow["'][\s\S]*?<\/p>/i,
    /<h1[^>]*>[\s\S]*?<\/h1>/i,
    /<p class=["']blog-meta["'][\s\S]*?<\/p>/i,
    /<img[^>]*class=["']blog-hero["'][^>]*>/i,
    /<div class=["']blog-answer["'][\s\S]*?<\/div>/i,
    /<div class=["']blog-cta["'][\s\S]*?<\/div>/i,
    /<h2[^>]*>\s*Frequently asked questions\s*<\/h2>/i,
    /<div class=["']blog-faq["'][\s\S]*?<\/div>/i,
    /<a[^>]*class=["']blog-back["'][\s\S]*?<\/a>/i,
  ]) {
    bodyHtml = bodyHtml.replace(chunk, '');
  }

  const blocks = parseBodyBlocks(bodyHtml);
  const ctaLink = /<a\b[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/i.exec(ctaHtml);
  const ctaParagraph = /<p[^>]*>([\s\S]*?)<\/p>/i.exec(ctaHtml)?.[1] ?? '';

  const schema = extractSchema(html);
  const blogPosting = schema.find(
    (entry): entry is { datePublished?: string } =>
      typeof entry === 'object' &&
      entry !== null &&
      (entry as { '@type'?: string })['@type'] === 'BlogPosting',
  );

  return {
    slug,
    title: firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description:
      firstMatch(html, /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
      firstMatch(html, /<meta[^>]+content=["']([^"']*)["'][^>]*name=["']description["']/i),
    canonical: firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i),
    robots: firstMatch(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i),
    h1,
    schema,
    category,
    crumb,
    author,
    date,
    dateISO: blogPosting?.datePublished ?? '',
    readTime,
    hero: { src: HERO.src, alt: heroAlt || HERO.alt },
    answer: parseInline(answerHtml),
    blocks,
    cta: {
      content: parseInline(ctaParagraph),
      cta: {
        label: normalizeText(ctaLink?.[2] ?? 'See shared hosting plans'),
        href: ctaLink?.[1] ?? 'shared-hosting.html',
      },
    },
    faq,
  };
}

interface ListingCard {
  href: string;
  category: string;
  title: string;
  description: string;
  meta: string;
  ctaLabel: string;
}

function extractListing(html: string): {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string;
  schema: unknown[];
  subtitle: string;
  cards: ListingCard[];
} {
  const mainStart = html.search(/<main\b/i);
  const mainEnd = html.lastIndexOf('</main>');
  const main = html.slice(mainStart, mainEnd);
  const subtitle = firstMatch(main, /<p class=["']blog-intro["'][^>]*>([\s\S]*?)<\/p>/i);

  const cards: ListingCard[] = [];
  for (const chunk of allMatches(
    main,
    /<article\b[^>]*class=["']blog-card["'][^>]*>([\s\S]*?)<\/article>/gi,
  )) {
    const href = firstMatch(chunk, /<a\b[^>]*href=["']([^"']+)["']/i);
    if (!href) continue;
    cards.push({
      href,
      category: firstMatch(chunk, /<p class=["']blog-card-eyebrow["'][^>]*>([\s\S]*?)<\/p>/i),
      title: firstMatch(chunk, /<h2[^>]*>[\s\S]*?<a\b[^>]*>([\s\S]*?)<\/a>/i),
      description: firstMatch(chunk, /<p(?!\s+class)[^>]*>([\s\S]*?)<\/p>/i),
      meta: firstMatch(chunk, /<p class=["']blog-card-meta["'][^>]*>([\s\S]*?)<\/p>/i),
      ctaLabel: firstMatch(chunk, /<a\b[^>]*class=["']blog-card-cta["'][^>]*>([\s\S]*?)<\/a>/i),
    });
  }

  return {
    title: firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: firstMatch(
      html,
      /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i,
    ),
    canonical: firstMatch(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']*)["']/i),
    robots: firstMatch(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i),
    h1: firstMatch(main, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
    schema: extractSchema(html),
    subtitle,
    cards,
  };
}

async function main(): Promise<void> {
  const files = (await readdir(legacyRoot))
    .filter((file) => file.startsWith('blog') && file.endsWith('.html'))
    .sort();

  await mkdir(resolve(outDir, 'posts'), { recursive: true });

  const posts: PostJson[] = [];
  for (const file of files) {
    if (file === 'blog.html') continue;
    const html = await readFile(resolve(legacyRoot, file), 'utf8');
    const post = extractPost(file, html);
    posts.push(post);
    await writeFile(
      resolve(outDir, 'posts', `${post.slug}.json`),
      `${JSON.stringify(post, null, 2)}\n`,
      'utf8',
    );
  }

  const listingHtml = await readFile(resolve(legacyRoot, 'blog.html'), 'utf8');
  const listing = extractListing(listingHtml);
  await writeFile(resolve(outDir, 'listing.json'), `${JSON.stringify(listing, null, 2)}\n`, 'utf8');

  const withoutFaq = posts.filter((post) => post.faq.length === 0).map((post) => post.slug);
  console.log(`posts: ${posts.length}, listing cards: ${listing.cards.length}`);
  if (withoutFaq.length > 0) console.log(`posts without FAQ: ${withoutFaq.join(', ')}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
