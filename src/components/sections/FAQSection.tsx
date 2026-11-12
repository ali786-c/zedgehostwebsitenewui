import type { Cta, FaqItem } from '../../content/types';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

interface FAQSectionProps {
  items: FaqItem[];
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: Cta;
  tone?: 'mint' | 'default';
  id?: string;
}

export function FAQSection({
  items,
  eyebrow = 'FAQs',
  title,
  subtitle,
  cta,
  tone = 'mint',
  id = 'faq',
}: FAQSectionProps) {
  return (
    <section className={`zh-section${tone === 'mint' ? ' zh-section--mint' : ''}`} id={id}>
      <Container>
        <div className="zh-faq">
          <div className="zh-faq__intro" data-reveal>
            <span className="zh-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
            {cta && <Button href={cta.href}>{cta.label}</Button>}
          </div>
          <div className="zh-faq__list" data-reveal>
            <Accordion items={items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
