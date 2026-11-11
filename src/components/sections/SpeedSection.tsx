import type { Cta } from '../../content/types';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface SpeedSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  points: { title: string; text: string }[];
  cta: Cta;
  image: { src: string; alt: string };
}

export function SpeedSection({ eyebrow, title, subtitle, points, cta, image }: SpeedSectionProps) {
  return (
    <div className="zh-split">
      <div className="zh-split__media">
        <img src={image.src} alt={image.alt} loading="lazy" width="640" height="440" />
      </div>
      <div>
        <span className="zh-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p style={{ marginTop: 'var(--zh-space-4)', color: 'var(--zh-muted)' }}>{subtitle}</p>
        <ul className="zh-checklist">
          {points.map((point) => (
            <li key={point.title}>
              <Icon name="check-circle" size={19} />
              <span>
                <strong>{point.title}</strong>
                {point.text}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'var(--zh-space-6)' }}>
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      </div>
    </div>
  );
}
