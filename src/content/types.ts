import type { IconName } from '../components/ui/Icon';

export interface SeoData {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  schema: unknown[];
}

export interface Cta {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'on-dark';
}

export interface HeroData {
  eyebrow?: string;
  title: string;
  subtitle: string;
  priceFrom?: number;
  priceRegular?: number;
  priceSuffix?: string;
  ticks?: string[];
  chips?: { icon: IconName; label: string }[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  image: { src: string; alt: string };
  showDomainSearch?: boolean;
  variant?: 'light' | 'dark';
}

export interface HostingType {
  icon: IconName;
  title: string;
  description: string;
  href: string;
  popular?: boolean;
}

export interface PlanSpec {
  value: string;
  label: string;
}

export interface Plan {
  name: string;
  tagline: string;
  annualPrice: number;
  note: string;
  ctaHref: string;
  popular?: boolean;
  badge?: string;
  specs: PlanSpec[];
  more: string[];
}

export interface PlanSectionData {
  eyebrow: string;
  title: string;
  subtitle: string;
  plans: Plan[];
}

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CtaBandData {
  title: string;
  text: string;
  primary: Cta;
  secondary?: Cta;
}

export interface TrustItem {
  icon: IconName;
  title: string;
  text: string;
}
