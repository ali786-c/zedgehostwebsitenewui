import type { Plan } from '../types';
import { contactHref } from '../blocks';

const serverSpecs = (processor: string) => [
  { value: processor, label: 'Processor' },
  { value: '8 Cores x 4.5GHz', label: 'CPU' },
  { value: 'Max 5.4GHz', label: 'Clock Speed' },
  { value: '1x 960GB', label: 'SSD Storage' },
  { value: '64GB', label: 'RAM' },
  { value: 'DDR5', label: 'Memory Type' },
  { value: '1 Gbit/s', label: 'Port' },
];

const note = 'Renews monthly. Cancel anytime.';

export const dedicatedPlans: Plan[] = [
  {
    name: 'Basic',
    tagline: 'Xeon 3-1265L V3',
    price: 624,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    specs: serverSpecs('Xeon 3-1265L V3'),
    more: ['Full Root Access', 'Server Administration Panel', 'DDoS Protection'],
  },
  {
    name: 'Business',
    tagline: 'Xeon E-2276G',
    price: 6283,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    specs: serverSpecs('Xeon E-2276G'),
    more: ['Full Root Access', 'Server Administration Panel', 'DDoS Protection'],
  },
  {
    name: 'Professional',
    tagline: 'Ryzen 7 7700X',
    price: 31388,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    specs: serverSpecs('Ryzen 7 7700X'),
    more: ['Full Root Access', 'Server Administration Panel', 'DDoS Protection'],
  },
  {
    name: 'Enterprise',
    tagline: 'Ryzen 9 7950X3D',
    price: 62437,
    billing: 'monthly',
    note,
    ctaHref: contactHref,
    specs: serverSpecs('Ryzen 9 7950X3D'),
    more: ['Full Root Access', 'Server Administration Panel', 'DDoS Protection'],
  },
];
