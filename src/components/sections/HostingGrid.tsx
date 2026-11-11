import type { HostingType } from '../../content/types';
import { Badge } from '../ui/Badge';
import { Icon } from '../ui/Icon';

export function HostingGrid({ items }: { items: HostingType[] }) {
  return (
    <div className="zh-hosting-grid">
      {items.map((item) => (
        <article className="zh-hosting-card" key={item.title}>
          <div className="zh-hosting-card__top">
            <span className="zh-icon-tile">
              <Icon name={item.icon} size={24} />
            </span>
            {item.popular && <Badge tone="green">Popular</Badge>}
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a className="zh-hosting-card__link" href={item.href}>
            See More
            <Icon name="arrow-right" size={16} />
          </a>
        </article>
      ))}
    </div>
  );
}
