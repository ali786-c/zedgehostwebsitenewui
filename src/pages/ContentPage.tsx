import type { ContentPageData } from '../content/types';
import { ArticleBody } from '../components/article/ArticleBody';
import { FaqBlock } from '../components/article/FaqBlock';
import { InlineText } from '../components/article/InlineText';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

/** Marketing guide, legal or policy page: one column of readable copy. */
export function ContentPage({ data }: { data: ContentPageData }) {
  return (
    <Layout currentPath={data.output}>
      <article className="zh-article-page">
        <Container className="zh-article-page__container">
          <h1>{data.title}</h1>
          {data.lead && (
            <p className="zh-article-page__lead">
              <InlineText runs={data.lead} />
            </p>
          )}

          <ArticleBody blocks={data.blocks} />

          {data.cta && (
            <div className="zh-article-cta" data-reveal>
              <p>
                <InlineText runs={data.cta.content} />
              </p>
              <div className="zh-article-cta__actions">
                <Button href={data.cta.cta.href}>{data.cta.cta.label}</Button>
                {data.cta.secondary && (
                  <Button href={data.cta.secondary.href} variant="secondary">
                    {data.cta.secondary.label}
                  </Button>
                )}
              </div>
            </div>
          )}

          {data.faq && data.faq.items.length > 0 && (
            <FaqBlock items={data.faq.items} title={data.faq.title} />
          )}
        </Container>
      </article>
    </Layout>
  );
}
