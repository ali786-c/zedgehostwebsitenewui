import type { ProseSectionData } from '../../content/types';
import { Section } from '../ui/Section';

/** Intro copy block (used by email, backup and SSL pages). */
export function ProseSection({ data }: { data: ProseSectionData }) {
  return (
    <Section tone={data.tone ?? 'default'} eyebrow={data.eyebrow} title={data.title}>
      <div className="zh-prose">
        {data.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
