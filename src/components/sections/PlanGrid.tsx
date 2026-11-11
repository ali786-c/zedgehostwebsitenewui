import { useState } from 'react';
import { useCurrency } from '../../app/currency';
import type { Plan } from '../../content/types';
import { formatPrice, monthlyEquivalent } from '../../lib/format';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

type Billing = 'yearly' | 'monthly';

function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const { currency } = useCurrency();
  const amount = billing === 'yearly' ? plan.annualPrice : monthlyEquivalent(plan.annualPrice);

  return (
    <article className={`zh-plan${plan.popular ? ' zh-plan--popular' : ''}`}>
      <div className="zh-plan__head">
        <div>
          <h3>{plan.name}</h3>
          <p>{plan.tagline}</p>
        </div>
        {plan.badge && <Badge tone={plan.popular ? 'light' : 'green'}>{plan.badge}</Badge>}
      </div>

      <p className="zh-plan__price">
        {formatPrice(amount, currency)}
        <span>/ {billing === 'yearly' ? 'year' : 'month'}</span>
      </p>
      <p className="zh-plan__note">{plan.note}</p>

      <div className="zh-plan__cta">
        <Button
          href={plan.ctaHref}
          variant={plan.popular ? 'on-dark' : 'primary'}
          block
        >
          Buy Now
        </Button>
      </div>

      <ul className="zh-plan__specs">
        {plan.specs.map((spec) => (
          <li key={`${spec.value}-${spec.label}`}>
            <Icon name="check" size={15} />
            <span>
              <strong>{spec.value}</strong> {spec.label}
            </span>
          </li>
        ))}
      </ul>

      <details className="zh-plan__more">
        <summary>
          More Features
          <Icon name="chevron-down" size={15} />
        </summary>
        <ul>
          {plan.more.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}

export function PlanGrid({ plans }: { plans: Plan[] }) {
  const [billing, setBilling] = useState<Billing>('yearly');

  return (
    <div>
      <div className="zh-plans__toolbar">
        <div className="zh-billing" role="group" aria-label="Billing period">
          <button
            type="button"
            aria-pressed={billing === 'yearly'}
            onClick={() => setBilling('yearly')}
          >
            Yearly
          </button>
          <button
            type="button"
            aria-pressed={billing === 'monthly'}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
        </div>
        <p style={{ color: 'var(--zh-muted)', fontSize: '13px' }}>
          All plans include free SSL, cPanel and 24/7 support.
        </p>
      </div>

      <div className="zh-plans__grid">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} billing={billing} />
        ))}
      </div>
    </div>
  );
}
