import type { BillingPeriod, Plan } from '../content/types';
import { monthlyEquivalent } from './format';

/**
 * Amount to display for a plan in the selected billing period.
 * Only yearly plans are converted to their monthly equivalent; monthly plans
 * already store a per-month price.
 */
export function resolvePlanAmount(plan: Plan, period: BillingPeriod): number {
  if (period === 'monthly' && plan.billing === 'yearly') {
    return monthlyEquivalent(plan.price);
  }
  return plan.price;
}

/** Union of spec labels across plans, in first-seen order, for comparison tables. */
export function comparisonLabels(plans: Plan[]): string[] {
  const labels: string[] = [];
  for (const plan of plans) {
    for (const spec of plan.specs) {
      if (!labels.includes(spec.label)) labels.push(spec.label);
    }
  }
  return labels;
}

/** A plan's value for a given comparison row, or a dash when it does not list it. */
export function comparisonValue(plan: Plan, label: string): string {
  return plan.specs.find((spec) => spec.label === label)?.value ?? '—';
}
