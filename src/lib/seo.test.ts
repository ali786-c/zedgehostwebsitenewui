import { describe, expect, it } from 'vitest';
import { escapeHtml, renderHead, renderSchema } from './seo';
import type { SeoData } from '../content/types';

const seo: SeoData = {
  title: 'Web Hosting in Pakistan | Fast, Cheap & Reliable - ZedgeHost',
  description: 'Looking for the best web hosting in Pakistan? Start for Rs. 1,499/year.',
  canonical: 'https://zedgehost.com/',
  robots: 'index, follow',
  schema: [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'Zedgehost' }],
};

describe('escapeHtml', () => {
  it('escapes markup characters in text', () => {
    expect(escapeHtml('<a href="x">&</a>')).toBe('&lt;a href=&quot;x&quot;&gt;&amp;&lt;/a&gt;');
  });
});

describe('renderHead', () => {
  it('renders title, description, canonical and robots', () => {
    const html = renderHead(seo);
    expect(html).toContain('<title>Web Hosting in Pakistan | Fast, Cheap &amp; Reliable - ZedgeHost</title>');
    expect(html).toContain('name="description"');
    expect(html).toContain('rel="canonical" href="https://zedgehost.com/"');
    expect(html).toContain('name="robots" content="index, follow"');
    expect(html).toContain('og:title');
  });

  it('includes a valid JSON-LD block', () => {
    const html = renderHead(seo);
    expect(html).toContain('application/ld+json');
    expect(html).toContain('"@type":"Organization"');
  });
});

describe('renderSchema', () => {
  it('renders one script tag per schema entry', () => {
    const html = renderSchema([{ a: 1 }, { b: 2 }]);
    expect(html.match(/<script/g)).toHaveLength(2);
  });
});
