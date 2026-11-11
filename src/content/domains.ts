import type {
  FaqItem,
  Feature,
  ProductPageData,
  TldTableSectionData,
} from './types';
import { supportCta } from './blocks';
import { seo } from './seo';

const heroImage = { src: '/assets/img/hosting.webp', alt: 'Domain registration in Pakistan' };

const domainChips = [
  { icon: 'globe' as const, label: '300+ TLD Extensions' },
  { icon: 'lock' as const, label: 'Free Domain Locking' },
  { icon: 'shield' as const, label: 'Domain Theft Protection' },
  { icon: 'refresh' as const, label: 'Instant Activation' },
  { icon: 'headset' as const, label: '24/7 Local Support' },
];

const addons: Feature[] = [
  {
    icon: 'mail',
    title: '90-Day Free Trial - Titan Email',
    text: 'Get 2 custom email accounts @yourdomain.com on a 90-day free trial.',
  },
  {
    icon: 'globe',
    title: 'Domain Forwarding',
    text: 'Point your domain name to another website for free! Redirect users when they type your domain name into a browser (with/without domain masking & SEO).',
  },
  {
    icon: 'layers',
    title: 'DNS Management',
    text: 'Free lifetime DNS service which allows you to manage your DNS records on our globally distributed and highly redundant DNS infrastructure.',
  },
  {
    icon: 'shield',
    title: 'Domain Theft Protection',
    text: 'Protect your Domain from being transferred out accidentally or without your permission with our free Domain Theft Protection.',
  },
  {
    icon: 'refresh',
    title: 'Bulk Tools',
    text: 'Easy-to-use bulk tools to help you Register, Renew, Transfer and make other changes to several Domain Names in a single step.',
  },
  {
    icon: 'gauge',
    title: 'Easy to use Control Panel',
    text: 'Use our intuitive Control Panel to manage your domain name, configure email accounts, renew your domain name and buy more services.',
  },
];

const addonsSection = {
  kind: 'features' as const,
  eyebrow: 'Included',
  title: 'FREE Add-ons with every Domain Name!',
  subtitle: 'Get over Rs 28,000 worth of Free Services with every Domain you Register.',
  features: addons,
};

export const popularTlds: TldTableSectionData = {
  eyebrow: 'Pricing',
  title: 'Secure Your Domain with Popular TLD Extensions',
  subtitle:
    'Register your perfect domain with access to 300+ extensions designed for businesses, startups, and creators.',
  columns: ['New Registration', 'Transfer', 'Renewal'],
  rows: [
    { tld: '.pk', values: ['Rs 4,999', 'Contact us', 'Contact us'] },
    { tld: '.com', values: ['Rs 3,921', 'Rs 3,921', 'Rs 3,921'] },
    { tld: '.net', values: ['Rs 4,512', 'Rs 4,512', 'Rs 4,512'] },
    { tld: '.org', values: ['Rs 2,879', 'Rs 4,195', 'Rs 4,195'] },
  ],
};

const domainLocking = {
  eyebrow: 'Security',
  title: 'Domain Locking',
  paragraphs: [
    "We keep your domains secure with domain locking, ensuring unauthorized transfers are a thing of the past. You're in control – easily unlock domains whenever you choose, providing you with the peace of mind that your online assets are always in safe hands.",
    'With the power to unlock at your fingertips, you maintain ultimate control over your online assets, ensuring a secure and flexible domain management experience.',
    'Domain locking at Zedgehost prevents unauthorized domain transfers, ensuring your domain remains secure and under your control.',
  ],
};

const manageSection = {
  kind: 'features' as const,
  eyebrow: 'Management',
  title: 'How Do You Manage Your Domain Name?',
  subtitle: 'Managing your domain is simple and effortless with our intuitive control panel.',
  features: [
    {
      icon: 'gauge' as const,
      title: 'Easy Domain Registration',
      text: 'Register your domain name instantly with a simple process, quick verification, and complete control from one dashboard.',
    },
    {
      icon: 'layers' as const,
      title: 'Easy Control Panel',
      text: 'User-friendly control panel lets you manage domains, DNS, security, and renewals effortlessly from one place.',
    },
    {
      icon: 'shield' as const,
      title: 'Domain Theft Protection',
      text: 'Advanced security features protect your domain from unauthorized transfers, hijacking attempts, and accidental ownership changes.',
    },
  ],
};

export const domainSearchPage: ProductPageData = {
  seo: seo.domainSearch,
  hero: {
    eyebrow: 'Domain Registration',
    title: 'Instant Domain Registration in Pakistan (.PK & Top TLDs)',
    subtitle:
      'Register .pk, .com.pk, and .com domains in Pakistan at lowest PKR rates with instant activation and full DNS control.',
    chips: domainChips,
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [
    { kind: 'tld-table', data: popularTlds },
    { kind: 'prose', data: domainLocking },
    addonsSection,
    manageSection,
  ],
  cta: supportCta,
};

const protectionFeatures: Feature[] = [
  {
    icon: 'lock',
    title: 'Domain Protection',
    text: 'Domain Lock ensures that your domain name is protected from unauthorized transfers or hijacking attempts. Once enabled, no changes can be made to your domain without proper authentication, keeping your digital identity safe.',
  },
  {
    icon: 'shield',
    title: 'Unauthorized Transfer Prevention',
    text: 'Domain Lock prevents hackers or third parties from transferring your domain without permission. Even if login details are compromised, your domain remains secure until you manually unlock it.',
  },
  {
    icon: 'check-circle',
    title: 'Ownership Verification',
    text: 'Only verified domain owners can approve changes such as registrar transfer or DNS updates. This extra layer of verification protects your domain from fraud and accidental changes.',
  },
  {
    icon: 'layers',
    title: 'DNS Change Security',
    text: 'With Domain Lock enabled, critical DNS and nameserver changes are restricted. This ensures your website traffic is not redirected to malicious or unauthorized destinations.',
  },
  {
    icon: 'mail',
    title: 'Instant Alerts',
    text: 'You receive instant notifications whenever a request is made to unlock or modify your domain. This allows you to quickly respond to suspicious activity and maintain full control.',
  },
  {
    icon: 'star',
    title: 'Brand & Identity Safety',
    text: 'By securing your domain name, Domain Lock protects your brand reputation, email services, and online presence from cyber threats, phishing attempts, and domain theft.',
  },
];

export const domainTransferPage: ProductPageData = {
  seo: seo.domainTransfer,
  hero: {
    eyebrow: 'Domain Transfer',
    title: 'Transfer Your Domain to Zedgehost Pakistan',
    subtitle:
      'Move your domain quickly and securely with a smooth transfer process, transparent pricing, and support from a team that understands Pakistan-based businesses.',
    chips: domainChips,
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [
    { kind: 'tld-table', data: popularTlds },
    {
      kind: 'features',
      eyebrow: 'Protection',
      title: 'Everything You Need to Secure Your Perfect Domain',
      subtitle: 'Register, manage, and protect your domain with powerful tools and reliable support.',
      features: protectionFeatures,
    },
    { kind: 'prose', data: { ...domainLocking, tone: 'mint' } },
    addonsSection,
    manageSection,
  ],
  cta: supportCta,
};

export const premiumDomainPage: ProductPageData = {
  seo: seo.premiumDomain,
  hero: {
    eyebrow: 'Premium Domains',
    title: 'Premium Domain Names for Pakistani Businesses',
    subtitle:
      'Stand out with a domain that matches your brand and builds trust instantly. Secure a memorable premium domain that improves credibility, increases brand recognition, and gives your business a stronger digital presence in Pakistan and beyond.',
    chips: domainChips,
    showDomainSearch: true,
    searchLabel: 'Search premium domains for your next big move.',
    image: heroImage,
    variant: 'light',
  },
  sections: [
    addonsSection,
    {
      kind: 'features',
      eyebrow: 'Premium',
      title: 'Why go Premium ?',
      features: [
        {
          icon: 'star',
          title: 'Get Short, Memorable Names',
          text: 'Register a catchy name that accurately defines your business and differentiates you from the crowd.',
        },
        {
          icon: 'globe',
          title: 'Attract More Traffic',
          text: 'Get well established names that boast of an excellent page rank, making it easier for your customers to find you.',
        },
        {
          icon: 'gauge',
          title: 'Get Great SEO Potential',
          text: 'Invite type-in traffic with keyword-rich Premium Domains and boost your SEO ranking.',
        },
        {
          icon: 'sparkles',
          title: 'Get Better Branding',
          text: 'Build a powerful brand that best describes your business - great for Products, Services, Portals, Blogs and more!',
        },
      ],
      tone: 'mint',
    },
  ],
  cta: supportCta,
};

const newGtldQuestions: FaqItem[] = [
  {
    q: 'Why are new domain extensions being introduced',
    a: "Today, it's hard for businesses and individuals to find domains that are both relevant and available. With over a hundred new domain extensions like .guru, .photography and .clothing being introduced, it will be much easier to find the right domain for your website.",
  },
  {
    q: 'How does the pre-registration process work?',
    a: 'Pre-registration lets you place an order for a domain before its made available to the general public. Once placed, the moment the domain becomes available, we attempt to purchase it on your behalf. In case the domain is not available, your money is refunded.',
  },
  {
    q: 'When will the new domain extensions become available ?',
    a: 'The new extensions will become available for purchase over the course of the next 12-14 months. Use our pre-registration service to ensure that you get your domain as soon as it becomes available.',
  },
];

export const newGtldsPage: ProductPageData = {
  seo: seo.newGtlds,
  hero: {
    eyebrow: 'New GTLDs',
    title: 'Get a Domain Extension That Fits Your Brand',
    subtitle:
      'Discover fresh, modern TLDs and pre-register the domains that best match your business, startup, or personal brand before competitors do.',
    chips: domainChips,
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [
    {
      kind: 'tld-table',
      data: {
        eyebrow: 'Pricing',
        title: 'New GTLD Pricing',
        subtitle: 'Pre-register modern extensions at a flat annual price.',
        columns: ['Price / year'],
        rows: [
          { tld: '.net', values: ['Rs 1,946 /yr'] },
          { tld: '.live', values: ['Rs 1,946 /yr'] },
          { tld: '.store', values: ['Rs 1,946 /yr'] },
          { tld: '.xyz', values: ['Rs 1,946 /yr'] },
          { tld: '.com', values: ['Rs 1,946 /yr'] },
        ],
      },
    },
    addonsSection,
  ],
  cta: supportCta,
  faq: {
    title: 'Tell me more',
    items: newGtldQuestions,
  },
};

export const freeGtldsPage: ProductPageData = {
  seo: seo.freeGtlds,
  hero: {
    eyebrow: 'Free GTLDs',
    title: 'Modern Domain Extensions for Your Brand in Pakistan',
    subtitle:
      'Choose a fresh GTLD that matches your business, whether you want a premium online identity, a cleaner startup brand, or a more memorable domain for your next digital project.',
    chips: domainChips,
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [addonsSection],
  cta: supportCta,
};

export const domainPromosPage: ProductPageData = {
  seo: seo.domainPromos,
  hero: {
    eyebrow: 'Domain Deals',
    title: 'Latest Domain Deals in Pakistan',
    subtitle:
      'Explore affordable registration offers and domain discounts designed for businesses, startups, and personal brands looking for better value.',
    chips: domainChips,
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [{ kind: 'tld-table', data: popularTlds }, addonsSection],
  cta: supportCta,
};

export const nameSuggestionPage: ProductPageData = {
  seo: seo.domainSuggestion,
  hero: {
    eyebrow: 'Domain Ideas',
    title: 'Find the Right Domain Name for Your Business in Pakistan',
    subtitle:
      'Use this tool to explore domain ideas for your startup, online store, personal brand, or business website. Enter a keyword or brand concept to generate memorable, relevant name suggestions that fit your target market.',
    chips: domainChips,
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [addonsSection],
  cta: supportCta,
};

const bulkNotes = [
  'The following domain name extensions are not supported for registration from here: .NYC, .FOUNDATION, .FR, .BERLIN, .EU, .ES, .DE, .CO, .CN, .CA, .NET.BR, .BLOG.BR, .ADV.BR, .ENG.BR, .ART.BR, .IND.BR, .ECO.BR, .ARQ.BR, .PRO.BR, .WIKI.BR, .MUS.BR, .COM.CO, .NET.CO, .NOM.CO, .COM.CN, .NET.CN, .ORG.CN, .TEL, .AU, .COM.AU, .NET.AU, .UK, .QUEBEC, .ORG.UK, .CO.UK, .ME.UK, .RU, .COM.RU, .NET.RU, .ORG.RU, .ONG, .NGO, .COM.BR, .NZ, .NL, .CO.NZ, .NET.NZ, .ORG.NZ, .MX, .COM.MX, .ORG.MX, .SCOT',
  'You will need funds in your customer advance account to register domain names using this tool. You can add funds to your customer advance account from the client area.',
  'Unlike the standard registration process, this method bypasses the check availability step and directly registers the domain names that you specify, if available.',
  'This tool is highly optimized to register domain names in bulk. It will instantly submit all domain names to the respective registry using high-speed, multi-threaded connections thereby maximizing the chances of getting the domain names that you want. However, it may take several hours before these domain names start appearing in your control panel.',
  'You will receive an email report which shows the status (successfully registered/domain unavailable) of all the domain names submitted by you at support@zedgehost.com.',
];

export const bulkTransferPage: ProductPageData = {
  seo: seo.bulkTransfer,
  hero: {
    eyebrow: 'Bulk Transfer',
    title: 'Bulk Domain Transfer in Pakistan',
    subtitle:
      'Move multiple domain names to one trusted provider with secure, efficient transfers and expert support.',
    chips: [
      { icon: 'refresh', label: 'Transfer many domains at once' },
      { icon: 'lock', label: 'Secure authorisation' },
      { icon: 'headset', label: 'Expert migration support' },
    ],
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [
    {
      kind: 'bulk-form',
      data: {
        eyebrow: 'Bulk Tools',
        title: 'Transfer your domain list',
        subtitle:
          'Ideal for agencies, businesses, and growing brands managing several domains. Add each domain on a separate line and include the extension, such as yourbrand.com or yourbrand.net.',
        mode: 'transfer',
        notes: bulkNotes,
      },
    },
    addonsSection,
  ],
  cta: supportCta,
};

export const bulkRegisterPage: ProductPageData = {
  seo: seo.bulkRegister,
  hero: {
    eyebrow: 'Bulk Registration',
    title: 'Register Multiple Domains in Pakistan',
    subtitle:
      'Manage your entire portfolio in one place with fast bulk domain registration and streamlined setup for businesses, agencies, and startups.',
    chips: [
      { icon: 'globe', label: 'Register many domains at once' },
      { icon: 'layers', label: 'One dashboard for your portfolio' },
      { icon: 'headset', label: 'Expert support' },
    ],
    showDomainSearch: true,
    image: heroImage,
    variant: 'light',
  },
  sections: [
    {
      kind: 'bulk-form',
      data: {
        eyebrow: 'Bulk Tools',
        title: 'Register your domain list',
        subtitle:
          'Simply add your domain list and let our team handle the registration process efficiently with secure DNS setup and clear reporting throughout. Perfect for businesses that need several domains, brands, or regional extensions without the usual admin hassle.',
        mode: 'register',
        notes: bulkNotes,
      },
    },
    addonsSection,
  ],
  cta: supportCta,
};
