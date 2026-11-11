import { sharedHostingPage } from '../content/shared';
import { ProductPage } from './ProductPage';

export function SharedHostingPage() {
  return <ProductPage data={sharedHostingPage} currentPath="shared-hosting.html" />;
}
