import { useCurrency } from '../../app/currency';
import type { HeroData } from '../../content/types';
import { formatPrice, monthlyEquivalent } from '../../lib/format';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { DomainSearch } from './DomainSearch';

export function Hero({ data }: { data: HeroData }) {
  const { currency } = useCurrency();
  const isDark = data.variant === 'dark';
  // Plan cards quote per-month prices, so the hero quote matches them even when
  // the stored price is the yearly total.
  const suffix = data.priceSuffix ?? 'year';
  const yearly = suffix === 'year';
  const priceFrom = data.priceFrom !== undefined && yearly ? monthlyEquivalent(data.priceFrom) : data.priceFrom;
  const priceRegular =
    data.priceRegular !== undefined && yearly ? monthlyEquivalent(data.priceRegular) : data.priceRegular;
  const priceSuffix = yearly ? 'month' : suffix;

  return (
    <section className={`zh-hero${isDark ? ' zh-hero--dark' : ''}`}>
      <Container>
        <div className="zh-hero__grid">
          <div>
            {data.eyebrow && <span className="zh-eyebrow">{data.eyebrow}</span>}
            <h1>{data.title}</h1>
            {data.subtitle && <p className="zh-hero__sub">{data.subtitle}</p>}

            {priceFrom !== undefined && (
              <p className="zh-hero__price">
                <span>Starting at</span>
                <strong>{formatPrice(priceFrom, currency)}</strong>
                {priceRegular !== undefined && <s>{formatPrice(priceRegular, currency)}</s>}
                <span>/{priceSuffix}</span>
              </p>
            )}

            <div className="zh-hero__actions">
              {data.primaryCta && (
                <Button href={data.primaryCta.href} variant="primary" size="lg">
                  {data.primaryCta.label}
                  <Icon name="arrow-right" size={18} />
                </Button>
              )}
              {data.secondaryCta && (
                <Button
                  href={data.secondaryCta.href}
                  variant={isDark ? 'on-dark' : 'ghost'}
                  size="lg"
                >
                  {data.secondaryCta.label}
                </Button>
              )}
            </div>

            {data.showDomainSearch && (
              <div className="zh-hero__search">
                <p className="zh-hero__search-label">
                  {data.searchLabel ?? 'Search & register your domain name'}
                </p>
                <DomainSearch />
              </div>
            )}

            {data.chips && (
              <ul className="zh-hero__chips">
                {data.chips.map((chip) => (
                  <li key={chip.label}>
                    <span>
                      <Icon name={chip.icon} size={15} />
                      {chip.label}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {data.ticks && (
              <ul className="zh-hero__ticks">
                {data.ticks.map((tick) => (
                  <li key={tick}>
                    <Icon name="check-circle" size={17} />
                    {tick}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="zh-hero__media">
            <div className="zh-hero__media-frame">
              <img src={data.image.src} alt={data.image.alt} fetchPriority="high" />
            </div>
            <div className="zh-hero__float zh-hero__float--top">
              <Icon name="shield" size={22} />
              <div>
                <strong>99.9% Uptime</strong>
                <span>Reliable infrastructure</span>
              </div>
            </div>
            <div className="zh-hero__float zh-hero__float--bottom">
              <Icon name="headset" size={22} />
              <div>
                <strong>24/7 Support</strong>
                <span>Local experts in Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
