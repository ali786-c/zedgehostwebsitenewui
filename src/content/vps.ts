import type { FaqItem, Feature, HeroData, Plan, ProductPageData } from './types';
import { seo } from './seo';

const specs = (cpu: string, ram: string, storage: string, transfer: string) => [
  { value: cpu, label: 'CPU Cores' },
  { value: ram, label: 'RAM' },
  { value: storage, label: 'SSD Storage' },
  { value: transfer, label: 'Data Transfer' },
  { value: 'Up to 10 Gbps', label: 'Shared Port' },
];

const commonMore = [
  'Full Root Access',
  'Server Management Panel',
  'VNC Access',
  'Full Server Control',
  'Optional WHMCS Integration',
  'Up to 10 Gbps Shared Port',
];

const plans: Plan[] = [
  {
    name: 'VPS Basic',
    tagline: 'Entry-level server for small websites',
    price: 1699,
    billing: 'monthly',
    note: 'Monthly billing. Root access included.',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/basic-vps',
    specs: specs('1 CPU Core', '2 GB', '40 GB', '2 TB'),
    more: commonMore,
  },
  {
    name: 'VPS Standard',
    tagline: 'More memory for growing applications',
    price: 2699,
    billing: 'monthly',
    note: 'Monthly billing. Root access included.',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/standard-vps',
    specs: specs('1 CPU Core', '4 GB', '80 GB', '4 TB'),
    more: commonMore,
  },
  {
    name: 'VPS Advanced',
    tagline: 'Extra power for busy workloads',
    price: 3999,
    billing: 'monthly',
    note: 'Monthly billing. Root access included.',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/professional-vps',
    popular: true,
    badge: 'Popular',
    specs: specs('2 CPU Cores', '6 GB', '120 GB', '6 TB'),
    more: commonMore,
  },
  {
    name: 'VPS Pro',
    tagline: 'Maximum resources for demanding projects',
    price: 4999,
    billing: 'monthly',
    note: 'Monthly billing. Root access included.',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/vps/professional-vps-2',
    specs: specs('2 CPU Cores', '8 GB', '160 GB', '8 TB'),
    more: commonMore,
  },
];

const hero: HeroData = {
  eyebrow: 'VPS Hosting Plans',
  title: 'Linux VPS Hosting Plans in Pakistan',
  subtitle:
    'Compare four VPS plans with 1–2 CPU cores, 2–8 GB RAM, 40–160 GB SSD storage, and flexible monthly pricing.',
  priceFrom: 1699,
  priceSuffix: 'month',
  chips: [
    { icon: 'server', label: '1–2 CPU Cores' },
    { icon: 'layers', label: '2–8 GB RAM' },
    { icon: 'database', label: '40–160 GB SSD Storage' },
    { icon: 'globe', label: 'Up to 10 Gbps Shared Port' },
    { icon: 'refresh', label: '2–8 TB Data Transfer' },
    { icon: 'code', label: 'Root Access & Full Control' },
  ],
  primaryCta: { label: 'Compare VPS Plans', href: '#plans' },
  secondaryCta: { label: 'Ask About VPS Plans', href: 'https://my.zedgehost.com/contact.php' },
  image: { src: '/assets/img/cloud-infrastructure.webp', alt: 'Linux VPS servers by ZedgeHost' },
  variant: 'dark',
};

const management: Feature[] = [
  {
    icon: 'server',
    title: 'Server Management',
    text: 'You can Start, Stop, Restart, Rebuild your VPS from the Server Management Panel.',
  },
  {
    icon: 'code',
    title: 'Full Root Access',
    text: 'With full root access, you get complete control to manage your server resources.',
  },
  {
    icon: 'gauge',
    title: 'VNC Access',
    text: 'VNC allows you quick access to your VPS for easy management.',
  },
  {
    icon: 'layers',
    title: 'WHMCS',
    text: 'Optionally, you can install & integrate WHMCS with your VPS Server seamlessly.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'What Linux VPS plans are available?',
    a: 'Choose VPS Basic at Rs 1,699 per month, VPS Standard at Rs 2,699 per month, VPS Advanced at Rs 3,999 per month, or VPS Pro at Rs 4,999 per month. Each plan has a different CPU, RAM, storage, and data transfer allocation. Every plan includes an up to 10 Gbps shared port, root access, and full server control.',
  },
  {
    q: 'What is included with VPS Basic?',
    a: 'VPS Basic includes 1 CPU Core, 2 GB RAM, 40 GB SSD storage, and 2 TB data transfer for Rs 1,699 per month.',
  },
  {
    q: 'What is included with VPS Standard?',
    a: 'VPS Standard includes 1 CPU Core, 4 GB RAM, 80 GB SSD storage, and 4 TB data transfer for Rs 2,699 per month.',
  },
  {
    q: 'What is included with VPS Advanced?',
    a: 'VPS Advanced includes 2 CPU Cores, 6 GB RAM, 120 GB SSD storage, and 6 TB data transfer for Rs 3,999 per month.',
  },
  {
    q: 'What is included with VPS Pro?',
    a: 'VPS Pro includes 2 CPU Cores, 8 GB RAM, 160 GB SSD storage, and 8 TB data transfer for Rs 4,999 per month.',
  },
  {
    q: 'Do all VPS plans include SSD storage?',
    a: 'Yes. Every VPS plan includes SSD storage: VPS Basic 40 GB, VPS Standard 80 GB, VPS Advanced 120 GB, and VPS Pro 160 GB.',
  },
];

export const linuxVpsPage: ProductPageData = {
  seo: seo.linuxVps,
  hero,
  plans: {
    eyebrow: 'VPS Plans',
    title: 'Compare VPS Plans and Monthly Prices',
    subtitle:
      'Choose the Linux VPS configuration that fits your workload. Every plan lists its processor, memory, storage, bandwidth, and monthly price.',
    note: 'Prices are in PKR by default — use the currency selector to switch to USD.',
    plans,
  },
  sections: [
    {
      kind: 'split',
      data: {
        eyebrow: 'VPS Hosting',
        title: 'Linux VPS Resources for Your Workload',
        text: 'A virtual private server gives you a separate server environment with allocated CPU, memory, storage, and bandwidth. Compare the listed resources before choosing a plan for a website, application, or development project.',
        points: [
          'Compare 1 or 2 CPU Cores',
          'Choose 2 GB, 4 GB, 6 GB, or 8 GB RAM',
          'Compare storage capacity and type',
        ],
        image: {
          src: '/assets/img/cloud-infrastructure.webp',
          alt: 'Linux VPS resources and infrastructure',
        },
        tone: 'mint',
      },
    },
    {
      kind: 'comparison',
      data: {
        eyebrow: 'Specifications',
        title: 'Compare VPS Storage and Data Transfer',
        subtitle:
          'Plan specifications differ by storage capacity and data transfer allowance. Review the exact resources included with each Linux VPS plan.',
      },
    },
    {
      kind: 'steps',
      data: {
        eyebrow: 'Getting Started',
        title: 'Need help choosing a Linux VPS?',
        subtitle:
          'Compare the four configurations above or contact our team with your workload and resource requirements.',
        items: [
          {
            title: 'Share your workload',
            text: 'Tell us what you plan to host so the team can help you compare the available CPU and memory options.',
          },
          {
            title: 'Confirm storage needs',
            text: 'VPS Basic lists 40 GB of SSD storage; VPS Standard lists 80 GB, VPS Advanced lists 120 GB, and VPS Pro lists 160 GB.',
          },
          {
            title: 'Check bandwidth requirements',
            text: 'VPS Basic includes 2 TB of data transfer, VPS Standard 4 TB, VPS Advanced 6 TB, and VPS Pro 8 TB. Every plan includes an up to 10 Gbps shared port.',
          },
        ],
      },
    },
    {
      kind: 'features',
      eyebrow: 'Management',
      title: 'VPS Server Management Options',
      subtitle:
        'Use the server management panel to control common VPS actions. This page lists available CPU, memory, storage, and bandwidth specifications for each plan.',
      features: management,
    },
  ],
  cta: {
    title: 'Need Help? Our Support Team Is Available 24/7',
    text: "Get expert assistance anytime through tickets or email. We're here to help you succeed online.",
    primary: { label: 'Contact Us', href: 'https://my.zedgehost.com/contact.php' },
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Explore our FAQ to find quick answers to the most common questions about our products and services.',
    items: faqs,
    cta: { label: 'Contact our support team', href: 'https://my.zedgehost.com/contact.php' },
  },
};
