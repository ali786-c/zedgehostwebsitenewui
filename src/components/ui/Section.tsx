import type { ReactNode } from 'react';
import { Container } from './Container';

type Tone = 'default' | 'mint' | 'deep';

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  tight?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function Section({
  children,
  id,
  tone = 'default',
  tight = false,
  eyebrow,
  title,
  subtitle,
  center = false,
  className = '',
}: SectionProps) {
  const classes = [
    'zh-section',
    tone === 'mint' ? 'zh-section--mint' : '',
    tone === 'deep' ? 'zh-section--deep' : '',
    tight ? 'zh-section--tight' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes}>
      <Container>
        {(eyebrow || title) && (
          <div className={`zh-section-head${center ? ' zh-section-head--center' : ''}`}>
            {eyebrow && <span className="zh-eyebrow">{eyebrow}</span>}
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
