import type { Feature, ProductPageData } from './types';
import { cataloguePlans } from './plans/catalogue';
import { contactHref, sslFaqs, supportCta, supportLinkCta } from './blocks';
import { seo } from './seo';

const plans = {
  eyebrow: 'Security Plans',
  title: 'Hosting Plans Built for Your Growth',
  subtitle:
    'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
  plans: cataloguePlans,
};

const faqSection = {
  title: 'Frequently Asked Questions',
  subtitle:
    'Explore our FAQ to find quick answers to the most common questions about our products and services.',
  items: sslFaqs,
  cta: supportLinkCta,
};

export const siteLockPage: ProductPageData = {
  seo: seo.siteLock,
  hero: {
    eyebrow: 'Website Security',
    title: 'Protect Your Website with SiteLock Security',
    priceFrom: 837,
    priceSuffix: 'month',
    chips: [
      { icon: 'shield', label: 'Daily Malware Scanning' },
      { icon: 'refresh', label: 'Automatic Threat Removal' },
      { icon: 'gauge', label: 'Website Vulnerability Detection' },
      { icon: 'globe', label: 'Real-Time Security Monitoring' },
      { icon: 'check-circle', label: 'Trusted SiteLock Seal' },
      { icon: 'headset', label: '24/7 Website Protection' },
    ],
    primaryCta: { label: 'Get SiteLock', href: contactHref },
    secondaryCta: { label: 'Talk to an Expert', href: contactHref },
    image: { src: '/assets/img/security.webp', alt: 'SiteLock website security' },
    variant: 'light',
  },
  plans,
  sections: [
    {
      kind: 'groups',
      data: {
        eyebrow: 'Protection',
        title: 'Instant Alerts and Automatic Fixes',
        groups: [
          {
            title: 'Instantly Notifies',
            items: [
              'On detecting a vulnerability or presence of malicious code on your website, SiteLock instantly notifies you via Email & SMS.',
            ],
          },
          {
            title: 'Instantly Fixes',
            items: [
              "In addition to identifying malware, SiteLock's SMART Tool can actually fix it automatically.",
              'Conducts deep FTP scans for your files',
              'Identifies loopholes or vulnerabilities in your code',
              'Detects malicious code and malware threats',
              'Removes malicious code and cleans your site',
            ],
          },
        ],
      },
    },
    {
      kind: 'steps',
      data: {
        eyebrow: 'How it Works',
        title: 'How it Works',
        subtitle: 'Simple steps to secure your website effectively.',
        items: [
          {
            title: 'Scans Daily',
            text: 'SiteLock screens every aspect of your web presence daily to identify security gaps. It not only checks your website, email and applications, but also search engine blacklists and spam filters.',
          },
          {
            title: 'Identifies Threats',
            text: "SiteLock's 360 degree scan and powerful firewall identify advanced vulnerabilities before they can be exploited to damage your web presence, thus putting you one step ahead of hackers, always!",
          },
          {
            title: 'Instantly Notifies and Fixes',
            text: 'SiteLock not only identifies threats, but also fixes them for you automatically. This way, SiteLock works in the background to protect your website, while it’s business as usual for you and your customers.',
          },
        ],
      },
    },
  ],
  cta: supportCta,
};

const backupFeatures: Feature[] = [
  {
    icon: 'backup',
    title: 'Automatic backups',
    text: 'CodeGuard works behind the scenes. Which means you can turn it on and sit back while CodeGuard takes regular backups of your data.',
  },
  {
    icon: 'sparkles',
    title: 'Hassle-free setup',
    text: 'Since CodeGuard is cloud-based, setting it up is a snap – simply add your website connection details to start the backup process.',
  },
  {
    icon: 'check-circle',
    title: '30-day Money-back guarantee',
    text: "Try out CodeGuard and see how easy it is to secure your website. With our 30-day Money-back period, you've got nothing to lose.",
  },
];

export const websiteBackupPage: ProductPageData = {
  seo: seo.websiteBackup,
  hero: {
    eyebrow: 'Website Backup',
    title: 'Automated Website Backups with CodeGuard',
    priceFrom: 697,
    priceSuffix: 'month',
    chips: [
      { icon: 'backup', label: 'Daily Automatic Backups' },
      { icon: 'refresh', label: 'One-Click Restore' },
      { icon: 'shield', label: 'Malware Change Monitoring' },
      { icon: 'mail', label: 'File Change Alerts' },
      { icon: 'cloud', label: 'Secure Cloud Storage' },
      { icon: 'database', label: 'Website & Database Protection' },
    ],
    primaryCta: { label: 'Get CodeGuard', href: contactHref },
    secondaryCta: { label: 'Talk to an Expert', href: contactHref },
    image: { src: '/assets/img/security.webp', alt: 'CodeGuard website backup' },
    variant: 'light',
  },
  plans,
  sections: [
    {
      kind: 'prose',
      data: {
        eyebrow: 'CodeGuard',
        title: 'Automated Website Backup Protection',
        paragraphs: [
          'CodeGuard is a powerful website backup and monitoring solution that automatically backs up your website and database on a daily basis. It helps protect your valuable data from accidental deletions, hacking attempts, malware infections, and unexpected server issues, ensuring your website can be restored quickly whenever needed.',
          'With CodeGuard, you get automated backups, one-click website restoration, change monitoring, and secure cloud storage for your website files. Whether you run a personal blog, business website, or eCommerce store, CodeGuard provides peace of mind by keeping your website data safe, secure, and recoverable at all times.',
        ],
      },
    },
    {
      kind: 'features',
      eyebrow: 'Backups',
      title: 'Website backup that just works',
      features: backupFeatures,
      tone: 'mint',
    },
    {
      kind: 'steps',
      data: {
        eyebrow: 'How it Works',
        title: 'How it Works',
        items: [
          {
            title: 'Connect your website',
            text: 'Connect your website to CodeGuard using your SFTP/MySQL information. Once connected, an initial backup will start automatically.',
          },
          {
            title: 'Get regular backup updates',
            text: "CodeGuard automatically monitors your website's files & databases for changes, performs backups and notifies you by email.",
          },
          {
            title: 'Restore from any point',
            text: "Restore your website's files & database to any previous backup version by downloading a zip file, performing an automatic restore or restoring individual files.",
          },
        ],
      },
    },
  ],
  cta: supportCta,
  faq: faqSection,
};

const sslFeatures: Feature[] = [
  {
    icon: 'lock',
    title: 'Rock-solid Security',
    text: "Comodo's SSL certificates provide up to 128 or 256-bit encryption for maximum security of your website visitors' data.",
  },
  {
    icon: 'check-circle',
    title: 'Boost Customer Confidence',
    text: "Many customers actively look for the SSL lock icon before handing over sensitive data. Get an SSL certificate to increase your customers' trust in your online business.",
  },
  {
    icon: 'gauge',
    title: 'Better SEO Rankings',
    text: 'Google gives higher rankings to websites secured with SSL certificates, making SSL essential for online success.',
  },
  {
    icon: 'shield',
    title: 'Comodo Secure Seal',
    text: 'Your certificate comes with a Comodo Secure Seal that serves as a constant reminder to customers that your site is protected.',
  },
  {
    icon: 'card',
    title: '30-Day Money Back Guarantee',
    text: 'All our SSL certificates come with a 30-day Money Back Guarantee. No questions asked.',
  },
];

export const digicertPage: ProductPageData = {
  seo: seo.digicert,
  hero: {
    eyebrow: 'SSL Certificates',
    title: 'Secure Your Website with SSL Certificates',
    priceFrom: 2797,
    priceSuffix: 'year',
    chips: [
      { icon: 'lock', label: '256-Bit SSL Encryption' },
      { icon: 'shield', label: 'Trusted Security Seal' },
      { icon: 'gauge', label: 'Boost SEO Rankings' },
      { icon: 'card', label: 'Secure Online Transactions' },
      { icon: 'check-circle', label: 'Browser Trust Indicator' },
      { icon: 'sparkles', label: 'Quick & Easy Installation' },
    ],
    primaryCta: { label: 'Get SSL Certificate', href: contactHref },
    secondaryCta: { label: 'Talk to an Expert', href: contactHref },
    image: { src: '/assets/img/security.webp', alt: 'SSL certificate security' },
    variant: 'light',
  },
  plans,
  sections: [
    {
      kind: 'prose',
      data: {
        eyebrow: 'SSL',
        title: 'Free SSL Certificate',
        paragraphs: [
          'A Free SSL Certificate encrypts data, ensuring secure communication between websites and users. It boosts trust, improves SEO rankings, and protects sensitive information. Ideal for businesses and individuals, it provides authentication and security without additional costs, enhancing website credibility and safety.',
          'An SSL Certificate secures your website by encrypting data exchanged between your visitors and your server. It helps protect sensitive information, builds customer trust with the HTTPS padlock, improves search engine rankings, and ensures secure online transactions. Whether for personal websites, blogs, or business platforms, SSL certificates are essential for maintaining security, credibility, and user confidence.',
        ],
      },
    },
    {
      kind: 'features',
      eyebrow: 'SSL',
      title: 'Why buy an SSL certificate',
      subtitle: 'Next-level Performance and Reliability with Simplified Management.',
      features: sslFeatures,
      tone: 'mint',
    },
  ],
  cta: supportCta,
  faq: faqSection,
};
