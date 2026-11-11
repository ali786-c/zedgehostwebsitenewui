import type { SeoData } from './types';
import seoData from './seo.json';

export const aboutSeo = seoData.about as unknown as SeoData;

export const aboutIntro =
  'We are committed to protecting your privacy and safeguarding your personal information. This Privacy Policy explains how we collect, use, store, and protect the data you provide while using our website, products, and services.';

export const aboutSections: { title: string; paragraphs: string[] }[] = [
  {
    title: 'Who We Are',
    paragraphs: [
      'We are a trusted web hosting and domain service provider focused on helping businesses and individuals establish, grow, and manage their online presence. Our mission is to provide reliable infrastructure, exceptional support, and innovative solutions that empower our customers to succeed online.',
    ],
  },
  {
    title: 'Our Mission',
    paragraphs: [
      'Our mission is to make web hosting simple, secure, and accessible for everyone. We strive to deliver high-performance hosting solutions backed by cutting-edge technology and dedicated customer support.',
    ],
  },
  {
    title: 'What We Offer',
    paragraphs: [
      'We provide a complete range of web services, including Shared Hosting, VPS Hosting, Cloud Hosting, Dedicated Servers, Domain Registration, SSL Certificates, Professional Email Hosting, and Website Security Solutions.',
    ],
  },
  {
    title: 'Why Choose Us',
    paragraphs: [
      'Our platform is built on reliability, speed, and security. We combine enterprise-grade infrastructure with user-friendly management tools to ensure that websites perform at their best while remaining easy to manage.',
    ],
  },
  {
    title: 'Our Technology',
    paragraphs: [
      'We utilize modern server technologies, SSD storage, high-speed networks, and advanced security systems to deliver exceptional performance and uptime for websites of all sizes.',
    ],
  },
  {
    title: 'Customer Support',
    paragraphs: [
      'Our experienced support team is available around the clock to assist with technical issues, account management, and hosting-related questions. We are committed to providing prompt and effective solutions whenever you need help.',
    ],
  },
  {
    title: 'Security & Reliability',
    paragraphs: [
      'Security is at the core of everything we do. We implement proactive monitoring, DDoS protection, regular backups, malware scanning, and advanced security measures to keep your data safe and your services online.',
    ],
  },
  {
    title: 'Our Commitment',
    paragraphs: [
      'We are committed to delivering dependable services, transparent pricing, and continuous innovation. Our goal is to build long-term relationships with our customers by consistently exceeding expectations.',
    ],
  },
  {
    title: 'Growing Together',
    paragraphs: [
      "Whether you're launching your first website, running an online store, or managing enterprise applications, we provide scalable solutions designed to grow alongside your business.",
    ],
  },
  {
    title: 'Our Vision',
    paragraphs: [
      'We envision a future where businesses of all sizes can access powerful web technologies without complexity, enabling them to focus on innovation, growth, and success.',
    ],
  },
  {
    title: 'Contact Us',
    paragraphs: [
      "We'd love to hear from you. If you have questions about our services or need assistance, feel free to contact our team.",
    ],
  },
];

export const aboutContact = {
  email: 'support@zedgehost.com',
  phone: '+92 305 4380315',
  phoneHref: 'tel:+923054380315',
  address: 'Chak 75 A SB, Lokri, Sargodha, Punjab, Pakistan',
};
