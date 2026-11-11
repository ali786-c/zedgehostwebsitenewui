import { useId, useState } from 'react';
import type { BulkFormSectionData } from '../../content/types';
import { site } from '../../content/site';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';

function domainsFromText(value: string): string[] {
  return value
    .split(/[\s,;]+/)
    .map((entry) => entry.trim().toLowerCase())
    .filter((entry) => entry.length > 0);
}

/** Bulk register / transfer tool: paste a list or upload a .txt file. */
export function BulkDomainForm({ data }: { data: BulkFormSectionData }) {
  const fieldId = useId();
  const [domains, setDomains] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');
  const list = domainsFromText(domains);

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    try {
      const text = await file.text();
      setDomains(text);
      const count = domainsFromText(text).length;
      setUploadMessage(`${file.name} loaded — ${count} domain${count === 1 ? '' : 's'} found.`);
    } catch {
      setUploadMessage(`Could not read ${file.name}. Paste the domains instead.`);
    }
  };

  return (
    <Section eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle}>
      <div className="zh-bulk">
        <form className="zh-bulk__form" action={site.domainSearchAction} method="get">
          <input type="hidden" name="a" value="add" />
          <input type="hidden" name="domain" value={data.mode === 'transfer' ? 'transfer' : 'register'} />

          <label htmlFor={`${fieldId}-list`}>Domain names (one per line)</label>
          <textarea
            id={`${fieldId}-list`}
            name="query"
            rows={7}
            required
            value={domains}
            onChange={(event) => setDomains(event.target.value)}
            placeholder={'yourbrand.com\nyourbrand.net\nyourbrand.pk'}
          />

          <div className="zh-bulk__file">
            <label htmlFor={`${fieldId}-file`}>
              <Icon name="backup" size={17} /> Upload a .txt list
            </label>
            <input
              id={`${fieldId}-file`}
              type="file"
              accept=".txt,.csv,text/plain"
              onChange={(event) => void onFile(event.target.files?.[0])}
            />
          </div>

          <div className="zh-bulk__actions">
            <button type="submit" className="zh-btn zh-btn--primary">
              {data.mode === 'transfer' ? 'Start Transfer' : 'Register Domains'}
              <Icon name="arrow-right" size={17} />
            </button>
            <p className="zh-bulk__count">{list.length} domain{list.length === 1 ? '' : 's'} ready</p>
          </div>

          {uploadMessage && <p className="zh-bulk__upload" role="status">{uploadMessage}</p>}
        </form>

        {data.notes && data.notes.length > 0 && (
          <div className="zh-bulk__notes">
            <h3>Note:</h3>
            <ul className="zh-checklist">
              {data.notes.map((note) => (
                <li key={note.slice(0, 40)}>
                  <Icon name="check" size={16} />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  );
}
