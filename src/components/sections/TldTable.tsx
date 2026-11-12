import type { TldTableSectionData } from '../../content/types';
import { Section } from '../ui/Section';

/** TLD pricing table; stacks into readable cards on small screens. */
export function TldTable({ data }: { data: TldTableSectionData }) {
  return (
    <Section eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle}>
      <div className="zh-tlds__scroll" data-reveal>
        <table className="zh-tlds">
          <thead>
            <tr>
              <th scope="col">Domain</th>
              {data.columns.map((column) => (
                <th scope="col" key={column}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row) => (
              <tr key={row.tld}>
                <th scope="row">{row.tld}</th>
                {row.values.map((value, index) => (
                  <td key={`${row.tld}-${data.columns[index]}`} data-label={data.columns[index]}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
