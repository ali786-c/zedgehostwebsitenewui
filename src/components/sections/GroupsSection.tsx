import type { GroupsSectionData } from '../../content/types';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';

/** Grouped bullet lists (server specs, programming support, panel features). */
export function GroupsSection({ data }: { data: GroupsSectionData }) {
  return (
    <Section tone="mint" eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle}>
      <div className="zh-groups">
        {data.groups.map((group) => (
          <article className="zh-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="zh-checklist">
              {group.items.map((item) => (
                <li key={item}>
                  <Icon name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
