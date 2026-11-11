import type { ArticleBlock } from '../../content/types';
import { InlineText } from './InlineText';

const HEADING_TAGS = { 2: 'h2', 3: 'h3', 4: 'h4' } as const;

/** Renders the typed article body: headings, copy with inline links, lists and tables. */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="zh-article">
      {blocks.map((block, index) => {
        const key = `${block.kind}-${index}`;
        switch (block.kind) {
          case 'heading': {
            const Heading = HEADING_TAGS[block.level];
            return <Heading key={key}>{block.text}</Heading>;
          }
          case 'paragraph':
            return (
              <p key={key}>
                <InlineText runs={block.content} />
              </p>
            );
          case 'list': {
            const items = block.items.map((item, itemIndex) => (
              <li key={`${key}-${itemIndex}`}>
                <InlineText runs={item} />
              </li>
            ));
            return block.ordered ? <ol key={key}>{items}</ol> : <ul key={key}>{items}</ul>;
          }
          case 'table':
            return (
              <div className="zh-article__table" key={key}>
                <table>
                  <thead>
                    <tr>
                      {block.head.map((cell, cellIndex) => (
                        <th scope="col" key={`${key}-h-${cellIndex}`}>
                          <InlineText runs={cell} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${key}-r-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${key}-r-${rowIndex}-${cellIndex}`}>
                            <InlineText runs={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
