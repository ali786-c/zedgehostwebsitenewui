import type { SeoData } from '../content/types';

const SITE_ORIGIN = 'https://zedgehost.com';
const OG_IMAGE = `${SITE_ORIGIN}/assets/img/og-card.webp`;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderSchema(schema: unknown[]): string {
  return schema
    .map((entry) => `<script type="application/ld+json">${JSON.stringify(entry)}</script>`)
    .join('\n    ');
}

export function renderHead(seo: SeoData): string {
  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}">`,
    seo.robots ? `<meta name="robots" content="${escapeHtml(seo.robots)}">` : '',
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Zedgehost Pakistan">`,
    `<meta property="og:locale" content="en_PK">`,
    `<meta property="og:url" content="${escapeHtml(seo.canonical)}">`,
    `<meta property="og:title" content="${escapeHtml(seo.title)}">`,
    `<meta property="og:description" content="${escapeHtml(seo.description)}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:site" content="@zedgehost">`,
    `<meta name="twitter:title" content="${escapeHtml(seo.title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(seo.description)}">`,
    `<link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">`,
    `<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/inter-400-normal.woff2" crossorigin>`,
    `<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/inter-700-normal.woff2" crossorigin>`,
    renderSchema(seo.schema),
  ];

  return tags.filter(Boolean).join('\n    ');
}
