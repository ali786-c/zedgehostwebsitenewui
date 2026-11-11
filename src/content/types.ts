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
  subtitle?: string;
  priceFrom?: number;
  priceRegular?: number;
  priceSuffix?: string;
  ticks?: string[];
  chips?: { icon: IconName; label: string }[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  image: { src: string; alt: string };
  showDomainSearch?: boolean;
  /** Helper line above the domain search form (legacy pages word it differently). */
  searchLabel?: string;
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

export type BillingPeriod = 'yearly' | 'monthly';

export interface Plan {
  name: string;
  tagline: string;
  price: number;
  billing: BillingPeriod;
  note: string;
  ctaHref: string;
  ctaLabel?: string;
  popular?: boolean;
  badge?: string;
  specs: PlanSpec[];
  more: string[];
}

export interface PlanSectionData {
  eyebrow: string;
  title: string;
  subtitle: string;
  note?: string;
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

export interface SplitSectionData {
  eyebrow?: string;
  title: string;
  text: string;
  points: string[];
  icon?: IconName;
  image: { src: string; alt: string };
  reverse?: boolean;
  tone?: 'default' | 'mint';
}

export interface ComparisonSectionData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export interface StepsSectionData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: { title: string; text: string }[];
}

export interface ProseSectionData {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  tone?: 'default' | 'mint';
}

export interface GroupsSectionData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  groups: { title: string; items: string[] }[];
}

export interface SpecsSectionData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  rows: { label: string; value: string }[];
}

export interface TldTableSectionData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  columns: string[];
  rows: { tld: string; values: string[] }[];
}

export interface BulkFormSectionData {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  mode: 'register' | 'transfer';
  /** Explanatory notes shown under the form (legacy page copy). */
  notes?: string[];
}

export type ProductSection =
  | { kind: 'split'; data: SplitSectionData }
  | {
      kind: 'features';
      eyebrow?: string;
      title: string;
      subtitle?: string;
      features: Feature[];
      tone?: 'default' | 'mint';
    }
  | { kind: 'comparison'; data: ComparisonSectionData }
  | { kind: 'steps'; data: StepsSectionData }
  | { kind: 'specs'; data: SpecsSectionData }
  | { kind: 'groups'; data: GroupsSectionData }
  | { kind: 'prose'; data: ProseSectionData }
  | { kind: 'tld-table'; data: TldTableSectionData }
  | { kind: 'bulk-form'; data: BulkFormSectionData };

export interface FaqSectionData {
  title: string;
  subtitle?: string;
  items: FaqItem[];
  cta?: Cta;
}

/** Everything a product page needs; the ProductPage template owns the layout. */
export interface ProductPageData {
  seo: SeoData;
  hero: HeroData;
  /** Omitted on domain pages that have no hosting plan grid. */
  plans?: PlanSectionData;
  sections: ProductSection[];
  cta: CtaBandData;
  /** Omitted on pages that have no FAQ section. */
  faq?: FaqSectionData;
}
