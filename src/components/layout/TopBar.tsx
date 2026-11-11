import { useCurrency } from '../../app/currency';
import { site } from '../../content/site';
import { Container } from '../ui/Container';

const currencies = ['PKR', 'USD'] as const;

export function TopBar() {
  const { currency, setCurrency } = useCurrency();

  return (
    <div className="zh-topbar">
      <Container>
        <div className="zh-topbar__inner">
          <p className="zh-topbar__offer">
            <span>
              Offer <strong>Hosting Cloud</strong> — ultra-fast performance!
            </span>
            <a href="cloud-hosting.html">Claim Discount</a>
          </p>
          <div className="zh-topbar__links">
            <div className="zh-currency" role="group" aria-label="Select currency">
              {currencies.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={currency === option}
                  onClick={() => setCurrency(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <a href={site.clientArea}>Client Area</a>
          </div>
        </div>
      </Container>
    </div>
  );
}
