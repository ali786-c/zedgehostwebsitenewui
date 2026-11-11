export type Currency = 'PKR' | 'USD';

export const USD_RATE = 280;

export function formatPrice(amountPkr: number, currency: Currency = 'PKR'): string {
  if (currency === 'USD') {
    const usd = amountPkr / USD_RATE;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: usd < 100 ? 2 : 0,
    }).format(usd);
  }

  return `Rs ${new Intl.NumberFormat('en-PK', { maximumFractionDigits: 0 }).format(amountPkr)}`;
}

export function monthlyEquivalent(annualPkr: number): number {
  return Math.round(annualPkr / 12);
}
