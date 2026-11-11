import type { FaqItem, Feature, ProductPageData } from './types';
import { cataloguePlansWith } from './plans/catalogue';
import { supportCta } from './blocks';

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zedgehost Pakistan',
  url: 'https://zedgehost.com/',
  logo: 'https://zedgehost.com/assets/img/logo.png',
  description:
    'Web hosting, domain registration, VPS, cloud hosting, business email, and website security services in Pakistan.',
  areaServed: 'Pakistan',
  sameAs: ['https://zedgehost.com/'],
};

const SERVICE = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Website Builder in Pakistan',
  provider: {
    '@type': 'Organization',
    name: 'Zedgehost Pakistan',
    url: 'https://zedgehost.com/',
  },
  areaServed: 'Pakistan',
  url: 'https://zedgehost.com/builder.html',
  description:
    'Create websites in Pakistan with a simple website builder and affordable hosting support.',
};

/** Legacy builder cards link "Buy Now" back to the page itself. */
const builderPlans = cataloguePlansWith('.');

const performanceStrip: Feature[] = [
  { icon: 'database', title: 'NVMe SSD Storage' },
  { icon: 'gauge', title: '99.9% Uptime' },
  { icon: 'bolt', title: 'LiteSpeed Servers' },
  { icon: 'globe', title: 'Global Data Centers' },
];

const builderFeatures: Feature[] = [
  {
    icon: 'sparkles',
    title: 'Intelligent Builder',
    text: 'Our builder picks the ideal layout, adds images, and provides pre-made content which you can easily customize.',
  },
  {
    icon: 'layers',
    title: 'Mobile Responsive',
    text: 'We build websites that are fully optimized for both desktop and mobile screens.',
  },
  {
    icon: 'card',
    title: 'eCommerce',
    text: 'List your products, set pricing, and manage your online store efficiently with our store functionality.',
  },
  {
    icon: 'code',
    title: 'Beautiful Blog',
    text: 'Instantly set up your ideal blog and share your ideas with the world using our Blog Creation feature.',
  },
  {
    icon: 'star',
    title: 'Marketing Features',
    text: 'Easily add title tags and meta descriptions to your web pages to boost your SEO ranking.',
  },
  {
    icon: 'shield',
    title: 'Website Security',
    text: 'All our websites are built securely and are fully protected – at no additional cost.',
  },
];

const builderFaqs: FaqItem[] = [
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

export const builderPage: ProductPageData = {
  seo: {
    title: 'Website Builder Pakistan | Create Websites Easily',
    description:
      'Create websites in Pakistan with a simple website builder and affordable hosting support.',
    canonical: 'https://zedgehost.com/builder.html',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schema: [[ORGANIZATION, SERVICE]],
  },
  hero: {
    eyebrow: 'Special Offer · Website Builder Plans',
    title: 'Create a Professional Website Without Coding',
    priceFrom: 1117,
    priceSuffix: 'month',
    chips: [
      { icon: 'code', label: 'Drag & Drop Builder' },
      { icon: 'layers', label: '100+ Templates' },
      { icon: 'gauge', label: 'Mobile Responsive Design' },
      { icon: 'lock', label: 'Free SSL Security' },
      { icon: 'star', label: 'Built-in SEO Tools' },
      { icon: 'headset', label: '24/7 Expert Support' },
    ],
    primaryCta: { label: 'Build Your Website', href: '.' },
    image: { src: '/assets/img/hosting.webp', alt: 'Website builder in Pakistan' },
    variant: 'light',
  },
  plans: {
    eyebrow: 'Website Builder',
    title: 'Hosting Plans Built for Your Growth',
    subtitle:
      'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
    plans: builderPlans,
  },
  sections: [
    {
      kind: 'features',
      title: 'Everything You Need to Build and Grow Online',
      subtitle:
        'Dependable, secure, and high-performing - our hosting solutions grow with your business, optimized resources, low latency, and reliable uptime, ensuring smooth website performance, faster page loads, and an exceptional browsing experience for every visitor.',
      features: performanceStrip,
      tone: 'mint',
    },
    {
      kind: 'steps',
      data: {
        title: 'Build Your Website in 3 Simple Steps',
        subtitle: 'Build your first website with ease using essential hosting features.',
        items: [
          {
            title: 'Answer a Few Questions',
            text: 'As we onboard you, we’ll ask you to answer a few questions so our AI-powered builder can accurately guide you in every step of creating the perfect website for you.',
          },
          {
            title: 'Customize Your Website',
            text: 'With our website builder’s drag-and-drop functionality, you can easily take control of your website – add sections, pages, buttons, design elements and more.',
          },
          {
            title: 'Go Live!',
            text: 'Once everything’s all set and ready to go, you can now publish your website with just a click and reach a wider audience online.',
          },
        ],
      },
    },
    {
      kind: 'split',
      data: {
        eyebrow: 'Website',
        title: 'Create Hosting Website In Minutes',
        text: 'Effortlessly create your hosting website in minutes with our intuitive platform. No coding skills required. Launch your site quickly and efficiently with our user-friendly tools.',
        points: ['Assured Speed', 'Numerous Domains', 'Ideal Protection', 'Advanced Storage'],
        icon: 'check-circle',
        image: { src: '/assets/img/wordpress.webp', alt: 'Website builder templates' },
      },
    },
    {
      kind: 'features',
      title: 'What You Get with Website Builder',
      subtitle:
        'Responsive design templates, drag-and-drop editing, SEO tools, and easy-to-use customization options.',
      features: builderFeatures,
    },
  ],
  cta: supportCta,
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Explore our FAQ to find quick answers to the most common questions about our products and services.',
    items: builderFaqs,
  },
};
