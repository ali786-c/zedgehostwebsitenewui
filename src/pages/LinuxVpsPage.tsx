import { linuxVpsPage } from '../content/vps';
import { ProductPage } from './ProductPage';

export function LinuxVpsPage() {
  return <ProductPage data={linuxVpsPage} currentPath="linux-vps-server.html" />;
}
