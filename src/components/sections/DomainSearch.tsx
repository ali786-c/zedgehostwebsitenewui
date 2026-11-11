import { site } from '../../content/site';
import { Icon } from '../ui/Icon';

export function DomainSearch() {
  return (
    <form
      className="zh-domain-search"
      action={site.domainSearchAction}
      method="get"
      aria-label="Search for a domain name"
    >
      <input type="hidden" name="a" value="add" />
      <input type="hidden" name="domain" value="register" />
      <label className="sr-only" htmlFor="domain-name">
        Domain name
      </label>
      <input
        id="domain-name"
        type="text"
        name="query"
        placeholder="Enter a complete domain, e.g. example.com"
        autoComplete="off"
        required
      />
      <button type="submit" className="zh-btn zh-btn--primary">
        Search Domain
        <Icon name="arrow-right" size={17} />
      </button>
    </form>
  );
}
