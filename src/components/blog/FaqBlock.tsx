import type { FaqItem } from '../../content/types';
import { Accordion } from '../ui/Accordion';

/** In-article FAQ; questions stay in the page copy, answers collapse. */
export function FaqBlock({ items }: { items: FaqItem[] }) {
  return (
    <section className="zh-article-faq" aria-labelledby="article-faq-heading">
      <h2 id="article-faq-heading">Frequently asked questions</h2>
      <Accordion items={items} />
    </section>
  );
}
