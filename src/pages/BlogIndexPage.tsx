import { blogIndex } from '../content/blog';
import { BlogCard } from '../components/blog/BlogCard';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/ui/Container';

/** Blog listing: the hero copy plus every post card, newest first. */
export function BlogIndexPage() {
  return (
    <Layout currentPath="blog.html">
      <section className="zh-blog-hero">
        <Container>
          <div className="zh-blog-hero__grid">
            <div>
              <span className="zh-eyebrow">Blog</span>
              <h1>{blogIndex.title}</h1>
              <p className="zh-blog-hero__intro">{blogIndex.intro}</p>
              <ul className="zh-blog-hero__categories">
                {blogIndex.categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>
            <img
              src={blogIndex.hero.src}
              alt={blogIndex.hero.alt}
              width={640}
              height={427}
              fetchPriority="high"
            />
          </div>
        </Container>
      </section>

      <section className="zh-section">
        <Container>
          <div className="zh-post-grid">
            {blogIndex.cards.map((card) => (
              <BlogCard card={card} key={card.href} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
