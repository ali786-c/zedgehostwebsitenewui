import type { FaqItem, HeroData, Plan, ProductPageData } from './types';
import {
  contactHref,
  genericHostingFaqs,
  industryFeatures,
  performanceSection,
  securitySection,
  supportCta,
  supportLinkCta,
  whyChooseFeatures,
} from './blocks';
import { sharedHostingPlans } from './plans/shared';
import { seo } from './seo';

const hero: HeroData = {
  eyebrow: 'Special Offer',
  title: 'Cheap Web Hosting in Pakistan starting from Rs. 1,499/Year',
  subtitle:
    'Get reliable and cheap web hosting in Pakistan with fast NVMe SSD performance, cPanel control panel, 99.9% uptime, free SSL certificate, and instant 24/7 local support for small businesses and startups.',
  priceFrom: 1499,
  priceSuffix: 'year',
  chips: [
    { icon: 'gauge', label: '99.99% Uptime Guarantee' },
    { icon: 'lock', label: 'Free SSL Certificate' },
    { icon: 'globe', label: 'Unlimited Bandwidth' },
    { icon: 'sparkles', label: '1-Click App Installer' },
    { icon: 'backup', label: 'Daily Backups' },
    { icon: 'headset', label: '24/7 Local Support' },
  ],
  primaryCta: { label: 'Get Started Now', href: '#plans' },
  secondaryCta: { label: 'Talk to an Expert', href: contactHref },
  image: { src: '/assets/img/hosting.webp', alt: 'ZedgeHost shared web hosting in Pakistan' },
  variant: 'light',
};

const plans = {
  eyebrow: 'Shared Hosting Plans',
  title: 'Affordable Web Hosting Plans in Pakistan',
  subtitle:
    'Experience ultra-fast loading speeds globally for seamless performance and reliability anywhere in the world.',
  note: 'All plans include free SSL, cPanel and 24/7 support.',
  plans: sharedHostingPlans.map<Plan>((plan) => ({ ...plan, ctaLabel: 'Get Started' })),
};

const introFaqs: FaqItem[] = [
  {
    q: 'What is the best hosting for new websites in Pakistan?',
    a: 'Shared hosting is best for startups and small businesses that need affordable pricing, simple setup, SSD performance, and reliable uptime.',
  },
  {
    q: 'Is SSD hosting faster?',
    a: 'Yes. SSD storage improves loading speeds, reduces server latency, and gives your website a better user experience.',
  },
  {
    q: 'Do I get free SSL with shared hosting?',
    a: 'Yes. Free SSL helps protect customer data, improves trust, and supports safe browsing on your website.',
  },
  {
    q: 'Can I move to a bigger plan later?',
    a: 'Absolutely. You can scale from shared hosting to VPS or cloud hosting as your website grows.',
  },
];

export const sharedHostingPage: ProductPageData = {
  seo: seo.sharedHosting,
  hero,
  plans,
  sections: [
    {
      kind: 'split',
      data: performanceSection(
        '/assets/img/cloud-infrastructure.webp',
        'Shared hosting infrastructure by ZedgeHost',
      ),
    },
    {
      kind: 'features',
      eyebrow: 'Features',
      title: 'Reliable Hosting Backed by Industry-Leading Features',
      subtitle:
        'All hosting types with the features you’ll need. One platform. Ready to deploy, scale, and grow.',
      features: industryFeatures,
    },
    {
      kind: 'split',
      data: securitySection(
        '/assets/img/security.webp',
        'Advanced security for shared hosting',
      ),
    },
    {
      kind: 'features',
      eyebrow: 'Benefits',
      title: 'Why Choose Us?',
      subtitle:
        'Choose our hosting for unmatched speed, reliable uptime, advanced security, and 24/7 expert support designed to keep your website running at its best.',
      features: whyChooseFeatures,
      tone: 'mint',
    },
  ],
  cta: supportCta,
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Explore our FAQ to find quick answers to the most common questions about our products and services.',
    items: [...introFaqs, ...genericHostingFaqs],
    cta: supportLinkCta,
  },
};
