import type { SpecsSectionData } from '../../content/types';
import { Section } from '../ui/Section';

/** Key/value specification list (used by single-plan VPS pages). */
export function SpecsSection({ data }: { data: SpecsSectionData }) {
  return (
    <Section eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle}>
      <dl className="zh-specs" data-reveal>
        {data.rows.map((row) => (
          <div className="zh-specs__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
