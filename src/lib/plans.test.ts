import { describe, expect, it } from 'vitest';
import type { Plan } from '../content/types';
import { comparisonLabels, comparisonValue, resolvePlanAmount } from './plans';

function plan(overrides: Partial<Plan>): Plan {
  return {
    name: 'Plan',
    tagline: 'Tagline',
    price: 1200,
    billing: 'yearly',
    note: '',
    ctaHref: '#',
    specs: [],
    more: [],
    ...overrides,
  };
}

describe('resolvePlanAmount', () => {
  it('shows the stored yearly price in the yearly period', () => {
    expect(resolvePlanAmount(plan({ price: 1499 }), 'yearly')).toBe(1499);
  });

  it('converts a yearly price to its monthly equivalent', () => {
    expect(resolvePlanAmount(plan({ price: 1499 }), 'monthly')).toBe(125);
  });

  it('never divides a plan that is already billed monthly', () => {
    expect(resolvePlanAmount(plan({ price: 1699, billing: 'monthly' }), 'monthly')).toBe(1699);
  });
});

describe('comparison helpers', () => {
  const plans = [
    plan({
      name: 'VPS Basic',
      specs: [
        { value: '1 Core', label: 'CPU Cores' },
        { value: '2 GB', label: 'RAM' },
      ],
    }),
    plan({
      name: 'VPS Pro',
      specs: [
        { value: '2 Cores', label: 'CPU Cores' },
        { value: '160 GB', label: 'SSD Storage' },
      ],
    }),
  ];

  it('collects every spec label once in first-seen order', () => {
    expect(comparisonLabels(plans)).toEqual(['CPU Cores', 'RAM', 'SSD Storage']);
  });

  it('returns a dash for a spec the plan does not list', () => {
    expect(comparisonValue(plans[0], 'SSD Storage')).toBe('—');
    expect(comparisonValue(plans[1], 'CPU Cores')).toBe('2 Cores');
  });
});
