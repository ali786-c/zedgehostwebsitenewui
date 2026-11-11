import type { ComponentType } from 'react';
import type { ProductPageData } from '../content/types';
import { ProductPage } from './ProductPage';

import { cloudPage } from '../content/cloud';
import { sharedHostingPage } from '../content/shared';
import { wordpressHostingPage } from '../content/wordpress';
import { linuxVpsPage } from '../content/vps';
import { resellerHostingPage, windowsResellerPage } from '../content/reseller';
import { dedicatedServerPage, windowsDedicatedPage } from '../content/dedicated';
import { windowsSharedPage } from '../content/windowsShared';
import { businessEmailPage, enterpriseEmailPage } from '../content/email';
import { digicertPage, siteLockPage, websiteBackupPage } from '../content/security';
import {
  bulkRegisterPage,
  bulkTransferPage,
  domainPromosPage,
  domainSearchPage,
  domainTransferPage,
  freeGtldsPage,
  nameSuggestionPage,
  newGtldsPage,
  premiumDomainPage,
} from '../content/domains';
import {
  basicVpsPage,
  proVpsPage,
  professionalVpsPage,
  standardVpsPage,
} from '../content/vpsDetail';

/** Binds page data to the shared template; there is no per-page layout code. */
function productRoute(data: ProductPageData, currentPath: string): ComponentType {
  return function ProductRoute() {
    return <ProductPage data={data} currentPath={currentPath} />;
  };
}

export const CloudHostingPage = productRoute(cloudPage, 'cloud-hosting.html');
export const SharedHostingPage = productRoute(sharedHostingPage, 'shared-hosting.html');
export const WordPressHostingPage = productRoute(
  wordpressHostingPage,
  'wordpress-hosting.html',
);
export const LinuxVpsPage = productRoute(linuxVpsPage, 'linux-vps-server.html');
export const BasicVpsPage = productRoute(basicVpsPage, 'basic-vps-hosting.html');
export const StandardVpsPage = productRoute(standardVpsPage, 'standard-vps-hosting.html');
export const ProfessionalVpsPage = productRoute(
  professionalVpsPage,
  'professional-vps-hosting.html',
);
export const ProVpsPage = productRoute(proVpsPage, 'pro-vps-hosting.html');
export const ResellerHostingPage = productRoute(resellerHostingPage, 'reseller-hosting.html');
export const WindowsResellerPage = productRoute(windowsResellerPage, 'windows-reseller.html');
export const DedicatedServerPage = productRoute(dedicatedServerPage, 'dedicated-server.html');
export const WindowsDedicatedPage = productRoute(
  windowsDedicatedPage,
  'windows-dedicated.html',
);
export const WindowsSharedPage = productRoute(windowsSharedPage, 'windows-shared-hosting.html');
export const BusinessEmailPage = productRoute(businessEmailPage, 'bussiness-email.html');
export const EnterpriseEmailPage = productRoute(enterpriseEmailPage, 'enterprise-email.html');
export const SiteLockPage = productRoute(siteLockPage, 'siteLock.html');
export const WebsiteBackupPage = productRoute(websiteBackupPage, 'website-backup.html');
export const DigicertPage = productRoute(digicertPage, 'digicert-certificate.html');

export const DomainSearchPage = productRoute(domainSearchPage, 'domain-search.html');
export const DomainTransferPage = productRoute(domainTransferPage, 'domain-transfer.html');
export const PremiumDomainPage = productRoute(premiumDomainPage, 'premium-domain.html');
export const NewGtldsPage = productRoute(newGtldsPage, 'new-gtlds.html');
export const FreeGtldsPage = productRoute(freeGtldsPage, 'free-gtlds.html');
export const DomainPromosPage = productRoute(domainPromosPage, 'domain-promos.html');
export const BulkTransferPage = productRoute(bulkTransferPage, 'bulk-transfer.html');
export const BulkRegisterPage = productRoute(bulkRegisterPage, 'domain-bulk-register.html');
export const NameSuggestionPage = productRoute(
  nameSuggestionPage,
  'domain-name-suggestion.html',
);
