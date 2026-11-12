import type { Feature } from '../../content/types';
import { Container } from '../ui/Container';
import { FeatureGrid } from './FeatureGrid';

interface StatsBandProps {
  title: string;
  subtitle: string;
  features: Feature[];
  stats: { value: string; suffix: string; label: string }[];
}

export function StatsBand({ title, subtitle, features, stats }: StatsBandProps) {
  return (
    <section className="zh-section zh-section--deep">
      <Container>
        <div className="zh-section-head zh-section-head--center" data-reveal>
          <span className="zh-eyebrow" style={{ color: '#9be7a4' }}>
            Why ZedgeHost
          </span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
        <FeatureGrid features={features} />
        <div className="zh-stats" data-reveal-group>
          {stats.map((stat) => (
            <div className="zh-stat" key={stat.label}>
              <strong>
                {stat.value}
                {stat.suffix && <em>{stat.suffix}</em>}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
