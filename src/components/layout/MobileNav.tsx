import { useEffect } from 'react';
import { navigation, site } from '../../content/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="zh-mobile" onClick={onClose}>
      <div
        className="zh-mobile__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="zh-mobile__head">
          <a href="index.html" aria-label="ZedgeHost home">
            <img src="/assets/img/logo.svg" alt="ZedgeHost" width="150" height="30" />
          </a>
          <button
            type="button"
            className="zh-mobile__close"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        {navigation.map((item) =>
          item.columns ? (
            <details className="zh-mobile__group" key={item.label}>
              <summary>
                {item.label}
                <Icon name="chevron-down" size={18} />
              </summary>
              <div className="zh-mobile__links">
                {item.columns.flatMap((column) =>
                  column.links.map((link) => (
                    <a key={`${column.title}-${link.label}`} href={link.href}>
                      {link.label}
                    </a>
                  )),
                )}
              </div>
            </details>
          ) : (
            <div className="zh-mobile__group" key={item.label}>
              <a className="zh-mobile__links" href={item.href}>
                <span style={{ padding: '14px 4px', fontWeight: 700, color: 'var(--zh-deep)' }}>
                  {item.label}
                </span>
              </a>
            </div>
          ),
        )}

        <div className="zh-mobile__cta">
          <Button href={site.clientArea} variant="ghost" block>
            Client Area
          </Button>
          <Button href={site.whatsapp} variant="primary" block>
            Chat on WhatsApp
          </Button>
          <a href={site.phoneHref} className="zh-btn zh-btn--ghost">
            <Icon name="phone" size={17} />
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
