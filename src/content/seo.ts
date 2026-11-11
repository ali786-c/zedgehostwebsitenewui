import seoData from './seo.json';
import productSeoData from './seo-products.json';
import type { SeoData } from './types';

const legacy = seoData as unknown as Record<string, SeoData>;
const products = productSeoData as unknown as Record<string, SeoData>;

function requireSeo(source: Record<string, SeoData>, key: string): SeoData {
  const value = source[key];
  if (!value) {
    throw new Error(`Missing SEO data for "${key}"`);
  }
  return value;
}

/** Single typed entry point for every page's meta and structured data. */
export const seo = {
  home: requireSeo(legacy, 'home'),
  cloud: requireSeo(legacy, 'cloud'),
  about: requireSeo(legacy, 'about'),
  sharedHosting: requireSeo(products, 'shared-hosting'),
  wordpressHosting: requireSeo(products, 'wordpress-hosting'),
  linuxVps: requireSeo(products, 'linux-vps-server'),
};
