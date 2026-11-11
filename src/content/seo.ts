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
  resellerHosting: requireSeo(products, 'reseller-hosting'),
  dedicatedServer: requireSeo(products, 'dedicated-server'),
  windowsShared: requireSeo(products, 'windows-shared-hosting'),
  windowsDedicated: requireSeo(products, 'windows-dedicated'),
  windowsReseller: requireSeo(products, 'windows-reseller'),
  basicVps: requireSeo(products, 'basic-vps-hosting'),
  standardVps: requireSeo(products, 'standard-vps-hosting'),
  professionalVps: requireSeo(products, 'professional-vps-hosting'),
  proVps: requireSeo(products, 'pro-vps-hosting'),
  businessEmail: requireSeo(products, 'bussiness-email'),
  enterpriseEmail: requireSeo(products, 'enterprise-email'),
  siteLock: requireSeo(products, 'siteLock'),
  websiteBackup: requireSeo(products, 'website-backup'),
  digicert: requireSeo(products, 'digicert-certificate'),
  domainSearch: requireSeo(products, 'domain-search'),
  domainTransfer: requireSeo(products, 'domain-transfer'),
  premiumDomain: requireSeo(products, 'premium-domain'),
  newGtlds: requireSeo(products, 'new-gtlds'),
  freeGtlds: requireSeo(products, 'free-gtlds'),
  domainPromos: requireSeo(products, 'domain-promos'),
  bulkTransfer: requireSeo(products, 'bulk-transfer'),
  bulkRegister: requireSeo(products, 'domain-bulk-register'),
  domainSuggestion: requireSeo(products, 'domain-name-suggestion'),
};
