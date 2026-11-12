import type { Cta } from '../../content/types';
import type { IconName } from '../ui/Icon';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface SupportSectionProps {
  eyebrow: string;
  title: string;
  cards: { icon: IconName; title: string; text: string }[];
  cta: Cta;
}

export function SupportSection({ eyebrow, title, cards, cta }: SupportSectionProps) {
  return (
    <div className="zh-support">
      <div>
        <span className="zh-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p style={{ marginTop: 'var(--zh-space-4)', color: 'var(--zh-muted)' }}>
          Real people, real answers — whenever you need help with your website.
        </p>
        <div style={{ marginTop: 'var(--zh-space-5)' }}>
          <Button href={cta.href} variant="secondary">
            {cta.label}
          </Button>
        </div>
      </div>
      <div className="zh-support__cards" data-reveal-group>
        {cards.map((card) => (
          <article className="zh-support__card" key={card.title}>
            <span className="zh-icon-tile">
              <Icon name={card.icon} size={23} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
