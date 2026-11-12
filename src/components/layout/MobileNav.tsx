import { useEffect, useId, useRef, useState } from 'react';
import { navigation, site, type NavItem } from '../../content/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [groupOpen, setGroupOpen] = useState<Record<string, boolean>>({});
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggleGroup = (label: string) => {
    setGroupOpen((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className="zh-mobile" id="mobile-nav">
      <button
        type="button"
        className="zh-mobile__backdrop"
        aria-label="Close navigation"
        onClick={onClose}
      />
      <div
        className="zh-mobile__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        ref={panelRef}
      >
        <div className="zh-mobile__head">
          <a href="index.html" aria-label="ZedgeHost home" onClick={onClose}>
            <img src="/assets/img/logo.png" alt="Zedgehost Logo" width="133" height="45" />
          </a>
          <button
            type="button"
            className="zh-mobile__close"
            onClick={onClose}
            aria-label="Close navigation"
            ref={closeRef}
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className="zh-mobile__nav" aria-label="Mobile navigation">
          {navigation.map((item) =>
            item.columns?.length ? (
              <MobileGroup
                key={item.label}
                item={item}
                open={Boolean(groupOpen[item.label])}
                onToggle={() => toggleGroup(item.label)}
                onNavigate={onClose}
              />
            ) : (
              <a className="zh-mobile__top-link" href={item.href} key={item.label} onClick={onClose}>
                {item.label}
              </a>
            ),
          )}
        </nav>

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

interface MobileGroupProps {
  item: NavItem;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

function MobileGroup({ item, open, onToggle, onNavigate }: MobileGroupProps) {
  const id = useId();

  return (
    <div className={`zh-mobile__group${open ? ' zh-mobile__group--open' : ''}`}>
      <button
        type="button"
        className="zh-mobile__toggle"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
      >
        {item.label}
        <Icon name="chevron-down" size={18} />
      </button>

      <div className="zh-mobile__drawer" id={id} data-open={open ? 'true' : 'false'}>
        <div className="zh-mobile__drawer-inner">
          {item.columns?.map((column) =>
            column.links.map((link) => (
              <a
                className="zh-mobile__link"
                key={`${column.title}-${link.label}`}
                href={link.href}
                onClick={onNavigate}
              >
                {link.label}
              </a>
            )),
          )}
          <a className="zh-mobile__link zh-mobile__link--all" href={item.href} onClick={onNavigate}>
            All {item.label.toLowerCase()}
            <Icon name="arrow-right" size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
