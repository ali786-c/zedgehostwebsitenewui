import type { CtaBandData } from '../../content/types';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function CtaBand({ data }: { data: CtaBandData }) {
  return (
    <Container>
      <div className="zh-cta-band" data-reveal>
        <div>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <div className="zh-cta-band__actions">
          <Button href={data.primary.href} variant="on-dark" size="lg">
            {data.primary.label}
          </Button>
          {data.secondary && (
            <Button href={data.secondary.href} variant="ghost" size="lg">
              {data.secondary.label}
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
}
