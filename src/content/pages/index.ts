import type { ArticleBlock, ArticleInline, ContentPageData } from '../types';

import bestWebHosting from './best-web-hosting-in-pakistan.json';
import bestWordPressHosting from './best-wordpress-hosting-in-pakistan.json';
import howItWorks from './how-it-works.json';
import howToBuy from './how-to-buy-domain-and-hosting-in-pakistan.json';
import howToRegisterPk from './how-to-register-pk-domain-in-pakistan.json';
import legal from './legal.json';
import policy from './policy.json';
import refundPolicy from './refund-policy.json';

/**
 * Shape produced by `scripts/extract-pages.ts`. The JSON is generated from the
 * legacy HTML, so copy is never retyped; this file only maps it onto the shared
 * `ContentPageData` model.
 */
interface ExtractedPage {
  slug: string;
  output: string;
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string;
  schema: unknown[];
  lead: ArticleInline[];
  blocks: ArticleBlock[];
  faq?: { items: { q: string; a: string }[] };
  cta?: { content: ArticleInline[]; cta: { label: string; href: string } };
}

function toContentPage(raw: ExtractedPage): ContentPageData {
  return {
    seo: {
      title: raw.title,
      description: raw.description,
      canonical: raw.canonical,
      robots: raw.robots,
      schema: raw.schema,
    },
    output: raw.output,
    title: raw.h1,
    lead: raw.lead.length > 0 ? raw.lead : undefined,
    blocks: raw.blocks,
    faq: raw.faq,
    cta: raw.cta,
  };
}

const pages: ExtractedPage[] = [
  howItWorks,
  bestWebHosting,
  bestWordPressHosting,
  howToBuy,
  howToRegisterPk,
  legal,
  policy,
  refundPolicy,
] as unknown as ExtractedPage[];

export const contentPages = pages.map(toContentPage);

export function contentPage(output: string): ContentPageData {
  const page = contentPages.find((entry) => entry.output === output);
  if (!page) throw new Error(`Missing content page "${output}"`);
  return page;
}
