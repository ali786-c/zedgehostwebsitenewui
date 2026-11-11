import type { FaqItem } from '../../content/types';
import { Accordion } from '../ui/Accordion';

/** In-article FAQ; questions stay in the page copy, answers collapse. */
export function FaqBlock({
  items,
  title = 'Frequently asked questions',
}: {
  items: FaqItem[];
  title?: string;
}) {
  return (
    <section className="zh-article-faq" aria-labelledby="article-faq-heading">
      <h2 id="article-faq-heading">{title}</h2>
      <Accordion items={items} />
    </section>
  );
}
