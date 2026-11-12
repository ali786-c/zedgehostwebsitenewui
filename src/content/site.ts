import type { IconName } from '../components/ui/Icon';

export const site = {
  name: 'ZedgeHost',
  legalName: 'Zedgehost Pakistan',
  origin: 'https://zedgehost.com',
  phoneDisplay: '+92 305 4380315',
  phoneHref: 'tel:+923054380315',
  supportEmail: 'support@zedgehost.com',
  infoEmail: 'info@zedgehost.com',
  whatsapp: 'https://wa.me/923054380315',
  address: 'Chak 75 A SB, Lokri, Sargodha, Punjab, Pakistan',
  clientArea: 'https://my.zedgehost.com/index.php?rp=/login',
  contact: 'https://my.zedgehost.com/contact.php',
  knowledgeBase: 'https://my.zedgehost.com/knowledgebase/',
  domainSearchAction: 'https://my.zedgehost.com/cart.php',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=1414485325077113',
    x: 'https://x.com/zedgehost',
    instagram: 'https://www.instagram.com/zedgehost',
    linkedin: 'https://www.linkedin.com/company/zedgehost',
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: IconName;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  columns?: NavColumn[];
  promo?: {
    title: string;
    text: string;
    ctaLabel: string;
    ctaHref: string;
  };
}

export const navigation: NavItem[] = [
  { label: 'Home', href: 'index.html' },
  {
    label: 'Hosting',
    href: 'shared-hosting.html',
    columns: [
      {
        title: 'Reliable Hosting Plans',
        links: [
          {
            label: 'Shared Hosting',
            href: 'shared-hosting.html',
            description: 'Perfect for smaller websites and blogs.',
            icon: 'server',
          },
          {
            label: 'WordPress Hosting',
            href: 'wordpress-hosting.html',
            description: 'A secure, powerful platform crafted for WordPress.',
            icon: 'layers',
          },
          {
            label: 'Cloud Hosting',
            href: 'cloud-hosting.html',
            description: 'Power your business with Cloud, 2x faster & scalable.',
            icon: 'cloud',
          },
          {
            label: 'VPS Hosting',
            href: 'linux-vps-server.html',
            description: 'A cost-effective dedicated server experience.',
            icon: 'database',
          },
        ],
      },
      {
        title: 'More services',
        links: [
          {
            label: 'Dedicated Server',
            href: 'dedicated-server.html',
            description: 'Full control of an entire server.',
            icon: 'server',
          },
          {
            label: 'Reseller Hosting',
            href: 'reseller-hosting.html',
            description: 'Start your own hosting business.',
            icon: 'layers',
          },
          {
            label: 'Website Security',
            href: 'siteLock.html',
            description: 'Malware scanning and website protection.',
            icon: 'shield',
          },
        ],
      },
    ],
    promo: {
      title: '70% Off for your first Domain',
      text: 'Register a .com, .pk or any popular extension and launch your website today.',
      ctaLabel: 'See Domain Pricing',
      ctaHref: 'https://my.zedgehost.com/cart.php?a=add&domain=register#domainExtensionsPricing',
    },
  },
  {
    label: 'Domain',
    href: 'domain-search.html',
    columns: [
      {
        title: 'Domain',
        links: [
          {
            label: 'Domain Name Search',
            href: 'domain-search.html',
            description: 'Book your domain here.',
            icon: 'globe',
          },
          {
            label: 'Domain Pricing',
            href: 'https://my.zedgehost.com/cart.php?a=add&domain=register#domainExtensionsPricing',
            description: 'View domain registration pricing.',
            icon: 'card',
          },
          {
            label: 'Domain Transfer',
            href: 'https://my.zedgehost.com/cart.php?a=add&domain=transfer',
            description: 'Transfer your domain to ZedgeHost.',
            icon: 'refresh',
          },
        ],
      },
      {
        title: 'Popular extensions',
        links: [
          {
            label: 'New gTLDs',
            href: 'new-gtlds.html',
            description: 'Fresh domain extensions for new brands.',
            icon: 'sparkles',
          },
          {
            label: 'Free gTLDs',
            href: 'free-gtlds.html',
            description: 'Free domain offers with hosting plans.',
            icon: 'star',
          },
        ],
      },
    ],
    promo: {
      title: 'Reliable Managed WordPress Hosting',
      text: 'Fast, secure and always supported hosting for your WordPress website.',
      ctaLabel: 'See Pricing',
      ctaHref: 'wordpress-hosting.html',
    },
  },
  { label: 'Contact', href: site.contact },
  { label: 'Blog', href: 'blog.html' },
  { label: 'Support', href: site.knowledgeBase },
];

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Hosting',
    links: [
      { label: 'Shared Hosting', href: 'shared-hosting.html' },
      { label: 'WordPress Hosting', href: 'wordpress-hosting.html' },
      { label: 'Cloud Hosting', href: 'cloud-hosting.html' },
      { label: 'Dedicated Server', href: 'dedicated-server.html' },
      { label: 'Website Security', href: 'siteLock.html' },
      { label: 'VPS Hosting', href: 'linux-vps-server.html' },
      { label: 'Reseller Hosting', href: 'reseller-hosting.html' },
    ],
  },
  {
    title: 'Domain',
    links: [
      { label: 'Search Domain', href: 'domain-search.html' },
      {
        label: 'Domain Transfer',
        href: 'https://my.zedgehost.com/cart.php?a=add&domain=transfer',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: 'about-us.html' },
      { label: 'Blog', href: 'blog.html' },
      { label: 'How It Works', href: 'how-it-works.html' },
      { label: 'Contact us', href: site.contact },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Knowledge Base', href: site.knowledgeBase },
      { label: 'Support', href: site.contact },
      { label: 'Service Status', href: 'https://stats.uptimerobot.com/XKR1gTaget' },
    ],
  },
];

/** Payment marks from the legacy footer ("We Accept" row). */
export const payments = [
  { src: '/assets/img/pay-visa.png', alt: 'Visa' },
  { src: '/assets/img/pay-mastercard.png', alt: 'Mastercard' },
  { src: '/assets/img/pay-easypaisa.png', alt: 'Easypaisa' },
  { src: '/assets/img/pay-jazzcash.png', alt: 'JazzCash' },
];

export const legalLinks = [
  { label: 'Terms & Conditions', href: 'legal.html' },
  { label: 'Refund Policy', href: 'refund-policy.html' },
  { label: 'Privacy Policy', href: 'policy.html' },
];
