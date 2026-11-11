import { useId, useState } from 'react';
import type { FaqItem } from '../../content/types';
import { Icon } from './Icon';

export function Accordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="zh-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div
            key={item.q}
            className={`zh-accordion__item${isOpen ? ' zh-accordion__item--open' : ''}`}
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                className="zh-accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.q}</span>
                <Icon name="chevron-down" size={18} />
              </button>
            </h3>
            <div
              id={panelId}
              className="zh-accordion__panel"
              role="region"
              aria-labelledby={triggerId}
              hidden={!isOpen}
            >
              {item.a}
            </div>
          </div>
        );
      })}
    </div>
  );
}
