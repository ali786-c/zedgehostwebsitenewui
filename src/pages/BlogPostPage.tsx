import { blogPosts, breadcrumbTrail, relatedPosts } from '../content/blog';
import type { BlogPostData } from '../content/types';
import { ArticleBody } from '../components/article/ArticleBody';
import { FaqBlock } from '../components/article/FaqBlock';
import { InlineText } from '../components/article/InlineText';
import { BlogCard } from '../components/blog/BlogCard';
import { Layout } from '../components/layout/Layout';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

/** One template for every post; posts differ only by the data in `content/blog`. */
export function BlogPostPage({ post }: { post: BlogPostData }) {
  const trail = breadcrumbTrail(post);
  const related = relatedPosts(post, 3);

  return (
    <Layout currentPath={`${post.slug}.html`}>
      <article className="zh-article-page">
        <Container className="zh-article-page__container">
          <nav className="zh-breadcrumb" aria-label="Breadcrumb">
            {trail.map((crumb, index) => (
              <span key={crumb.label}>
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span>{crumb.label}</span>}
              </span>
            ))}
          </nav>

          <span className="zh-eyebrow">{post.category}</span>
          <h1>{post.h1}</h1>
          <p className="zh-article-page__meta">
            By {post.author} · {post.date} · {post.readTime}
          </p>

          <img
            className="zh-article-page__hero"
            src={post.hero.src}
            alt={post.hero.alt}
            width={640}
            height={427}
            fetchPriority="high"
          />

          <div className="zh-article-answer">
            <p>
              <InlineText runs={post.answer} />
            </p>
          </div>

          <ArticleBody blocks={post.blocks} />

          <div className="zh-article-cta">
            <p>
              <InlineText runs={post.cta.content} />
            </p>
            <Button href={post.cta.cta.href}>{post.cta.cta.label}</Button>
          </div>

          {post.faq.length > 0 && <FaqBlock items={post.faq} />}

          <a className="zh-article-page__back" href="blog.html">
            ← Back to the blog
          </a>
        </Container>
      </article>

      <section className="zh-section zh-section--mint">
        <Container>
          <div className="zh-section-head">
            <span className="zh-eyebrow">Keep reading</span>
            <h2>More guides from the ZedgeHost blog</h2>
          </div>
          <div className="zh-post-grid" data-reveal-group>
            {related.map((entry) => (
              <BlogCard
                key={entry.slug}
                card={{
                  href: `${entry.slug}.html`,
                  category: entry.category,
                  title: entry.h1,
                  description: entry.seo.description,
                  meta: `${entry.date} · ${entry.readTime.replace(/ read$/, '')}`,
                  ctaLabel: 'Read the guide',
                }}
              />
            ))}
          </div>
          <p className="zh-blog-all">
            <a href="blog.html">See all {blogPosts.length} guides</a>
          </p>
        </Container>
      </section>
    </Layout>
  );
}
