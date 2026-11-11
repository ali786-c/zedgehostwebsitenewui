import type { FaqItem, Feature, HeroData, Plan, ProductPageData } from './types';
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
  secondaryCta: { label: 'Talk to an Expert', href: 'https://my.zedgehost.com/contact.php' },
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

const features: Feature[] = [
  {
    icon: 'gauge',
    title: '99.9% Uptime Guarantee',
    text: 'Your website stays online and accessible with reliable infrastructure designed for maximum uptime.',
  },
  {
    icon: 'lock',
    title: 'Free SSL Certificate',
    text: 'Secure your website and build visitor trust with a free SSL certificate included in every plan.',
  },
  {
    icon: 'sparkles',
    title: 'One-Click Installers',
    text: 'Easily install popular applications like WordPress, Joomla, and more with just one click.',
  },
  {
    icon: 'globe',
    title: 'Unlimited Bandwidth',
    text: 'Enjoy smooth performance without worrying about traffic limits or data usage.',
  },
  {
    icon: 'shield',
    title: 'Malware Protection',
    text: 'Advanced security measures protect your website from malware, threats, and unauthorized access.',
  },
  {
    icon: 'layers',
    title: 'cPanel Access',
    text: 'Manage your hosting environment effortlessly with a user-friendly and powerful control panel.',
  },
];

const whyChoose: Feature[] = [
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

const faqs: FaqItem[] = [
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
  {
    q: 'What is website hosting?',
    a: 'Website hosting is a service that allows individuals and organizations to make their website accessible on the internet by storing it on a server.',
  },
  {
    q: 'What types of website hosting are available?',
    a: 'Website hosting options include shared hosting, VPS hosting, dedicated hosting, cloud hosting, and managed hosting, each catering to different needs and performance requirements.',
  },
  {
    q: 'What is shared hosting?',
    a: 'Shared hosting is a type of web hosting where multiple websites share the same server resources, making it a cost-effective option for smaller websites.',
  },
  {
    q: 'What is Reseller hosting?',
    a: 'Reseller hosting is a service where individuals or companies purchase hosting resources and resell them to their clients, allowing them to manage multiple websites under one account.',
  },
  {
    q: 'What is VPS hosting?',
    a: 'VPS hosting provides a virtual private server, offering dedicated resources and increased control compared to shared hosting, making it ideal for growing websites needing more power and flexibility.',
  },
  {
    q: 'What is dedicated hosting?',
    a: 'Dedicated hosting provides an entire server exclusively for one client, offering maximum performance, control, and security, making it ideal for high-traffic websites and resource-intensive applications.',
  },
  {
    q: 'What is cloud hosting?',
    a: 'Cloud hosting uses a network of virtual servers to host websites, providing scalable resources, high availability, and enhanced performance by distributing the load across multiple servers.',
  },
  {
    q: 'What is managed hosting?',
    a: 'Managed hosting includes comprehensive support where the hosting provider handles server management tasks such as maintenance, security, and backups, allowing clients to focus on their websites.',
  },
];

export const sharedHostingPage: ProductPageData = {
  seo: seo.sharedHosting,
  hero,
  plans,
  sections: [
    {
      kind: 'split',
      data: {
        eyebrow: 'Performance',
        title: 'Everything You Need to Build and Grow Online',
        text: 'Dependable, secure, and high-performing - our hosting solutions grow with your business, optimized resources, low latency, and reliable uptime, ensuring smooth website performance, faster page loads, and an exceptional browsing experience for every visitor.',
        points: ['NVMe SSD Storage', '99.9% Uptime', 'LiteSpeed Servers', 'Global Data Centers'],
        image: {
          src: '/assets/img/cloud-infrastructure.webp',
          alt: 'Shared hosting infrastructure by ZedgeHost',
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
      features,
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
        image: { src: '/assets/img/security.webp', alt: 'Advanced security for shared hosting' },
        reverse: true,
      },
    },
    {
      kind: 'features',
      eyebrow: 'Benefits',
      title: 'Why Choose Us?',
      subtitle:
        'Choose our hosting for unmatched speed, reliable uptime, advanced security, and 24/7 expert support designed to keep your website running at its best.',
      features: whyChoose,
      tone: 'mint',
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
