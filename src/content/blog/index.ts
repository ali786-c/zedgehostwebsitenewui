import type { ArticleInline, BlogCardData, BlogIndexData, BlogPostData, SeoData } from '../types';

import buyCheapDomain from './posts/blog-buy-cheap-com-domain-pakistan.json';
import hostingBahawalpur from './posts/blog-cheap-web-hosting-bahawalpur.json';
import hostingFaisalabad from './posts/blog-cheap-web-hosting-faisalabad.json';
import hostingHyderabad from './posts/blog-cheap-web-hosting-hyderabad.json';
import hostingIslamabad from './posts/blog-cheap-web-hosting-islamabad.json';
import hostingKarachi from './posts/blog-cheap-web-hosting-karachi.json';
import hostingLahore from './posts/blog-cheap-web-hosting-lahore.json';
import hostingMultan from './posts/blog-cheap-web-hosting-multan.json';
import hostingPakistan from './posts/blog-cheap-web-hosting-pakistan.json';
import hostingPeshawar from './posts/blog-cheap-web-hosting-peshawar.json';
import hostingQuetta from './posts/blog-cheap-web-hosting-quetta.json';
import hostingRawalpindi from './posts/blog-cheap-web-hosting-rawalpindi.json';
import hostingSialkot from './posts/blog-cheap-web-hosting-sialkot.json';
import hostingCost from './posts/blog-web-hosting-cost-pakistan.json';
import listingJson from './listing.json';

interface RawPost {
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
  answer: ArticleInline[];
  blocks: BlogPostData['blocks'];
  cta: BlogPostData['cta'];
  faq: BlogPostData['faq'];
}

interface RawListing {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  h1: string;
  schema: unknown[];
  subtitle: string;
  cards: BlogCardData[];
}

const HERO = { src: '/assets/img/blog-hosting.webp', alt: 'ZedgeHost hosting servers' };

function toPost(raw: RawPost): BlogPostData {
  const seo: SeoData = {
    title: raw.title,
    description: raw.description,
    canonical: raw.canonical,
    robots: raw.robots,
    schema: raw.schema,
  };

  return {
    slug: raw.slug,
    title: raw.title,
    h1: raw.h1,
    breadcrumb: raw.crumb,
    category: raw.category,
    author: raw.author,
    date: raw.date,
    dateISO: raw.dateISO,
    readTime: raw.readTime,
    hero: raw.hero,
    answer: raw.answer,
    blocks: raw.blocks,
    cta: raw.cta,
    faq: raw.faq,
    seo,
  };
}

const rawPosts: RawPost[] = [
  hostingPakistan,
  hostingBahawalpur,
  hostingHyderabad,
  hostingSialkot,
  hostingQuetta,
  hostingPeshawar,
  hostingMultan,
  hostingRawalpindi,
  hostingFaisalabad,
  hostingIslamabad,
  hostingKarachi,
  hostingLahore,
  hostingCost,
  buyCheapDomain,
] as unknown as RawPost[];

/** Newest first, matching the legacy listing order. */
export const blogPosts: BlogPostData[] = rawPosts
  .map(toPost)
  .sort((a, b) => b.dateISO.localeCompare(a.dateISO));

const rawListing = listingJson as unknown as RawListing;

const cards: BlogCardData[] = rawListing.cards.map((card) => ({ ...card }));

export const blogIndex: BlogIndexData = {
  title: rawListing.h1,
  intro: rawListing.subtitle,
  hero: HERO,
  categories: [...new Set(cards.map((card) => card.category))],
  cards,
  seo: {
    title: rawListing.title,
    description: rawListing.description,
    canonical: rawListing.canonical,
    robots: rawListing.robots,
    schema: rawListing.schema,
  },
};

export function getBlogPost(slug: string): BlogPostData {
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) throw new Error(`Unknown blog post: ${slug}`);
  return post;
}

/** Same-category posts first, newest first; used for the "keep reading" block. */
export function relatedPosts(post: BlogPostData, limit = 3): BlogPostData[] {
  const others = blogPosts.filter((entry) => entry.slug !== post.slug);
  const sameCategory = others.filter((entry) => entry.category === post.category);
  const rest = others.filter((entry) => entry.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Legacy breadcrumb crumb text is per post; the rest of the trail is shared. */
export function breadcrumbTrail(post: BlogPostData): { label: string; href?: string }[] {
  return [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: 'blog.html' },
    { label: post.breadcrumb },
  ];
}
