import type { TrustItem } from '../../content/types';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

export function TrustStrip({ items }: { items: TrustItem[] }) {
  return (
    <div className="zh-trust">
      <Container>
        <div className="zh-trust__grid">
          {items.map((item) => (
            <div className="zh-trust__item" key={item.title}>
              <Icon name={item.icon} size={22} />
              <p>
                {item.title}
                <span>{item.text}</span>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
