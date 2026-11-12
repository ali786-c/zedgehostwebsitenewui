import { useState } from 'react';
import { useCurrency } from '../../app/currency';
import type { BillingPeriod, Plan } from '../../content/types';
import { formatPrice } from '../../lib/format';
import { resolvePlanAmount } from '../../lib/plans';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

function PlanCard({ plan, period }: { plan: Plan; period: BillingPeriod }) {
  const { currency } = useCurrency();
  const amount = resolvePlanAmount(plan, period);
  const suffix = period === 'monthly' ? 'month' : 'year';

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
        <span>/ {suffix}</span>
      </p>
      <p className="zh-plan__note">
        {plan.note.replace('{price}', formatPrice(amount, currency))}
      </p>

      <div className="zh-plan__cta">
        <Button href={plan.ctaHref} variant={plan.popular ? 'on-dark' : 'primary'} block>
          {plan.ctaLabel ?? 'Buy Now'}
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

      {plan.more.length > 0 && (
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
      )}
    </article>
  );
}

interface PlanGridProps {
  plans: Plan[];
  note?: string;
}

export function PlanGrid({ plans, note }: PlanGridProps) {
  const firstPlan = plans[0];
  // The monthly toggle only makes sense when every plan is priced per year.
  const showToggle = plans.length > 0 && plans.every((plan) => plan.billing === 'yearly');
  const [billing, setBilling] = useState<BillingPeriod>(firstPlan?.billing ?? 'yearly');

  if (plans.length === 0) return null;

  return (
    <div>
      <div className="zh-plans__toolbar">
        {showToggle ? (
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
        ) : (
          <p style={{ color: 'var(--zh-muted)', fontSize: '13px' }}>Monthly billing</p>
        )}
        {note && <p style={{ color: 'var(--zh-muted)', fontSize: '13px' }}>{note}</p>}
      </div>

      <div className="zh-plans__grid">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            period={plan.billing === 'yearly' && showToggle ? billing : plan.billing}
          />
        ))}
      </div>
    </div>
  );
}
