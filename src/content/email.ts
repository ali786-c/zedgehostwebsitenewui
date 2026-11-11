import type { FaqItem, Feature, ProductPageData } from './types';
import { cataloguePlans } from './plans/catalogue';
import { contactHref, supportCta, supportLinkCta } from './blocks';
import { seo } from './seo';

const faqs: FaqItem[] = [
  {
    q: 'How will purchasing Business Email benefit me?',
    a: 'Purchasing Business Email offers secure communication, professional features, collaboration tools, and ample storage, enhancing efficiency and establishing a credible and reliable online business presence.',
  },
  {
    q: 'Which Email Clients and protocols are supported?',
    a: 'Our Business Email supports popular email clients like Outlook, Thunderbird, and mobile devices, using standard protocols such as IMAP, POP3, and SMTP for flexible and accessible communication.',
  },
  {
    q: 'How do I use my Webmail Interface?',
    a: 'Access your webmail interface by logging into your email hosting account. Navigate through the user-friendly interface to manage emails, contacts, calendars, and settings effortlessly.',
  },
  {
    q: 'Which mobile phones can I access my mail from?',
    a: 'You can access your mail from a variety of mobile phones, including iOS and Android devices. Simply configure your email account using the standard IMAP or POP3 settings.',
  },
  {
    q: 'What is the space provided per Email Account?',
    a: 'The space provided per email account depends on the hosting plan. Generally, it ranges from 5GB to unlimited storage, ensuring ample space for your business email communications and data.',
  },
  {
    q: 'What ports do I need to use for Email Hosting?',
    a: 'Use the following ports for Email Hosting: IMAP (Port 143 or 993 for secure SSL), POP3 (Port 110 or 995 for secure SSL), and SMTP (Port 25 or 587 for secure SSL).',
  },
  {
    q: 'Can I create mailing lists?',
    a: 'Yes, you can create mailing lists with our Email Hosting. Utilize this feature to efficiently manage and send emails to specific groups or audiences for your business communication needs.',
  },
  {
    q: 'What is your SPAM policy?',
    a: 'Our SPAM policy ensures a secure and clean email environment. Strict measures are taken to prevent, detect, and eliminate spam, maintaining a high-quality email service.',
  },
];

const whatIsEmail = [
  'Email hosting is a service that provides custom email addresses using a domain name. It ensures security, reliability, and professional communication with advanced features like spam protection, encryption, and cloud storage, making it ideal for businesses and organizations.',
  'Email hosting is a specialized service that allows users to create and manage professional email accounts linked to their domain. It offers enhanced security, high uptime, and advanced management tools, ensuring seamless communication and data protection for businesses and individuals.',
];

const businessFeatures: Feature[] = [
  {
    icon: 'mail',
    title: 'Gmail',
    text: 'Gmail offers secure, fast, and user-friendly email services with spam protection, cloud storage, and accessibility.',
  },
  {
    icon: 'gauge',
    title: 'Calendar',
    text: 'Calendar helps schedule events, set reminders, manage tasks, sync devices, and organize daily activities efficiently.',
  },
  {
    icon: 'globe',
    title: 'Meet',
    text: 'Meet enables secure video conferencing, screen sharing, real-time collaboration, chat, and seamless team communication.',
  },
  {
    icon: 'code',
    title: 'Docs',
    text: 'Docs allows real-time collaboration, cloud storage, editing, sharing, formatting, and secure document management online.',
  },
  {
    icon: 'layers',
    title: 'Sheets',
    text: 'Sheets offers real-time collaboration, data analysis, charts, automation, cloud storage, and secure spreadsheet management.',
  },
  {
    icon: 'sparkles',
    title: 'Slides',
    text: 'Slides enables real-time collaboration, creative presentations, templates, animations, cloud storage, and seamless sharing options.',
  },
  {
    icon: 'database',
    title: 'Drive',
    text: 'Drive provides secure cloud storage, file sharing, backups, collaboration, accessibility, and seamless device synchronization.',
  },
  {
    icon: 'check-circle',
    title: 'Forms',
    text: 'Forms enables easy survey creation, data collection, real-time collaboration, customization, analytics, and seamless integration.',
  },
  {
    icon: 'headset',
    title: 'Chat',
    text: 'Chat enables real-time messaging, file sharing, collaboration, group chats, notifications, and secure communication.',
  },
];

const enterpriseFeatures: Feature[] = [
  {
    icon: 'database',
    title: 'More than Enough Mailbox Space',
    text: 'With 30GB of Email storage, you will never run out of space. Powered by our state-of-the-art webmail platform, it is all backed-up in our high-end mail storage infrastructure.',
  },
  {
    icon: 'layers',
    title: 'Get Additional Storage @ Rs 20.00/5GB',
    text: 'No more worrying about running out of storage space. You can now increase storage for individual accounts by buying additional storage blocks of 5 GB.',
  },
  {
    icon: 'check-circle',
    title: 'Stay Organised',
    text: 'Quick sharing of Calendars and Contacts only means one thing - you get more done. Easier, better & faster!',
  },
  {
    icon: 'sparkles',
    title: 'Smart Widgets',
    text: 'View customized news feeds, stay updated on the weather and keep your emails secured with last login IP details.',
  },
];

const faqSection = {
  title: 'Frequently Asked Questions',
  subtitle:
    'Explore our FAQ to find quick answers to the most common questions about our products and services.',
  items: faqs,
  cta: supportLinkCta,
};

const plans = {
  eyebrow: 'Email Hosting Plans',
  title: 'Email Plans Built for Your Growth',
  subtitle:
    'Web hosting options designed for speed, uptime, and global infrastructure reliability.',
  plans: cataloguePlans,
};

export const businessEmailPage: ProductPageData = {
  seo: seo.businessEmail,
  hero: {
    eyebrow: 'Business Email',
    title: 'Professional Business Email for Your Brand',
    priceFrom: 557,
    priceSuffix: 'month',
    chips: [
      { icon: 'mail', label: 'Custom Domain Email' },
      { icon: 'shield', label: 'Spam & Virus Protection' },
      { icon: 'globe', label: 'Webmail & Mobile Access' },
      { icon: 'gauge', label: '99.9% Uptime Guarantee' },
      { icon: 'database', label: 'Large Mailbox Storage' },
      { icon: 'headset', label: '24/7 Expert Support' },
    ],
    primaryCta: { label: 'Get Business Email', href: contactHref },
    secondaryCta: { label: 'Talk to an Expert', href: contactHref },
    image: { src: '/assets/img/hosting.webp', alt: 'Business email hosting in Pakistan' },
    variant: 'light',
  },
  plans,
  sections: [
    {
      kind: 'prose',
      data: { eyebrow: 'Email', title: 'What is Email Hosting ?', paragraphs: whatIsEmail },
    },
    {
      kind: 'features',
      eyebrow: 'Email',
      title: 'Email Hosting Features',
      subtitle: 'Secure, reliable, fast, scalable, encrypted, spam-free, cloud-based, and user-friendly.',
      features: businessFeatures,
      tone: 'mint',
    },
  ],
  cta: supportCta,
  faq: faqSection,
};

export const enterpriseEmailPage: ProductPageData = {
  seo: seo.enterpriseEmail,
  hero: {
    eyebrow: 'Enterprise Email',
    title: 'Enterprise Email Solutions for Growing Businesses',
    priceFrom: 837,
    priceSuffix: 'user/month',
    chips: [
      { icon: 'mail', label: 'Professional Domain Email' },
      { icon: 'shield', label: 'Advanced Spam Protection' },
      { icon: 'database', label: 'Large Mailbox Storage' },
      { icon: 'globe', label: 'Webmail & Mobile Access' },
      { icon: 'check-circle', label: 'Shared Calendars & Contacts' },
      { icon: 'gauge', label: '99.9% Uptime Guarantee' },
    ],
    primaryCta: { label: 'Get Enterprise Email', href: contactHref },
    secondaryCta: { label: 'Talk to an Expert', href: contactHref },
    image: { src: '/assets/img/hosting.webp', alt: 'Enterprise email hosting in Pakistan' },
    variant: 'light',
  },
  plans,
  sections: [
    {
      kind: 'prose',
      data: { eyebrow: 'Email', title: 'What is Email Hosting ?', paragraphs: whatIsEmail },
    },
    {
      kind: 'features',
      eyebrow: 'Enterprise Email',
      title: "What's amazing about Enterprise Email",
      subtitle: 'Next-level Performance and Reliability with Simplified Management.',
      features: enterpriseFeatures,
      tone: 'mint',
    },
  ],
  cta: supportCta,
  faq: faqSection,
};
