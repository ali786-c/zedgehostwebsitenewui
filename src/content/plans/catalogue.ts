import type { Plan } from '../types';
import { contactHref } from '../blocks';

const specs = (websites: string, emails: string) => [
  { value: websites, label: 'Websites' },
  { value: 'Included', label: 'Free Domain Name' },
  { value: 'Unlimited', label: 'Free Domains' },
  { value: 'Fast SSD', label: 'Storage' },
  { value: emails, label: 'Email & Domain' },
  { value: 'Included', label: 'WP Installer' },
  { value: 'Free', label: 'SSL Certificate' },
  { value: 'Included', label: 'Free Migration' },
  { value: 'Included', label: 'WP Website Builder' },
];

const note = 'Renews at Rs 2,203 /mo for 2 years. Cancel anytime.';

/**
 * Plan set displayed on the catalogue pages that shared one generic pricing block
 * in the legacy site (reseller, Windows reseller, email, SiteLock, backup, SSL).
 */
export const cataloguePlans: Plan[] = [
  {
    name: 'Basic',
    tagline: 'The Perfect Start for Your Hosting Journey',
    price: 2203,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    specs: specs('1', '10'),
    more: [],
  },
  {
    name: 'Premium',
    tagline: 'The Perfect Start for Your Hosting Journey',
    price: 624,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    popular: true,
    badge: 'Most Popular',
    specs: specs('Unlimited', 'Unlimited'),
    more: [],
  },
  {
    name: 'Business',
    tagline: 'The Perfect Start for Your Hosting Journey',
    price: 3077,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    specs: specs('10', '100'),
    more: [],
  },
];
