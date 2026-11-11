import type { ComponentType } from 'react';
import type { SeoData } from '../content/types';
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import {
  BasicVpsPage,
  BulkRegisterPage,
  BulkTransferPage,
  DomainPromosPage,
  DomainSearchPage,
  DomainTransferPage,
  FreeGtldsPage,
  NameSuggestionPage,
  NewGtldsPage,
  PremiumDomainPage,
  BusinessEmailPage,
  CloudHostingPage,
  DedicatedServerPage,
  DigicertPage,
  EnterpriseEmailPage,
  LinuxVpsPage,
  ProVpsPage,
  ProfessionalVpsPage,
  ResellerHostingPage,
  SharedHostingPage,
  SiteLockPage,
  StandardVpsPage,
  WebsiteBackupPage,
  WindowsDedicatedPage,
  WindowsResellerPage,
  WindowsSharedPage,
  WordPressHostingPage,
} from '../pages/productRoutes';
import { aboutSeo } from '../content/about';
import { homeSeo } from '../content/home';
import { seo } from '../content/seo';

export interface RouteDefinition {
  key: string;
  path: string;
  output: string;
  Page: ComponentType;
  seo: SeoData;
}

/** Builds a route for a page whose filename must match the legacy site exactly. */
function productRoute(output: string, Page: ComponentType, pageSeo: SeoData): RouteDefinition {
  return { key: output.replace(/\.html$/, ''), path: `/${output}`, output, Page, seo: pageSeo };
}

export const routes: RouteDefinition[] = [
  { key: 'home', path: '/', output: 'index.html', Page: HomePage, seo: homeSeo },
  { key: 'about-us', path: '/about-us.html', output: 'about-us.html', Page: AboutPage, seo: aboutSeo },
  productRoute('cloud-hosting.html', CloudHostingPage, seo.cloud),
  productRoute('shared-hosting.html', SharedHostingPage, seo.sharedHosting),
  productRoute('wordpress-hosting.html', WordPressHostingPage, seo.wordpressHosting),
  productRoute('linux-vps-server.html', LinuxVpsPage, seo.linuxVps),
  productRoute('basic-vps-hosting.html', BasicVpsPage, seo.basicVps),
  productRoute('standard-vps-hosting.html', StandardVpsPage, seo.standardVps),
  productRoute('professional-vps-hosting.html', ProfessionalVpsPage, seo.professionalVps),
  productRoute('pro-vps-hosting.html', ProVpsPage, seo.proVps),
  productRoute('reseller-hosting.html', ResellerHostingPage, seo.resellerHosting),
  productRoute('windows-reseller.html', WindowsResellerPage, seo.windowsReseller),
  productRoute('dedicated-server.html', DedicatedServerPage, seo.dedicatedServer),
  productRoute('windows-dedicated.html', WindowsDedicatedPage, seo.windowsDedicated),
  productRoute('windows-shared-hosting.html', WindowsSharedPage, seo.windowsShared),
  productRoute('bussiness-email.html', BusinessEmailPage, seo.businessEmail),
  productRoute('enterprise-email.html', EnterpriseEmailPage, seo.enterpriseEmail),
  productRoute('siteLock.html', SiteLockPage, seo.siteLock),
  productRoute('website-backup.html', WebsiteBackupPage, seo.websiteBackup),
  productRoute('digicert-certificate.html', DigicertPage, seo.digicert),
  productRoute('domain-search.html', DomainSearchPage, seo.domainSearch),
  productRoute('domain-transfer.html', DomainTransferPage, seo.domainTransfer),
  productRoute('premium-domain.html', PremiumDomainPage, seo.premiumDomain),
  productRoute('new-gtlds.html', NewGtldsPage, seo.newGtlds),
  productRoute('free-gtlds.html', FreeGtldsPage, seo.freeGtlds),
  productRoute('domain-promos.html', DomainPromosPage, seo.domainPromos),
  productRoute('bulk-transfer.html', BulkTransferPage, seo.bulkTransfer),
  productRoute('domain-bulk-register.html', BulkRegisterPage, seo.bulkRegister),
  productRoute('domain-name-suggestion.html', NameSuggestionPage, seo.domainSuggestion),
];

export function getRoute(key: string): RouteDefinition | undefined {
  return routes.find((route) => route.key === key);
}
