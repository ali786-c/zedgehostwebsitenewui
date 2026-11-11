import type { FaqItem, Feature, ProductPageData } from './types';
import { cataloguePlans } from './plans/catalogue';
import { supportCta } from './blocks';
import { enterpriseFeatures } from './email';

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
  serviceType: 'Website Hosting Solutions in Pakistan',
  provider: {
    '@type': 'Organization',
    name: 'Zedgehost Pakistan',
    url: 'https://zedgehost.com/',
  },
  areaServed: 'Pakistan',
  url: 'https://zedgehost.com/gaps.html',
  description:
    'Find hosting solutions in Pakistan for business growth, performance, security, and website reliability.',
};

const BREADCRUMB = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://zedgehost.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Google Workspace',
      item: 'https://zedgehost.com/gaps.html',
    },
  ],
};

/** Icon-only cards from the legacy grid (no supporting copy on that page). */
const workspaceFeatures: Feature[] = [
  { icon: 'mail', title: 'Get the power of Gmail' },
  { icon: 'phone', title: 'Never miss a meeting' },
  { icon: 'whatsapp', title: 'Communicate on the go' },
  { icon: 'lock', title: 'Manage Efficiently' },
  { icon: 'backup', title: 'Archive your data with ease' },
  { icon: 'shield', title: 'Secure' },
  { icon: 'layers', title: 'Intelligent Collaboration' },
  { icon: 'globe', title: 'Smart Search' },
  { icon: 'sparkles', title: 'Currents' },
];

const workspaceFaqs: FaqItem[] = [
  {
    q: 'Can I use my existing domain with Google Workspace?',
    a: 'Yes, you can use an existing domain with your Google Workspace order.',
  },
  {
    q: 'What happens to my existing mail, contacts, and calendar data when I move to Google Workspace?',
    a: "When switching to Google Workspace from another program or web service, you and your users can bring your existing mail, contacts, and calendar data with you. You have a variety of options for migrating data into Google Workspace, depending on the size of your organization and the system you're migrating from. Tools are available for migration from Microsoft Exchange, Lotus Notes, IMAP servers and other Google accounts.",
  },
  {
    q: 'What is the space provided per Email Account?',
    a: 'Each email account comes with 30 GB space.',
  },
  {
    q: 'Is Google Workspace compatible with the email client I use today?',
    a: "In addition to accessing Google Workspace mail from the Gmail web interface, you can send and receive mail from your favorite desktop client. Depending on the client, you can use either the IMAP or POP mail protocol. If you're switching to Google Workspace from Microsoft Exchange or some other Outlook service, you can use Google Workspace Sync. This is a plug-in for Outlook 2003, 2007, 2010 or 2013 that lets you use Outlook to manage your Google Workspace mail, calendar and contacts—along with your Outlook notes, tasks and journal entries.",
  },
  {
    q: 'Which Email Clients and protocols are supported?',
    a: 'You can send and receive emails using any desktop-based email client such as Microsoft Outlook, Outlook Express, Mozilla Thunderbird, Eudora, Entourage 2004, Windows Mail, etc. We also have a guide on how you can configure different email clients to send/receive emails. The enterprise email product supports the POP, IMAP and MAPI protocols.',
  },
  {
    q: 'Which mobile phones can I access my mail from?',
    a: 'Your email can be accessed using any Smartphone or Tablet. The Gmail interface is compatible on all major Operating systems such as iOS, Android, Windows Mobile, Symbian and Blackberry.',
  },
  {
    q: 'If I only want one of the products, do I have to buy the entire suite?',
    a: 'Yes. Google Workspace is designed as an all-in-one solution with integrated tools that work seamlessly together. For instance, you can receive a message in Gmail and instantly convert it into a Calendar event. When you make a comment in Docs, Sheets or Slides, collaborators automatically receive email alerts. With a single click, you can launch a Hangouts video meeting from your inbox or calendar. Using these tools as a complete package improves productivity while giving your business the most value. However, you are welcome to purchase the suite and only use the services of your choice.',
  },
  {
    q: 'Can I create mailing lists?',
    a: 'Yes, you can create mailing lists and add/delete users, select a moderator, restrict people from joining a list or even ban users from a list.',
  },
];

export const gapsPage: ProductPageData = {
  seo: {
    title: 'Website Hosting Gaps & Solutions Pakistan',
    description:
      'Find hosting solutions in Pakistan for business growth, performance, security, and website reliability.',
    canonical: 'https://zedgehost.com/gaps.html',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    schema: [[ORGANIZATION, SERVICE], BREADCRUMB],
  },
  hero: {
    title: 'Google Workspace for Modern Teams',
    priceFrom: 1680,
    priceSuffix: 'user/month',
    chips: [
      { icon: 'mail', label: 'Professional Gmail on Your Domain' },
      { icon: 'cloud', label: 'Google Drive Cloud Storage' },
      { icon: 'headset', label: 'Google Meet Video Conferencing' },
      { icon: 'code', label: 'Docs, Sheets & Slides' },
      { icon: 'shield', label: 'Advanced Security Controls' },
      { icon: 'phone', label: '24/7 Expert Support' },
    ],
    primaryCta: { label: 'Get Google Workspace', href: '.' },
    image: { src: '/assets/img/hosting.webp', alt: 'Google Workspace for teams' },
    variant: 'light',
  },
  plans: {
    eyebrow: 'Google Workspace',
    title: 'Email Plans Built for Your Growth',
    subtitle:
      'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
    plans: cataloguePlans,
  },
  sections: [
    {
      kind: 'features',
      eyebrow: 'Enterprise Email',
      title: "What's amazing about Enterprise Email",
      subtitle: 'Next-level Performance and Reliability with Simplified Management.',
      features: [...enterpriseFeatures, ...workspaceFeatures],
      tone: 'mint',
    },
  ],
  cta: supportCta,
  faq: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Explore our FAQ to find quick answers to the most common questions about our products and services.',
    items: workspaceFaqs,
  },
};
