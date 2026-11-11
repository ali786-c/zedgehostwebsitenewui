import { describe, expect, it } from 'vitest';
import { formatPrice, monthlyEquivalent, USD_RATE } from './format';

describe('formatPrice', () => {
  it('formats PKR with grouping and no decimals', () => {
    expect(formatPrice(1499)).toBe('Rs 1,499');
    expect(formatPrice(9999, 'PKR')).toBe('Rs 9,999');
  });

  it('converts PKR to USD using the fixed rate', () => {
    expect(formatPrice(USD_RATE, 'USD')).toBe('$1.00');
    expect(formatPrice(1499, 'USD')).toBe('$5.35');
  });
});

describe('monthlyEquivalent', () => {
  it('divides the annual price into rounded monthly amounts', () => {
    expect(monthlyEquivalent(1499)).toBe(125);
    expect(monthlyEquivalent(9999)).toBe(833);
  });
});
