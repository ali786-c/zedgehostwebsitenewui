import { useCurrency } from '../../app/currency';
import type { ComparisonSectionData, Plan } from '../../content/types';
import { formatPrice } from '../../lib/format';
import { comparisonLabels, comparisonValue } from '../../lib/plans';
import { Section } from '../ui/Section';

/** Builds the comparison table straight from plan data, so specs never drift. */
export function ComparisonTable({ data, plans }: { data: ComparisonSectionData; plans: Plan[] }) {
  const { currency } = useCurrency();

  const rows = comparisonLabels(plans);

  return (
    <Section eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle}>
      <div className="zh-compare__scroll">
        <table className="zh-compare">
          <thead>
            <tr>
              <th scope="col">Plan</th>
              {plans.map((plan) => (
                <th scope="col" key={plan.name}>
                  {plan.name}
                  {plan.popular && <span className="zh-compare__tag">Popular</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price</th>
              {plans.map((plan) => (
                <td key={plan.name}>
                  <strong>{formatPrice(plan.price, currency)}</strong>/{plan.billing === 'yearly' ? 'yr' : 'mo'}
                </td>
              ))}
            </tr>
            {rows.map((label) => (
              <tr key={label}>
                <th scope="row">{label}</th>
                {plans.map((plan) => (
                  <td key={plan.name}>{comparisonValue(plan, label)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
