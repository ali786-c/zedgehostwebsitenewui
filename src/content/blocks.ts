import type { Cta, CtaBandData, FaqItem, Feature, SplitSectionData } from './types';

export const contactHref = 'https://my.zedgehost.com/contact.php';

export const supportCta: CtaBandData = {
  title: 'Need Help? Our Support Team Is Available 24/7',
  text: "Get expert assistance anytime through tickets or email. We're here to help you succeed online.",
  primary: { label: 'Contact Us', href: contactHref },
};

export const supportLinkCta: Cta = {
  label: 'Contact our support team',
  href: contactHref,
};

/** The six "For … ?" cards shared by the hosting catalogue pages. */
export const industryFeatures: Feature[] = [
  {
    icon: 'globe',
    title: 'For domain name registration ?',
    text: 'Manage your domains effortlessly from locking and unlocking to generating transfer codes in just a few clicks.',
  },
  {
    icon: 'mail',
    title: 'For your professional email ?',
    text: 'Each client receives a dedicated IP address, helping eliminate common email delivery issues.',
  },
  {
    icon: 'server',
    title: 'For server management ?',
    text: 'Manage your domains effortlessly from locking and unlocking to generating transfer codes in just a few clicks.',
  },
  {
    icon: 'cloud',
    title: 'For hosting your website ?',
    text: 'Our communications solutions support you at every stage of your digital transformation—whether you’re an individual, a small business, or a large organization.',
  },
  {
    icon: 'shield',
    title: 'For securing your website ?',
    text: 'Advanced security measures protect your website from malware, threats, and unauthorized access.',
  },
  {
    icon: 'headset',
    title: 'For technical support ?',
    text: 'Benefit from the expertise of our highly qualified team, bringing deep, hands-on experience in web hosting to support your success.',
  },
];

/** Four feature cards shared by the "Why Choose Us?" sections. */
export const whyChooseFeatures: Feature[] = [
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

export function performanceSection(imageSrc: string, imageAlt: string): SplitSectionData {
  return {
    eyebrow: 'Performance',
    title: 'Everything You Need to Build and Grow Online',
    text: 'Dependable, secure, and high-performing - our hosting solutions grow with your business, optimized resources, low latency, and reliable uptime, ensuring smooth website performance, faster page loads, and an exceptional browsing experience for every visitor.',
    points: ['NVMe SSD Storage', '99.9% Uptime', 'LiteSpeed Servers', 'Global Data Centers'],
    image: { src: imageSrc, alt: imageAlt },
    tone: 'mint',
  };
}

export function securitySection(imageSrc: string, imageAlt: string): SplitSectionData {
  return {
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
    image: { src: imageSrc, alt: imageAlt },
    reverse: true,
  };
}

/** Generic hosting FAQ used by the catalogue pages that share the same copy. */
export const genericHostingFaqs: FaqItem[] = [
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

export const sslFaqs: FaqItem[] = [
  {
    q: 'What is an SSL Certificate?',
    a: 'An SSL Certificate is a digital certificate issued for a domain by a central authority called the Certificate Authority. To be issued an SSL Certificate, you must purchase an SSL Certificate and then go through a verification process conducted by the Certificate Authority.',
  },
  {
    q: 'Why should I buy an SSL Certificate?',
    a: "An SSL Certificate does 2 things: a. Encrypt the information sent from your user's browser to your website b. Authenticate your website's identity. By doing these 2 things, an SSL Certificate protects your customers and in turn increases their trust in your online business. This is especially important if your website requires users to login using passwords or enter sensitive information such as credit card details.",
  },
  {
    q: 'Do SSL Certificates work in all browsers?',
    a: 'SSL Certificates are compatible with all major browsers.',
  },
  {
    q: 'Can I upgrade my SSL Certificates?',
    a: 'Yes, you can upgrade your SSL certificate at any time to a higher validation level.',
  },
  {
    q: 'Do I need technical expertise to set up an SSL Certificate?',
    a: 'No. Our support team installs and configures the certificate for you on request.',
  },
];
