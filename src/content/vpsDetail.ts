import type { ProductPageData, SeoData } from './types';
import { contactHref, supportCta } from './blocks';
import { vpsPlanMeta } from './plans/vps';
import { seo } from './seo';

function detailPage(
  metaKey: keyof typeof vpsPlanMeta,
  pageSeo: SeoData,
): ProductPageData {
  const meta = vpsPlanMeta[metaKey];
  const { plan } = meta;

  return {
    seo: pageSeo,
    hero: {
      eyebrow: 'Linux VPS Hosting in Pakistan',
      title: meta.h1,
      subtitle: meta.summary,
      priceFrom: plan.price,
      priceSuffix: 'month',
      ticks: [
        `${plan.specs[0].value} processor`,
        `${plan.specs[1].value} memory`,
        `${plan.specs[2].value} SSD storage`,
        `${plan.specs[3].value} monthly data transfer`,
        'Root access included',
        'Full server control',
      ],
      primaryCta: { label: `Buy ${plan.name} Now`, href: plan.ctaHref },
      secondaryCta: { label: 'Compare all Linux VPS plans', href: 'linux-vps-server.html' },
      image: {
        src: '/assets/img/cloud-infrastructure.webp',
        alt: `${plan.name} Linux VPS by ZedgeHost`,
      },
      variant: 'light',
    },
    plans: {
      eyebrow: 'VPS Plan',
      title: `${plan.name} Monthly Price`,
      subtitle: meta.summary,
      note: 'Prices are shown in PKR by default. Use the currency selector in the header to switch to USD.',
      plans: [plan],
    },
    sections: [
      {
        kind: 'specs',
        data: {
          eyebrow: 'Specifications',
          title: `${plan.name} Specifications`,
          subtitle:
            'Contact our team to confirm availability and order details before you purchase.',
          rows: [
            { label: 'Processor', value: plan.specs[0].value },
            { label: 'Memory', value: plan.specs[1].value },
            { label: 'Storage', value: plan.specs[2].value },
            { label: 'Data Transfer', value: plan.specs[3].value },
            { label: 'Port', value: 'Up to 10 Gbps Shared Port' },
            { label: 'Root Access', value: 'Included' },
            { label: 'Server Control', value: 'Full Server Control' },
          ],
        },
      },
    ],
    cta: {
      ...supportCta,
      primary: { label: `Buy ${plan.name} Now`, href: plan.ctaHref },
      secondary: { label: 'Ask About VPS Plans', href: contactHref },
    },
  };
}

export const basicVpsPage = detailPage('basic-vps-hosting', seo.basicVps);
export const standardVpsPage = detailPage('standard-vps-hosting', seo.standardVps);
export const professionalVpsPage = detailPage('professional-vps-hosting', seo.professionalVps);
export const proVpsPage = detailPage('pro-vps-hosting', seo.proVps);
