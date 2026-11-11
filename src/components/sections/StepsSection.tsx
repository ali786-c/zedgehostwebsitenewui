import type { StepsSectionData } from '../../content/types';
import { Section } from '../ui/Section';

/** Numbered guidance cards (e.g. "need help choosing?"). */
export function StepsSection({ data }: { data: StepsSectionData }) {
  return (
    <Section tone="mint" eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle}>
      <ol className="zh-steps">
        {data.items.map((item, index) => (
          <li className="zh-step" key={item.title}>
            <span className="zh-step__number" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
