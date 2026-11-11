import type { FaqItem, Feature, HeroData, Plan, ProductPageData } from './types';
import {
  contactHref,
  industryFeatures,
  supportCta,
  supportLinkCta,
} from './blocks';
import { seo } from './seo';

const websiteSpec = (value: string) => ({ value, label: 'WordPress Website' });
const storageSpec = (value: string) => ({ value, label: 'NVMe Storage' });
const bandwidthSpec = { value: 'Unmetered', label: 'Bandwidth' };
const emailSpec = (value: string) => ({ value, label: 'Professional Emails' });
const databaseSpec = (value: string) => ({ value, label: 'MySQL Databases' });

const plans: Plan[] = [
  {
    name: 'Starter Plan',
    tagline: 'Essential WordPress hosting for single sites',
    price: 1499,
    billing: 'yearly',
    note: 'Rs 1,499 when you renew this plan',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/wordpress/wordpress-starter',
    specs: [
      websiteSpec('1'),
      storageSpec('20 GB'),
      bandwidthSpec,
      emailSpec('5'),
      databaseSpec('10'),
      { value: 'Free', label: 'SSL Certificate' },
      { value: '24/7', label: 'WordPress Support' },
      { value: 'AI', label: 'Website Builder' },
      { value: '1-Click', label: 'WordPress Install' },
      { value: 'Automatic', label: 'WP Core Updates' },
      { value: 'LiteSpeed', label: 'Cache for WP' },
    ],
    more: [
      'Free cPanel Control Panel',
      'Free WordPress Migration',
      '99.9% Uptime Guarantee',
      'LiteSpeed Web Server',
      'phpMyAdmin Database Manager',
      'Automated Daily Backups',
      'DDoS & WP Brute-Force Shield',
      'Webmail Suite (Roundcube)',
      'WP Staging & Cronjobs',
    ],
  },
  {
    name: 'Standard Plan',
    tagline: 'Optimized WordPress hosting for growing sites',
    price: 2999,
    billing: 'yearly',
    note: 'Rs 2,999 when you renew this plan',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/wordpress/wordpress-standard',
    specs: [
      websiteSpec('5'),
      storageSpec('50 GB'),
      bandwidthSpec,
      emailSpec('10'),
      databaseSpec('20'),
      { value: 'Free', label: 'SSL Certificate' },
      { value: '24/7', label: 'WordPress Support' },
      { value: 'AI', label: 'Website Builder' },
      { value: '1-Click', label: 'WordPress Install' },
      { value: 'Automatic', label: 'WP Core Updates' },
      { value: 'LiteSpeed', label: 'Cache for WP' },
    ],
    more: [
      'Free cPanel Control Panel',
      'Free WordPress Migration',
      '99.9% Uptime Guarantee',
      'LiteSpeed Web Server',
      'phpMyAdmin Database Manager',
      'Automated Daily Backups',
      'DDoS & WP Brute-Force Shield',
      'Webmail Suite (Roundcube)',
      'WP Staging & Cronjobs',
    ],
  },
  {
    name: 'Business Plan',
    tagline: 'High-performance WordPress for stores & agencies',
    price: 3999,
    billing: 'yearly',
    note: 'Rs 3,999 when you renew this plan',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/wordpress/wordpress-business',
    popular: true,
    badge: 'Popular',
    specs: [
      websiteSpec('20'),
      storageSpec('100 GB'),
      bandwidthSpec,
      emailSpec('50'),
      databaseSpec('Unlimited'),
      { value: 'Free', label: 'SSL Certificate' },
      { value: '24/7', label: 'Dedicated WP Support' },
      { value: 'AI', label: 'Website Builder' },
      { value: 'WooCommerce', label: 'Optimized' },
      { value: '2X Faster', label: 'LiteSpeed Turbo' },
      { value: 'Automatic', label: 'WP Core Updates' },
    ],
    more: [
      'Free cPanel Control Panel',
      'Free WordPress Migration',
      '99.9% Uptime Guarantee',
      'CloudLinux Resource Isolation',
      'phpMyAdmin Database Manager',
      'Automated Daily Backups',
      'Advanced DDoS & Malware Scanner',
      'WP-CLI & SSH Terminal Access',
      '1-Click WordPress Staging',
      'Unlimited Subdomains & Cronjobs',
    ],
  },
  {
    name: 'Enterprise Plan',
    tagline: 'Maximum power for high-traffic WooCommerce & WP',
    price: 9999,
    billing: 'yearly',
    note: 'Rs 9,999 when you renew this plan',
    ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/wordpress/wordpress-enterprise',
    badge: 'Ultimate',
    specs: [
      websiteSpec('Unlimited'),
      storageSpec('Unlimited'),
      bandwidthSpec,
      emailSpec('Unlimited'),
      databaseSpec('Unlimited'),
      { value: 'Free', label: 'SSL Certificate' },
      { value: '24/7 Priority', label: 'VIP WP Support' },
      { value: 'AI', label: 'Website Builder' },
      { value: 'High-Traffic', label: 'WooCommerce Ready' },
      { value: '4X Faster', label: 'LiteSpeed Turbo' },
      { value: 'Automatic', label: 'WP Core Updates' },
    ],
    more: [
      'Free cPanel Control Panel',
      'VIP White-Glove WP Migration',
      '99.99% Uptime SLA',
      'Max Dedicated CPU & RAM',
      'CloudLinux Account Isolation',
      'phpMyAdmin Database Manager',
      'Daily Backups & 1-Click Restore',
      'Enterprise DDoS & Imunify360',
      'WP-CLI, Git & SSH Terminal',
      'Unlimited WordPress Staging Sites',
      'Unlimited Subdomains & Cronjobs',
    ],
  },
];

const hero: HeroData = {
  eyebrow: 'Special Offer',
  title: 'WordPress Hosting in Pakistan | Fast & Cheap Managed WP Hosting',
  subtitle:
    'Optimize your WordPress website with fast managed hosting in Pakistan, NVMe SSD speed, free SSL, 1-click installer, and 24/7 local PKR support.',
  priceFrom: 1499,
  priceSuffix: 'year',
  chips: [
    { icon: 'bolt', label: 'Optimized for WordPress' },
    { icon: 'lock', label: 'Free SSL Certificate' },
    { icon: 'sparkles', label: '1-Click WordPress Install' },
    { icon: 'backup', label: 'Automatic Daily Backups' },
    { icon: 'gauge', label: 'LiteSpeed Cache Enabled' },
    { icon: 'headset', label: '24/7 WordPress Support' },
  ],
  primaryCta: { label: 'Launch Your WordPress Site', href: '#plans' },
  secondaryCta: { label: 'Contact Us', href: contactHref },
  image: { src: '/assets/img/wordpress.webp', alt: 'Managed WordPress hosting by ZedgeHost' },
  variant: 'light',
};

const autoFeatures: Feature[] = [
  {
    icon: 'sparkles',
    title: 'Auto-Setup',
    text: 'No need for any legwork - Your WordPress hosting comes pre-configured with the latest version of WordPress and is ready-to-use the moment you buy it.',
  },
  {
    icon: 'refresh',
    title: 'Auto-Updates',
    text: 'Any patches or version upgrades released by WordPress are automatically installed for your packages, not only making your sites future-proof but also more secure.',
  },
  {
    icon: 'bolt',
    title: 'Auto-Caching',
    text: 'Get the best-performing WordPress sites with our Cloud Hosting. With cache and CDN auto-configured on all your packages, pages load much faster with the least amount of resources.',
  },
  {
    icon: 'backup',
    title: 'Auto-Backups',
    text: 'Get a time machine for all your WordPress sites. With CodeGuard automatically set up for any site you create, your data is always protected and regularly backed up.',
  },
];

const faqs: FaqItem[] = [
  {
    q: 'Why choose managed WordPress hosting?',
    a: 'Managed WordPress hosting reduces technical overhead so you can focus on content, marketing, and business growth without worrying about server maintenance.',
  },
  {
    q: 'Is it suitable for blogs and online stores?',
    a: 'Yes. WordPress hosting is ideal for blogs, business websites, and stores that need responsive performance and easy content management.',
  },
  {
    q: 'Does it include security features?',
    a: 'Yes. Features typically include SSL, malware protection, backups, and monitoring to keep WordPress websites secure.',
  },
  {
    q: 'Can I migrate my existing site?',
    a: 'Yes. Zedgehost can help migrate your current WordPress site to a more optimized hosting environment with minimal disruption.',
  },
  {
    q: 'Can I upgrade my WordPress Hosting plan?',
    a: 'No, You cannot change upgrade or downgrade plans, however the amount of RAM and CPU cores for your plan can be upgraded.',
  },
  {
    q: 'Can I add more WordPress installations to an existing plan?',
    a: 'No, you cannot add more WordPress installations to any plan. The number of WordPress installations will remain fixed.',
  },
  {
    q: 'Can SiteLock and CodeGuard packages be upgraded?',
    a: 'Currently, the included SiteLock and CodeGuard plans cannot be upgraded.',
  },
  {
    q: 'Can I use an external email service with WordPress Hosting?',
    a: 'Yes, you can use any 3rd party email service for your domain. In case you are using the default name servers provided with WordPress Hosting, please contact our Support team to update the relevant DNS records for your blog.',
  },
  {
    q: 'Can I use an existing certificate with my blog?',
    a: 'No, you cannot use an existing certificate. You will need to generate a CSR from the WordPress Hosting panel and get a certificate issued which can be installed from the panel.',
  },
  {
    q: 'Will WordPress be updated automatically?',
    a: 'Yes, WordPress core updates will be enabled by default.',
  },
  {
    q: 'Is there a money back period for WordPress Hosting?',
    a: 'No, WordPress Hosting does not have a money back period.',
  },
  {
    q: 'Is Multisite supported with WordPress Hosting?',
    a: 'No, Multisite is not supported.',
  },
];

export const wordpressHostingPage: ProductPageData = {
  seo: seo.wordpressHosting,
  hero,
  plans: {
    eyebrow: 'WordPress Plans',
    title: 'Managed WordPress Hosting Plans in Pakistan',
    subtitle:
      'High performance WordPress hosting plans tailored for Pakistani businesses, bloggers, and WooCommerce stores.',
    note: 'All plans include free SSL, cPanel and 24/7 WordPress support.',
    plans,
  },
  sections: [
    {
      kind: 'split',
      data: {
        eyebrow: 'Wordpress With Cloud',
        title: 'Your WordPress Site - powered by our Cloud Hosting',
        text: 'Build your first website with ease using essential hosting features.',
        points: ['Blazing-Fast Load Time', 'Instant Scaling', 'Automatic Failover'],
        icon: 'check-circle',
        image: {
          src: '/assets/img/cloud-infrastructure.webp',
          alt: 'WordPress hosting powered by ZedgeHost cloud infrastructure',
        },
        tone: 'mint',
      },
    },
    {
      kind: 'features',
      eyebrow: 'Features',
      title: 'WordpressHosting Backed by Industry-Leading Features',
      subtitle:
        'All hosting types with the features you’ll need. One platform. Ready to deploy, scale, and grow.',
      features: industryFeatures,
    },
    {
      kind: 'split',
      data: {
        eyebrow: 'Security',
        title: 'WordPress powers 27% of websites on the Internet',
        text: 'Build anything - a blog, a static website or an ecommerce shop.',
        points: ['Ready-made Themes', 'SEO-friendly', 'Diversified Plugins'],
        icon: 'shield',
        image: { src: '/assets/img/wordpress.webp', alt: 'WordPress themes and plugins' },
        reverse: true,
      },
    },
    {
      kind: 'features',
      eyebrow: 'Automation',
      title: 'It just works Auto-magically',
      subtitle:
        'Dependable, secure, and high-performing - our hosting solutions grow with your business.',
      features: autoFeatures,
      tone: 'mint',
    },
  ],
  cta: supportCta,
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Explore our FAQ to find quick answers to the most common questions about our products and services.',
    items: faqs,
    cta: supportLinkCta,
  },
};
