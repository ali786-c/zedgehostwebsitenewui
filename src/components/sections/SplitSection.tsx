import type { SplitSectionData } from '../../content/types';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';

/** Text + media split used by every product page. */
export function SplitSection({ data }: { data: SplitSectionData }) {
  return (
    <Section tone={data.tone ?? 'default'}>
      <div className={`zh-split${data.reverse ? ' zh-split--reverse' : ''}`}>
        <div>
          {data.eyebrow && <span className="zh-eyebrow">{data.eyebrow}</span>}
          <h2>{data.title}</h2>
          <p className="zh-split__text">{data.text}</p>
          <ul className="zh-checklist">
            {data.points.map((point) => (
              <li key={point}>
                <Icon name={data.icon ?? 'check-circle'} size={19} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="zh-split__media">
          <img
            src={data.image.src}
            alt={data.image.alt}
            loading="lazy"
            width="640"
            height="440"
          />
        </div>
      </div>
    </Section>
  );
}
