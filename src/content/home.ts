import type {
  CtaBandData,
  FaqItem,
  Feature,
  HeroData,
  HostingType,
  PlanSectionData,
  SeoData,
  TrustItem,
} from './types';
import seoData from './seo.json';

export const homeSeo = seoData.home as unknown as SeoData;

export const homeHero: HeroData = {
  eyebrow: 'Web Hosting in Pakistan',
  title: 'Best Web Hosting in Pakistan for Business, Startups & Blogs',
  subtitle:
    'Launch your website with the best web hosting in Pakistan. Zedgehost offers cheap, fast NVMe SSD hosting with 99.9% uptime, free SSL, cPanel, and 24/7 local support.',
  priceFrom: 1499,
  priceRegular: 2999,
  ticks: ['Free SSL certificate', 'cPanel included', '24/7 local support'],
  primaryCta: { label: 'Get Started', href: '#plans' },
  secondaryCta: { label: 'View Hosting Plans', href: 'shared-hosting.html' },
  image: { src: '/assets/img/hosting.webp', alt: 'ZedgeHost web hosting in Pakistan' },
  showDomainSearch: true,
};

export const homeTrust: TrustItem[] = [
  { icon: 'gauge', title: '99.9% Uptime', text: 'Guaranteed reliability' },
  { icon: 'lock', title: 'Free SSL', text: 'On every hosting plan' },
  { icon: 'server', title: 'cPanel Included', text: 'Easy website management' },
  { icon: 'headset', title: '24/7 Support', text: 'Local experts, day and night' },
];

export const hostingTypes: HostingType[] = [
  {
    icon: 'layers',
    title: 'Reseller Hosting',
    description:
      'A reliable hosting solution to publish and manage your website online with ease.',
    href: 'reseller-hosting.html',
  },
  {
    icon: 'code',
    title: 'WordPress Hosting',
    description:
      'Optimized hosting designed for fast, secure, and high-performance WordPress websites.',
    href: 'wordpress-hosting.html',
  },
  {
    icon: 'cloud',
    title: 'Cloud Hosting',
    description:
      'Scalable hosting powered by multiple servers for maximum uptime, flexibility, and speed.',
    href: 'cloud-hosting.html',
    popular: true,
  },
  {
    icon: 'server',
    title: 'Shared Hosting',
    description: 'An affordable hosting option where multiple websites share server resources.',
    href: 'shared-hosting.html',
  },
  {
    icon: 'database',
    title: 'Dedicated Hosting',
    description:
      'A powerful hosting setup that gives you full control of an entire server for maximum performance.',
    href: 'dedicated-server.html',
  },
  {
    icon: 'bolt',
    title: 'VPS Hosting',
    description:
      'Scalable hosting powered by multiple servers for maximum uptime, flexibility, and speed.',
    href: 'linux-vps-server.html',
  },
];

const sharedSpecs = (websites: string, storage: string, emails: string, databases: string) => [
  { value: websites, label: 'Website' },
  { value: storage, label: 'NVMe Storage' },
  { value: 'Unmetered', label: 'Bandwidth' },
  { value: emails, label: 'Email Accounts' },
  { value: databases, label: 'MySQL Databases' },
  { value: '2', label: 'FTP Accounts' },
  { value: 'Free', label: 'SSL Certificate' },
  { value: '24/7', label: 'Dedicated Support' },
  { value: 'AI', label: 'Website Builder' },
  { value: '1-Click', label: 'WordPress Install' },
  { value: 'Multi-Language', label: 'Python, Node.js, PHP' },
];

export const homePlans: PlanSectionData = {
  eyebrow: 'Hosting Plans',
  title: 'Web Hosting Plans That Fit Your Budget',
  subtitle:
    'Experience ultra-fast loading speeds globally for seamless performance and reliability anywhere in the world.',
  plans: [
    {
      name: 'Starter Plan',
      tagline: 'Essential NVMe hosting for single websites',
      annualPrice: 1499,
      note: 'When you renew this plan',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/web-hosting/starter',
      specs: sharedSpecs('1', '20 GB', '5', '10'),
      more: [
        'Free cPanel Control Panel',
        'Free Website Migration',
        '99.9% Uptime Guarantee',
        'LiteSpeed Web Server',
        'phpMyAdmin Database Manager',
        'Automated Daily Backups',
        'DDoS Protection & Web Firewall',
        'Webmail Suite (Roundcube)',
        'Git Version Control & Cronjobs',
      ],
    },
    {
      name: 'Standard Plan',
      tagline: 'Expanded resources for multiple websites',
      annualPrice: 2999,
      note: 'When you renew this plan',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/web-hosting/standard',
      specs: sharedSpecs('5', '50 GB', '10', '20'),
      more: [
        'Free cPanel Control Panel',
        'Free Website Migration',
        '99.9% Uptime Guarantee',
        'LiteSpeed Web Server',
        'phpMyAdmin Database Manager',
        'Automated Daily Backups',
        'DDoS Protection & Web Firewall',
        'Webmail Suite (Roundcube)',
        'Git Version Control & Cronjobs',
      ],
    },
    {
      name: 'Business Plan',
      tagline: 'Best value for agencies, businesses & stores',
      annualPrice: 3999,
      note: 'When you renew this plan',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/web-hosting/business',
      popular: true,
      badge: 'Popular',
      specs: sharedSpecs('20', '100 GB', '50', 'Unlimited'),
      more: [
        'Free cPanel Control Panel',
        'Free Website Migration',
        '99.9% Uptime Guarantee',
        '2X Faster LiteSpeed Turbo',
        'CloudLinux Resource Isolation',
        'phpMyAdmin Database Manager',
        'Automated Daily Backups',
        'Advanced DDoS & Anti-Malware',
        'SSH Terminal Access & Git',
        'Unlimited Subdomains & Cronjobs',
      ],
    },
    {
      name: 'Enterprise Plan',
      tagline: 'Unmetered power & max dedicated resources',
      annualPrice: 9999,
      note: 'When you renew this plan',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/web-hosting/enterprise',
      badge: 'Ultimate',
      specs: [
        { value: 'Unlimited', label: 'Websites' },
        { value: 'Unlimited', label: 'NVMe Storage' },
        { value: 'Unmetered', label: 'Bandwidth' },
        { value: 'Unlimited', label: 'Email Accounts' },
        { value: 'Unlimited', label: 'MySQL Databases' },
        { value: 'Unlimited', label: 'FTP Accounts' },
        { value: 'Free', label: 'SSL Certificate' },
        { value: '24/7 Priority', label: 'VIP Support' },
        { value: 'AI', label: 'Website Builder' },
        { value: '1-Click', label: 'WordPress Install' },
        { value: 'Multi-Language', label: 'Python, Node.js, PHP' },
      ],
      more: [
        'Free cPanel Control Panel',
        'VIP White-Glove Migration',
        '99.99% Uptime SLA',
        '4X Faster LiteSpeed Turbo',
        'Max Dedicated CPU & RAM',
        'CloudLinux Account Isolation',
        'phpMyAdmin Database Manager',
        'Daily Backups & 1-Click Restore',
        'Enterprise DDoS & Imunify360',
        'SSH Terminal, Git & WP-CLI',
        'Unlimited Subdomains & Cronjobs',
      ],
    },
  ],
};

export const speedSection = {
  eyebrow: 'Performance',
  title: 'Blazing-Fast Loading Website, Speeds Worldwide.',
  subtitle:
    'Deliver a seamless browsing experience with ultra-fast page loading and performance optimized for every corner of the globe.',
  points: [
    {
      title: 'Optimized Server Performance:',
      text: 'High-performance infrastructure ensures rapid load times even during traffic spikes.',
    },
    {
      title: 'Advanced Caching Technology:',
      text: 'Smart caching accelerates your pages for instant access.',
    },
    {
      title: 'Lightning-Fast Response Times:',
      text: 'Minimize latency and provide a smooth user experience across all devices.',
    },
  ],
  cta: { label: 'View Hosting Plan', href: 'shared-hosting.html' },
};

export const whyChoose: Feature[] = [
  {
    icon: 'shield',
    title: 'Reliable & Secure Hosting',
    text: 'Proactive monitoring, DDoS protection and hardened servers keep your website online.',
  },
  {
    icon: 'headset',
    title: '24/7 Expert Support',
    text: 'Local hosting specialists available day and night through tickets, chat and WhatsApp.',
  },
  {
    icon: 'bolt',
    title: 'Fast Performance',
    text: 'NVMe SSD storage, LiteSpeed caching and optimized servers for faster page loads.',
  },
  {
    icon: 'lock',
    title: 'Free SSL certificate',
    text: 'Every plan includes SSL to protect customer data and improve search trust signals.',
  },
  {
    icon: 'card',
    title: 'Affordable Pricing',
    text: 'Hosting plans starting from Rs 1,499 per year with local PKR payment options.',
  },
  {
    icon: 'refresh',
    title: 'Free migration',
    text: 'Our team moves your existing website to ZedgeHost with zero downtime.',
  },
];

export const stats = [
  { value: '30', suffix: 'Day', label: 'Money-Back Guarantee' },
  { value: '24/7', suffix: '', label: 'Expert Support' },
  { value: '99.9', suffix: '%', label: 'Server Uptime' },
];

export const supportSection = {
  eyebrow: 'Support',
  title: 'Your Success Powered by Our Expert Support Team',
  cards: [
    {
      icon: 'headset' as const,
      title: '24/7 Expert Support',
      text: 'Your issues are resolved quickly with dedicated professionals available day and night.',
    },
    {
      icon: 'sparkles' as const,
      title: 'Instant AI Assistant Support',
      text: 'Experience lightning-fast help powered by AI — available anytime to solve your queries instantly.',
    },
    {
      icon: 'phone' as const,
      title: 'Real Human Support, Day & Night',
      text: 'Get help with hosting setup, migrations, SSL and technical issues — whenever you need it.',
    },
  ],
  cta: { label: 'Explore Our Support', href: 'https://my.zedgehost.com/contact.php' },
};

export const domainBand: CtaBandData = {
  title: 'Find & Pick Your Ideal Domain',
  text: "Choose from thousands of available domains to kickstart your brand's digital journey.",
  primary: { label: 'Search Domain', href: 'domain-search.html' },
  secondary: { label: 'View Domain Pricing', href: 'domain-promos.html' },
};

export const homeFaqs: FaqItem[] = [
  {
    q: 'Best hosting for Pakistan businesses?',
    a: 'For businesses and startups in Pakistan, affordable shared hosting and scalable cloud hosting are the most practical options for speed, uptime, and cost-efficiency.',
  },
  {
    q: 'Do you support WordPress hosting?',
    a: 'Yes. WordPress hosting packages are designed for fast setup, secure performance, and easy management for blogs, business websites, and online stores.',
  },
  {
    q: 'Can I buy a domain and hosting together?',
    a: 'Yes. You can register a domain and pair it with hosting in one streamlined setup so your website goes live faster.',
  },
  {
    q: 'Is support available 24/7?',
    a: 'Yes. Zedgehost offers 24/7 help for hosting setup, migrations, SSL, and technical troubleshooting.',
  },
  {
    q: 'What makes Zedgehost different from other hosting providers?',
    a: 'Zedgehost offers lightning-fast servers, 99.9% uptime, free SSL certificates, and 24/7 expert support — all at affordable prices. Our platform is optimized for performance, security, and simplicity.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: "Yes! We offer a 30-day money-back guarantee on all hosting plans. If you're not satisfied, you can cancel within the first 30 days for a full refund — no questions asked.",
  },
  {
    q: 'Can you migrate my website from another host?',
    a: "Absolutely. Our team provides free website migration for all new customers. Simply submit a migration request, and we'll handle the entire process with zero downtime.",
  },
  {
    q: 'How secure is my website on Zedgehost?',
    a: 'Security is our top priority. Every plan includes a free SSL certificate, regular server monitoring, DDoS protection, and automatic backups to keep your data safe.',
  },
  {
    q: 'Where are your data centers located?',
    a: 'Our hosting infrastructure is designed for Pakistan businesses with reliable connectivity, fast response times, and regional support alongside global data center coverage.',
  },
  {
    q: 'Do you provide 24/7 customer support?',
    a: 'Yes, our expert support team is available 24/7 via chat and ticket to help with any technical or billing questions you may have.',
  },
  {
    q: 'Can I upgrade or downgrade my hosting plan later?',
    a: 'Of course! You can upgrade or downgrade your plan at any time directly from your dashboard — no downtime or complex setup required.',
  },
  {
    q: 'Do you provide email hosting with your plans?',
    a: 'Yes, all our hosting plans include professional email accounts so you can manage your business communication under your own domain name.',
  },
];
