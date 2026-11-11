import type { FaqItem, Feature, HeroData, ProductSection, SeoData } from './types';
import {
  cataloguePlans,
} from './plans/catalogue';
import { contactHref, performanceSection, supportCta, supportLinkCta } from './blocks';
import { seo } from './seo';

const resellerFeqs: FaqItem[] = [
  {
    q: 'What is reseller hosting?',
    a: 'Reseller Hosting allows you to create sub-packages within the allotted Disk Space and Bandwidth of your main Hosting package. You can use WHM to create Individual Custom packages (each with cPanel) and provision them to your Customers. Additionally, you can use WHMCS for billing (Not supported on the base plan).',
  },
  {
    q: 'Which Control Panels do I get with a Reseller Hosting package?',
    a: 'All Reseller Hosting packages come with 2 separate Control Panels - WHM and cPanel. WHM gives you administrative control of your Reseller Hosting package and cPanel allows your Customers to manage their individual Hosting packages.',
  },
  {
    q: 'How can I create Sub-Packages and manage them?',
    a: 'Your WHM Control Panel allows you to create individual Hosting packages and completely manage them.',
  },
  {
    q: 'How can my Customers manage their Individual Packages?',
    a: 'Your Customers will be able to manage their own packages using cPanel.',
  },
  {
    q: 'What are the advantages of reseller hosting?',
    a: "If you're a Web Designer/Developer you can host and manage all your websites/clients with one Reseller Hosting package instead of going through the hassle of managing multiple shared Hosting packages. This also lowers your Web Hosting costs significantly.",
  },
  {
    q: 'Can I upgrade between plans?',
    a: 'Yes, you can upgrade your existing plan to a higher plan at any time.',
  },
  {
    q: 'Do your Reseller Hosting plans include a One-Click Installer?',
    a: 'Yes, all our Reseller Hosting plans come integrated with Softaculous - a popular and easy to use One-Click Installer.',
  },
];

const resellerFeatures: Feature[] = [
  {
    icon: 'layers',
    title: 'Powerful Hosting Control Panel - WHM',
    text: 'Manage your reseller hosting effortlessly with WHM, featuring comprehensive tools, intuitive controls, and robust account management capabilities.',
  },
  {
    icon: 'mail',
    title: 'Advanced Email Hosting Included',
    text: 'Enjoy advanced email hosting with features like secure communications, ample storage, and seamless integration, all included with your hosting plan.',
  },
  {
    icon: 'gauge',
    title: 'Easy to Use Customer Control Panel - cPanel',
    text: 'Simplify website management with cPanel’s user-friendly interface, offering intuitive controls for domains, emails, and website settings.',
  },
  {
    icon: 'server',
    title: 'Robust Infrastructure',
    text: 'Benefit from our robust infrastructure with high-performance servers, advanced security, and reliable uptime, designed to support your business’s growth and stability.',
  },
  {
    icon: 'card',
    title: 'All in one Billing & Client Management Solution - WHMCS',
    text: 'Streamline your business with WHMCS, providing automated billing, client management, and seamless integration with your hosting services.',
  },
  {
    icon: 'headset',
    title: 'Reliable Support',
    text: 'Our dedicated support team offers prompt, reliable assistance 24/7, ensuring your hosting services run smoothly and efficiently at all times.',
  },
];

const resellerSections: ProductSection[] = [
  {
    kind: 'split',
    data: performanceSection(
      '/assets/img/cloud-infrastructure.webp',
      'Reseller hosting infrastructure by ZedgeHost',
    ),
  },
  {
    kind: 'groups',
    data: {
      eyebrow: 'Specifications',
      title: 'Just what you need for a Basic Web Presence',
      subtitle: 'Build your first website with ease using essential hosting features.',
      groups: [
        {
          title: 'Server Specifications',
          items: [
            'Dual E5530 2.40GHz Xeon quad core hyperthreaded processors',
            '24 GB RAM',
            '250 GB RAID 1 (mirrored) OS drive',
            '1 TB RAID 1 (mirrored) customer data drive cached',
            'Battery backed, RAID controller for all drives',
            'Redundant Power, HVAC & Fire-Detection Systems',
          ],
        },
        {
          title: 'Programming Support',
          items: [
            'PHP: 8.3, 8.2 & 8.1',
            'Perl, Python, RoR, GD, cURL, CGI, mcrypt3',
            'Apache 2.4x',
            'MySQL 5.7',
            'Ruby On Rails',
            'Zend Optimizer, Zend Engine, ionCube Loader',
          ],
        },
        {
          title: 'WHM (Admin Control Panel) Features',
          items: [
            'Create Hosting Plans',
            'Set up and Modify Customer Accounts',
            'Receive Server Downtime Alerts',
            'Install 250+ applications and programming language modules',
          ],
        },
        {
          title: 'cPanel (Client Control Panel) Features',
          items: [
            'Upload and Manage Web Pages',
            'View Website Statistics with AWstats',
            "Brandable with your Company's Logo",
            'Install Over 250 Scripts with the Softaculous Script Library',
          ],
        },
        {
          title: 'Email & Domain Name Features',
          items: [
            'Outlook, Thunderbird and Windows Mail compatible',
            'Blackberry, iPhone, Android and PDA support',
            'Feature packed Webmail',
            'Advance Spam/Virus Protection',
            'Mail Forwards, Email Aliases, Auto Responders',
            'Unlimited Mailing Lists, Catch All Accounts, Mail Spam Filters',
            'Parked Domains',
            'Free DNS Management',
            'Domain Forwarding, Path Forwarding, URL Masking',
          ],
        },
      ],
    },
  },
  {
    kind: 'split',
    data: {
      eyebrow: 'Security',
      title: 'Free SSL Certificate',
      text: 'Protect your website with enterprise-grade security features, proactive threat monitoring, malware protection, and advanced firewalls, ensuring your data remains secure, reliable, and accessible at all times.',
      points: [
        'Advanced Firewall Protection',
        'Real-Time Malware Scanning',
        'Free SSL Certificates',
        'Automated Daily Backups',
      ],
      icon: 'shield',
      image: { src: '/assets/img/security.webp', alt: 'Free SSL and reseller hosting security' },
      reverse: true,
    },
  },
  {
    kind: 'features',
    eyebrow: 'Features',
    title: 'Reseller Hosting Features',
    subtitle:
      'White-label branding, cPanel/WHM, scalable resources, automated billing, and 24/7 expert support included.',
    features: resellerFeatures,
  },
];

const resellerPlans = {
  eyebrow: 'Reseller Hosting Plans',
  title: 'Hosting Plans Built for Your Growth',
  subtitle:
    'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
  plans: cataloguePlans,
};

const resellerFaq = {
  title: 'Frequently Asked Questions',
  subtitle:
    'Explore our FAQ to find quick answers to the most common questions about our products and services.',
  items: resellerFeqs,
  cta: supportLinkCta,
};

function resellerPage(seoData: SeoData, hero: HeroData) {
  return {
    seo: seoData,
    hero,
    plans: resellerPlans,
    sections: resellerSections,
    cta: supportCta,
    faq: resellerFaq,
  };
}

export const resellerHostingPage = resellerPage(seo.resellerHosting, {
  eyebrow: 'Special Offer',
  title: 'Reseller Hosting in Pakistan for Agencies, Freelancers & Hosting Entrepreneurs',
  subtitle:
    'Launch a hosting business in Pakistan with white-label reseller hosting, scalable resources, and tools to manage clients with confidence.',
  priceFrom: 4197,
  priceSuffix: 'month',
  chips: [
    { icon: 'layers', label: 'White Label Hosting' },
    { icon: 'server', label: 'WHM Control Panel' },
    { icon: 'globe', label: 'Unlimited cPanel Accounts' },
    { icon: 'lock', label: 'Free SSL Certificates' },
    { icon: 'database', label: 'NVMe SSD Storage' },
    { icon: 'headset', label: '24/7 Expert Support' },
  ],
  primaryCta: { label: 'Start Reselling', href: contactHref },
  secondaryCta: { label: 'Talk to an Expert', href: contactHref },
  image: { src: '/assets/img/hosting.webp', alt: 'Reseller hosting in Pakistan' },
  variant: 'light',
});

export const windowsResellerPage = resellerPage(seo.windowsReseller, {
  eyebrow: 'Special Offer',
  title: 'Launch Your Hosting Business with Windows Reseller Hosting',
  subtitle:
    'White-label Windows reseller hosting with Plesk, ASP.NET and Microsoft SQL support, NVMe storage, and 24/7 local support.',
  priceFrom: 5597,
  priceSuffix: 'month',
  chips: [
    { icon: 'layers', label: 'White Label Hosting' },
    { icon: 'server', label: 'Plesk Reseller Panel' },
    { icon: 'code', label: 'ASP.NET Support' },
    { icon: 'database', label: 'Microsoft SQL Databases' },
    { icon: 'layers', label: 'NVMe SSD Storage' },
    { icon: 'headset', label: '24/7 Expert Support' },
  ],
  primaryCta: { label: 'Start Reselling', href: contactHref },
  secondaryCta: { label: 'Talk to an Expert', href: contactHref },
  image: { src: '/assets/img/hosting.webp', alt: 'Windows reseller hosting in Pakistan' },
  variant: 'light',
});
