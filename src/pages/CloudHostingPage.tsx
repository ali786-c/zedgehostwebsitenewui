import { cloudPage } from '../content/cloud';
import { ProductPage } from './ProductPage';

export function CloudHostingPage() {
  return <ProductPage data={cloudPage} currentPath="cloud-hosting.html" />;
}
