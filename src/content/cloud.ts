import type { FaqItem, Feature, HeroData, PlanSectionData, SeoData } from './types';
import seoData from './seo.json';

export const cloudSeo = seoData.cloud as unknown as SeoData;

export const cloudHero: HeroData = {
  eyebrow: 'Special Offer',
  title: 'Scalable Cloud Hosting for Growing Businesses in Pakistan',
  subtitle:
    'Power your website with cloud hosting in Pakistan built for speed, reliability, and easy scaling as your traffic and business grow.',
  priceFrom: 9999,
  chips: [
    { icon: 'gauge', label: '99.99% Uptime Guarantee' },
    { icon: 'bolt', label: 'Instant Resource Scaling' },
    { icon: 'database', label: 'NVMe SSD Storage' },
    { icon: 'refresh', label: 'Automatic Failover' },
    { icon: 'lock', label: 'Free SSL Certificate' },
    { icon: 'headset', label: '24/7 Expert Support' },
  ],
  primaryCta: { label: 'Launch on Cloud', href: '#plans' },
  secondaryCta: { label: 'Talk to an Expert', href: 'https://my.zedgehost.com/contact.php' },
  image: { src: '/assets/img/cloud-hero.webp', alt: 'ZedgeHost scalable cloud hosting' },
  variant: 'dark',
};

export const cloudPlans: PlanSectionData = {
  eyebrow: 'Cloud Plans',
  title: 'Scalable Cloud Hosting Plans in Pakistan',
  subtitle:
    'High performance cloud servers with dedicated resources, NVMe SSD speed, and 99.99% uptime guarantee.',
  plans: [
    {
      name: 'Cloud Starter',
      tagline: 'Ideal for growing blogs and business websites',
      annualPrice: 9999,
      note: 'Billed annually. Cancel anytime.',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/cloud-hosting/cloud-starter',
      specs: [
        { value: '10', label: 'Websites' },
        { value: '50 GB', label: 'NVMe Storage' },
        { value: '2 Core', label: 'Cloud vCPU' },
        { value: '2 GB', label: 'RAM' },
        { value: 'Free', label: '.com Domain (1st Year)' },
        { value: 'Unmetered', label: 'Cloud Bandwidth' },
        { value: 'Unlimited', label: 'Free SSL Certificates' },
      ],
      more: [
        'Free cPanel Control Panel',
        'phpMyAdmin Database Manager',
        'cPanel Webmail',
        'FTP Accounts & File Manager',
        'Cron Jobs & Git Version Control',
        'Free Automatic Website Migration',
        'Daily Automated Cloud Backups',
        '99.99% Uptime SLA Guarantee',
        'LiteSpeed & NGINX Web Cache',
        '24/7 Dedicated Support',
      ],
    },
    {
      name: 'Cloud Business',
      tagline: 'Best value for high-traffic sites & WooCommerce stores',
      annualPrice: 15000,
      note: 'Billed annually. Cancel anytime.',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/cloud-hosting/cloud-business',
      popular: true,
      badge: 'Most Popular',
      specs: [
        { value: '50', label: 'Websites' },
        { value: '100 GB', label: 'NVMe Storage' },
        { value: '4 Core', label: 'Cloud vCPU' },
        { value: '2 GB', label: 'RAM' },
        { value: 'Free', label: '.com Domain (1st Year)' },
        { value: 'Unmetered', label: 'Cloud Bandwidth' },
        { value: 'Unlimited', label: 'Free SSL Certificates' },
      ],
      more: [
        'Free cPanel Control Panel',
        'phpMyAdmin Database Manager',
        'cPanel Webmail',
        'FTP Accounts & File Manager',
        'Cron Jobs & Git Version Control',
        'Free Priority Website Migration',
        'Automated Daily & On-Demand Backups',
        'Advanced DDoS & Malware Shield',
        'LiteSpeed Enterprise Caching',
        '24/7 Priority VIP Support',
      ],
    },
    {
      name: 'Cloud Enterprise',
      tagline: 'Maximum cloud power, RAM, and isolated resources',
      annualPrice: 25000,
      note: 'Billed annually. Cancel anytime.',
      ctaHref: 'https://my.zedgehost.com/index.php?rp=/store/cloud-hosting/cloud-enterprise',
      specs: [
        { value: 'Unlimited', label: 'Websites' },
        { value: '200 GB', label: 'NVMe Storage' },
        { value: '6 Core', label: 'Cloud vCPU' },
        { value: '2 GB', label: 'RAM' },
        { value: 'Free', label: '.com Domain (1st Year)' },
        { value: 'Ultra-Fast', label: 'Dedicated Bandwidth' },
        { value: 'Free', label: 'Wildcard SSL Certificates' },
      ],
      more: [
        'Free cPanel Control Panel',
        'phpMyAdmin Database Manager',
        'cPanel Webmail',
        'FTP Accounts & File Manager',
        'Cron Jobs & Git Version Control',
        'Free Dedicated IP Address',
        'Real-Time Automated Daily Backups',
        'Isolated Virtual Cloud Container',
        'Maximum Turbo Cloud Performance',
        '24/7 Dedicated Account Manager',
      ],
    },
  ],
};

export const cloudInfrastructure = {
  eyebrow: 'Infrastructure',
  title: 'Scalable Cloud Infrastructure for Modern Websites',
  subtitle:
    'Power your website with enterprise-grade cloud hosting built for speed, reliability, and flexibility. Enjoy scalable resources, high availability, and optimized performance that adapts to your growing traffic while ensuring maximum uptime and security.',
  points: [
    'Instant Resource Scaling',
    'High Availability Architecture',
    'NVMe SSD Cloud Storage',
    'Advanced DDoS Protection',
  ],
};

export const cloudFeatures: Feature[] = [
  {
    icon: 'bolt',
    title: 'Blazing-Fast Load Time',
    text: 'With full SSD storage, highly optimized servers, and state of the art NGINX caching, host websites at best-in-class speeds.',
  },
  {
    icon: 'gauge',
    title: 'Instant Scaling',
    text: 'No need to move your hosting as your traffic grows. Ramp up your resources at the click of a button — instantly add RAM and CPU without a reboot.',
  },
  {
    icon: 'layers',
    title: 'cPanel for Management',
    text: 'Just like Shared Hosting — manage your website and associated services like Email and sub-domains with the simplicity and ease of cPanel.',
  },
  {
    icon: 'server',
    title: 'Fully Managed Servers',
    text: 'Server management, patches and bug fixes are handled by our experts to ensure you can focus on building and running your website.',
  },
  {
    icon: 'sparkles',
    title: 'Quick Setup',
    text: 'You can use your Cloud Hosting package from the moment you have completed your purchase — no delays, no elaborate setups!',
  },
  {
    icon: 'code',
    title: '1-Click Application Installer',
    text: 'Choose between 100+ applications and CMSes to quickly start setting up your website.',
  },
];

export const cloudSecurity = {
  eyebrow: 'Security',
  title: 'Advanced Security for Your Website',
  subtitle:
    'Protect your website with enterprise-grade security features, proactive threat monitoring, malware protection, and advanced firewalls, ensuring your data remains secure, reliable, and accessible at all times.',
  points: [
    'Advanced Firewall Protection',
    'Real-Time Malware Scanning',
    'Free SSL Certificates',
    'Automated Daily Backups',
  ],
};

export const cloudBasics: Feature[] = [
  {
    icon: 'bolt',
    title: 'Lightning Fast Website',
    text: 'Our web application accelerator, powered by Varnish Cache, ensures the maximum performance of your website at all times!',
  },
  {
    icon: 'mail',
    title: 'Email included',
    text: 'Advanced email management features in cPanel allow you manage your emails, mailing lists and more without any hassles.',
  },
  {
    icon: 'layers',
    title: 'cPanel for Management',
    text: 'cPanel, an intuitive and powerful control panel, is available on all plans which makes your hosting package management a breeze!',
  },
  {
    icon: 'headset',
    title: '24/7 Expert Support',
    text: 'Your issues are resolved quickly with dedicated professionals available day and night.',
  },
];

export const cloudSupport = {
  eyebrow: 'Support',
  title: 'Need Help? Our Support Team Is Available 24/7',
  text: 'Get expert assistance anytime through tickets or email. Our cloud specialists in Pakistan are here to help your website succeed.',
  cta: { label: 'Contact Us', href: 'https://my.zedgehost.com/contact.php' },
};

export const cloudFaqs: FaqItem[] = [
  {
    q: 'Is cloud hosting better for business websites?',
    a: 'Yes. Cloud hosting offers more flexibility and stability for high-traffic websites, online stores, and growing businesses.',
  },
  {
    q: 'Can I upgrade resources later?',
    a: 'Yes. Cloud hosting allows easy scaling of CPU, RAM, and storage as your website traffic or workload increases.',
  },
  {
    q: 'Does cloud hosting include SSL?',
    a: 'Yes. Secure Sockets Layer certificates are included to protect customer data and improve search and trust signals.',
  },
  {
    q: 'Is it suitable for Pakistan businesses?',
    a: 'Yes. Cloud hosting is a strong fit for Pakistani companies that need speed, uptime, and flexibility for modern websites.',
  },
  {
    q: 'What is Cloud Hosting?',
    a: 'Cloud Hosting is a faster and more advanced form of Shared Hosting. It gives you access to the simple and familiar cPanel, and is powered by robust Cloud Technologies. Cloud Hosting gives you the power to scale your RAM and CPU resources, and is run on a full SSD server.',
  },
  {
    q: 'What is the difference between Cloud Hosting and Shared Hosting?',
    a: 'The basic difference between Cloud Hosting and Shared Hosting is the underlying technology that powers both products. With Cloud hosting, you get everything that Shared Hosting offers along with the ability to scale your CPU and RAM, and an extra boost for your website with an all SSD server stack.',
  },
  {
    q: 'What is SSD, and how is it different from the existing server?',
    a: 'SSD (Solid State Drives) are a form of storage technology. It is a much faster storage than the existing HDD (Hard Disk Drive) storage. Faster storage means your data gets written to and read from your storage faster. This means that your websites will load much faster if they are running on SSD storage.',
  },
  {
    q: 'What is Caching?',
    a: "Website caching is a service that helps load your web pages faster, without having to overload the server during situations of high traffic. We use NGINX Plus caching to ensure that your visitors don't get any lag while loading your website.",
  },
  {
    q: 'What is the limit for additional CPU and RAM?',
    a: 'Upto 8 GB RAM and 8 cores can be added with any Cloud Hosting Plan.',
  },
  {
    q: 'Is a Dedicated IP available?',
    a: 'For Cloud Hosting (US) packages, you can purchase a Dedicated IP for an additional cost by raising a support ticket. Unfortunately, for Cloud Hosting (IN) packages, we do not provide a Dedicated IP.',
  },
  {
    q: 'How do I install an SSL certificate on my Website?',
    a: 'To install SSL on your cloud server, you need to get in touch with our support team and we will get it installed for you.',
  },
  {
    q: 'Do you provide any one click install scripts along with Cloud Hosting?',
    a: "Yes - we provide 'Quick Install' which is accessible from your cPanel. Quick Install allows you to plug and play various scripts like WordPress, Drupal, Joomla, shopping carts like Zencart, Magento and various other billing, social networking, support and chat modules.",
  },
  {
    q: 'Is Upgrade/Downgrade possible?',
    a: 'No, an upgrade or downgrade is not possible between the plans. However, you can purchase additional RAM and CPU cores as per your requirement.',
  },
  {
    q: 'What is your backup policy?',
    a: 'You are responsible for your backups and web content. We create our own weekly backups, and can restore your web, email and database content from those per your request. However, this is NOT a procedure you should rely on to keep copies of your content safe; we recommend you make your own backups. You can take a backup from your cPanel or better, use a remote backup solution.',
  },
  {
    q: 'Is there a Money Back Guarantee?',
    a: 'Yes, we do have a 30 day Money Back Guarantee associated with Cloud Hosting.',
  },
];
