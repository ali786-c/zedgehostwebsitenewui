import type { Feature } from '../../content/types';
import { Icon } from '../ui/Icon';

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="zh-feature-grid">
      {features.map((feature) => (
        <article className="zh-feature" key={feature.title}>
          <span className="zh-icon-tile">
            <Icon name={feature.icon} size={23} />
          </span>
          <h3>{feature.title}</h3>
          {feature.text && <p>{feature.text}</p>}
        </article>
      ))}
    </div>
  );
}
