import type { FaqItem, HeroData, ProductPageData, ProductSection, SeoData } from './types';
import { dedicatedPlans } from './plans/dedicated';
import {
  contactHref,
  industryFeatures,
  supportCta,
  supportLinkCta,
  whyChooseFeatures,
} from './blocks';
import { seo } from './seo';

const faqs: FaqItem[] = [
  {
    q: 'Which hosting control panels do you offer?',
    a: 'You can buy Plesk or cPanel license during the server purchase, or at a later time when the need arises.',
  },
  {
    q: 'Which billing panels do you offer?',
    a: 'We offer WHMCS as a billing panel for your dedicated server. You can purchase the license from us at a minimal cost and install the application on your dedicated server.',
  },
  {
    q: 'What are the functions of the Server Administration Panel?',
    a: 'Every server comes with its Server Administration Panel by default. This panel allows you to carry out crucial server administration tasks and monitor resource consumption like GUI-based CPU, Memory, Storage & Inodes utilisation, IPs and Storage (for HDD servers only) details and functions to Rebuild, Restart, Web-based VNC and reset access credentials.',
  },
  {
    q: 'Can I configure my own RAID for drives?',
    a: 'The Dedicated Servers come pre-configured with RAID 1. At present, we don’t allow customisation of RAID level. Would love to hear about such new features requests to help us serve you better.',
  },
  {
    q: 'Can I use a Dedicated Server for email marketing?',
    a: 'Dedicated Servers can be used for Websites, Databases, Custom Applications, Ecommerce, DNS, File Storage and Emails. Emails, however, must be restricted to personal, organisational or professional purposes. The use of Dedicated Servers to send out mass emails/marketing is NOT recommended and can attract penalties.',
  },
  {
    q: 'Can I use virtualisation software on the server?',
    a: 'Our Dedicated Servers are virtualised (1:1). Thus, nested virtualisation will not work due to network restrictions on the host system.',
  },
];

const sections: ProductSection[] = [
  {
    kind: 'split',
    data: {
      eyebrow: 'Performance',
      title: 'Maximum Performance, Total Control',
      text: 'Enjoy premium features without paying extra. From advanced DDoS protection and SSD storage to a free control panel and full root access, ZedgeHost includes everything you need to run a fast, secure, and scalable server - at no additional cost.',
      points: [
        'Powerful Configurations',
        'Quick Provisioning',
        'Server Administration Panel',
        'Additional Storage*',
      ],
      image: {
        src: '/assets/img/cloud-infrastructure.webp',
        alt: 'Dedicated server infrastructure by ZedgeHost',
      },
      tone: 'mint',
    },
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
    kind: 'features',
    eyebrow: 'Benefits',
    title: 'Why Choose Us?',
    subtitle:
      'Choose our hosting for unmatched speed, reliable uptime, advanced security, and 24/7 expert support designed to keep your website running at its best.',
    features: whyChooseFeatures,
    tone: 'mint',
  },
];

function dedicatedPage(seoData: SeoData, hero: HeroData): ProductPageData {
  return {
    seo: seoData,
    hero,
    plans: {
      eyebrow: 'Dedicated Server Plans',
      title: 'Hosting Plans Built for Your Growth',
      subtitle:
        'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
      note: 'Every server includes full root access and the Server Administration Panel.',
      plans: dedicatedPlans,
    },
    sections,
    cta: supportCta,
    faq: {
      title: 'Frequently Asked Questions',
      subtitle:
        'Explore our FAQ to find quick answers to the most common questions about our products and services.',
      items: faqs,
      cta: supportLinkCta,
    },
  };
}

export const dedicatedServerPage = dedicatedPage(seo.dedicatedServer, {
  eyebrow: 'Special Offer',
  title: 'Powerful Dedicated Servers for Maximum Performance',
  priceFrom: 22397,
  priceSuffix: 'month',
  chips: [
    { icon: 'server', label: '100% Dedicated Resources' },
    { icon: 'code', label: 'Full Root Access' },
    { icon: 'database', label: 'Enterprise NVMe Storage' },
    { icon: 'shield', label: 'Advanced DDoS Protection' },
  ],
  primaryCta: { label: 'Configure Server', href: contactHref },
  secondaryCta: { label: 'Talk to an Expert', href: contactHref },
  image: { src: '/assets/img/cloud-infrastructure.webp', alt: 'Dedicated servers in Pakistan' },
  variant: 'dark',
});

export const windowsDedicatedPage = dedicatedPage(seo.windowsDedicated, {
  eyebrow: 'Special Offer',
  title: 'High-Performance Windows Dedicated Servers',
  priceFrom: 25197,
  priceSuffix: 'month',
  chips: [
    { icon: 'layers', label: 'Windows Server OS Included' },
    { icon: 'code', label: 'Full Administrator Access' },
    { icon: 'database', label: 'Enterprise NVMe SSD Storage' },
    { icon: 'server', label: 'Remote Desktop Access (RDP)' },
  ],
  primaryCta: { label: 'Configure Server', href: contactHref },
  secondaryCta: { label: 'Talk to an Expert', href: contactHref },
  image: {
    src: '/assets/img/cloud-infrastructure.webp',
    alt: 'Windows dedicated servers in Pakistan',
  },
  variant: 'dark',
});
