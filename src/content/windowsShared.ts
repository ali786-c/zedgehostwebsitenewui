import type { ProductPageData } from './types';
import { cataloguePlans } from './plans/catalogue';
import {
  contactHref,
  genericHostingFaqs,
  performanceSection,
  supportCta,
  supportLinkCta,
  whyChooseFeatures,
} from './blocks';
import { seo } from './seo';

export const windowsSharedPage: ProductPageData = {
  seo: seo.windowsShared,
  hero: {
    eyebrow: 'Special Offer',
    title: 'Windows Hosting in Pakistan for ASP.NET Websites & Business Apps',
    subtitle:
      'Run your ASP.NET website or business application on reliable Windows hosting in Pakistan with secure performance and easy management.',
    priceFrom: 1117,
    priceSuffix: 'month',
    chips: [
      { icon: 'gauge', label: '99.99% Uptime Guarantee' },
      { icon: 'lock', label: 'Free SSL Certificate' },
      { icon: 'code', label: 'ASP.NET Support' },
      { icon: 'database', label: 'MSSQL & MySQL Databases' },
      { icon: 'layers', label: 'Plesk Control Panel' },
      { icon: 'headset', label: '24/7 Expert Support' },
    ],
    primaryCta: { label: 'Get Started Now', href: contactHref },
    secondaryCta: { label: 'Talk to an Expert', href: contactHref },
    image: { src: '/assets/img/hosting.webp', alt: 'Windows shared hosting in Pakistan' },
    variant: 'light',
  },
  plans: {
    eyebrow: 'Windows Hosting Plans',
    title: 'Hosting Plans Built for Your Growth',
    subtitle:
      'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
    plans: cataloguePlans,
  },
  sections: [
    {
      kind: 'split',
      data: performanceSection(
        '/assets/img/cloud-infrastructure.webp',
        'Windows hosting infrastructure by ZedgeHost',
      ),
    },
    {
      kind: 'groups',
      data: {
        eyebrow: 'Technical Details',
        title: 'Under the hood',
        groups: [
          {
            title: 'State-of-the-Art Servers',
            items: [
              'Dual Intel Xeon Processor E5-2630',
              '64 GB RAM',
              '256 GB SSD in RAID 1',
              'Octa Core with 2.40 GHz',
              '2 TB SATA in RAID 1',
            ],
          },
          {
            title: 'Program in Any Language',
            items: [
              'Windows Server 2008',
              'IIS 7.0, ASP 10.0, ASP.NET 3.5, ASP.NET 4.8, PHP 7.2, 7.3, 7.4, 8.0, 8.1 and 8.2, GD, cURL, CGI, mcrypt',
              'MySQL 8 and above, MSSQL 2012',
              'Ruby On Rails',
              'Zend Optimizer, Zend Engine, ionCube Loader',
            ],
          },
          {
            title: 'Top-Notch Security',
            items: [
              'Anti Spam & Virus Protection',
              'Password Protect Directories',
              'Secure FTP Access',
              'IP Blocking',
              'phpMyAdmin Access',
              'Hotlink & Leech Protection',
              'Cron Jobs for Scheduled Tasks',
              'Customizable Error Page',
              'Advanced Website Statistics',
            ],
          },
        ],
      },
    },
    {
      kind: 'split',
      data: {
        eyebrow: 'Security',
        title: 'Advanced Security for Your Website',
        text: 'Protect your website with enterprise-grade security features, proactive threat monitoring, malware protection, and advanced firewalls, ensuring your data remains secure, reliable, and accessible at all times.',
        points: [
          'Advanced Firewall Protection',
          'Real-Time Malware Scanning',
          'Free SSL Certificates',
          'Automated Daily Backups',
        ],
        icon: 'shield',
        image: { src: '/assets/img/security.webp', alt: 'Windows hosting security' },
        reverse: true,
      },
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
    items: genericHostingFaqs,
    cta: supportLinkCta,
  },
};
