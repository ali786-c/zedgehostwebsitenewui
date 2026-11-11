import type { BlogCardData } from '../../content/types';
import { Icon } from '../ui/Icon';

/** One post teaser: image, category, title, summary, date and read link. */
export function BlogCard({ card }: { card: BlogCardData }) {
  return (
    <article className="zh-post-card">
      <a className="zh-post-card__media" href={card.href} tabIndex={-1} aria-hidden="true">
        <img src="/assets/img/blog-hosting.webp" alt="" width={640} height={360} loading="lazy" />
      </a>
      <div className="zh-post-card__body">
        <span className="zh-post-card__category">{card.category}</span>
        <h3>
          <a href={card.href}>{card.title}</a>
        </h3>
        <p>{card.description}</p>
        <p className="zh-post-card__meta">{card.meta}</p>
        <a className="zh-post-card__cta" href={card.href}>
          {card.ctaLabel}
          <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </article>
  );
}
