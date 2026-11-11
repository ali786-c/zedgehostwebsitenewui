import type { ArticleInline } from '../../content/types';

/** Renders inline article runs (text, links, emphasis, inline code) without HTML strings. */
export function InlineText({ runs }: { runs: ArticleInline[] }) {
  return (
    <>
      {runs.map((run, index) => {
        const key = `${index}-${run.text.slice(0, 12)}`;
        if (run.href) {
          return (
            <a key={key} href={run.href}>
              {run.text}
            </a>
          );
        }
        if (run.code) return <code key={key}>{run.text}</code>;
        if (run.strong) return <strong key={key}>{run.text}</strong>;
        return <span key={key}>{run.text}</span>;
      })}
    </>
  );
}
