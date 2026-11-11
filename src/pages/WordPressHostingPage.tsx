import { wordpressHostingPage } from '../content/wordpress';
import { ProductPage } from './ProductPage';

export function WordPressHostingPage() {
  return <ProductPage data={wordpressHostingPage} currentPath="wordpress-hosting.html" />;
}
