import type { Plan } from '../types';

export interface VpsPlanMeta {
  plan: Plan;
  /** Slug of the plan's own landing page (legacy .html filename). */
  detailPage: string;
  h1: string;
  summary: string;
}

const cpu = (value: string) => ({ value, label: 'CPU Cores' });
const ram = (value: string) => ({ value, label: 'RAM' });
const storage = (value: string) => ({ value, label: 'SSD Storage' });
const transfer = (value: string) => ({ value, label: 'Data Transfer' });
const port = { value: 'Up to 10 Gbps', label: 'Shared Port' };

const more = [
  'Full Root Access',
  'Server Management Panel',
  'VNC Access',
  'Full Server Control',
  'Optional WHMCS Integration',
  'Up to 10 Gbps Shared Port',
];

const note = 'Monthly billing. Root access included.';

export const vpsPlans: Plan[] = [
  {
    name: 'VPS Basic',
    tagline: 'Entry-level server for small websites',
    price: 1699,
    billing: 'monthly',
    note,
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/basic-vps',
    specs: [cpu('1 CPU Core'), ram('2 GB'), storage('40 GB'), transfer('2 TB'), port],
    more,
  },
  {
    name: 'VPS Standard',
    tagline: 'More memory for growing applications',
    price: 2699,
    billing: 'monthly',
    note,
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/standard-vps',
    specs: [cpu('1 CPU Core'), ram('4 GB'), storage('80 GB'), transfer('4 TB'), port],
    more,
  },
  {
    name: 'VPS Advanced',
    tagline: 'Extra power for busy workloads',
    price: 3999,
    billing: 'monthly',
    note,
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/professional-vps',
    popular: true,
    badge: 'Popular',
    specs: [cpu('2 CPU Cores'), ram('6 GB'), storage('120 GB'), transfer('6 TB'), port],
    more,
  },
  {
    name: 'VPS Pro',
    tagline: 'Maximum resources for demanding projects',
    price: 4999,
    billing: 'monthly',
    note,
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/professional-vps-2',
    specs: [cpu('2 CPU Cores'), ram('8 GB'), storage('160 GB'), transfer('8 TB'), port],
    more,
  },
];

/** Detail page metadata for each VPS plan's own legacy landing page. */
export const vpsPlanMeta: Record<string, VpsPlanMeta> = {
  'basic-vps-hosting': {
    plan: vpsPlans[0],
    detailPage: 'basic-vps-hosting.html',
    h1: 'VPS Basic',
    summary:
      'Linux VPS hosting with 1 CPU Core, 2 GB RAM, 40 GB SSD Storage, and 2 TB monthly data transfer.',
  },
  'standard-vps-hosting': {
    plan: vpsPlans[1],
    detailPage: 'standard-vps-hosting.html',
    h1: 'VPS Standard',
    summary:
      'Linux VPS hosting with 1 CPU Core, 4 GB RAM, 80 GB SSD Storage, and 4 TB monthly data transfer.',
  },
  'professional-vps-hosting': {
    plan: vpsPlans[2],
    detailPage: 'professional-vps-hosting.html',
    h1: 'VPS Advanced',
    summary:
      'Linux VPS hosting with 2 CPU Cores, 6 GB RAM, 120 GB SSD Storage, and 6 TB monthly data transfer.',
  },
  'pro-vps-hosting': {
    plan: vpsPlans[3],
    detailPage: 'pro-vps-hosting.html',
    h1: 'VPS Pro',
    summary:
      'Linux VPS hosting with 2 CPU Cores, 8 GB RAM, 160 GB SSD Storage, and 8 TB monthly data transfer.',
  },
};
