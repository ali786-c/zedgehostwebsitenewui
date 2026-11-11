import { useEffect, useRef, useState } from 'react';
import { navigation } from '../../content/site';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { MobileNav } from './MobileNav';

export function Header({ currentPath = '' }: { currentPath?: string }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenMenu(null);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  return (
    <header className="zh-header" ref={headerRef}>
      <Container>
        <div className="zh-header__inner">
          <a className="zh-logo" href="index.html" aria-label="ZedgeHost home">
            <img src="/assets/img/logo.svg" alt="ZedgeHost" width="170" height="34" />
          </a>

          <nav className="zh-nav" aria-label="Main navigation">
            <ul className="zh-nav__list">
              {navigation.map((item) => {
                const hasMenu = Boolean(item.columns?.length);
                const isCurrent =
                  item.href === currentPath ||
                  item.columns?.some((column) =>
                    column.links.some((link) => link.href === currentPath),
                  );

                if (!hasMenu) {
                  return (
                    <li className="zh-nav__item" key={item.label}>
                      <a
                        className="zh-nav__link"
                        href={item.href}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                }

                const menuId = `mega-${item.label.toLowerCase()}`;
                const isOpen = openMenu === item.label;

                return (
                  <li
                    className={`zh-nav__item zh-nav__item--has-menu${
                      isOpen ? ' zh-nav__item--open' : ''
                    }`}
                    key={item.label}
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      className="zh-nav__toggle"
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      aria-current={isCurrent ? 'page' : undefined}
                      onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    >
                      {item.label}
                      <Icon name="chevron-down" size={15} />
                    </button>

                    {isOpen && (
                      <div className="zh-mega" id={menuId}>
                        <Container>
                          <div className="zh-mega__grid">
                            {item.columns?.map((column) => (
                              <div key={column.title}>
                                <p className="zh-mega__label">{column.title}</p>
                                {column.links.map((link) => (
                                  <a className="zh-mega__link" href={link.href} key={link.label}>
                                    {link.icon && (
                                      <span className="zh-mega__icon">
                                        <Icon name={link.icon} size={19} />
                                      </span>
                                    )}
                                    <span>
                                      <strong>{link.label}</strong>
                                      {link.description && <p>{link.description}</p>}
                                    </span>
                                  </a>
                                ))}
                              </div>
                            ))}
                            {item.promo && (
                              <div className="zh-mega__promo">
                                <div>
                                  <strong>{item.promo.title}</strong>
                                  <p>{item.promo.text}</p>
                                </div>
                                <Button href={item.promo.ctaHref} variant="primary" size="sm">
                                  {item.promo.ctaLabel}
                                </Button>
                              </div>
                            )}
                          </div>
                        </Container>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="zh-header__actions">
            <a className="zh-header__phone" href="tel:+923054380315">
              <Icon name="phone" size={17} />
              +92 305 4380315
            </a>
            <Button href="https://my.zedgehost.com/index.php?rp=/login" variant="ghost" size="sm">
              Client Area
            </Button>
            <Button href="index.html#plans" variant="primary" size="sm">
              Get Started
            </Button>
            <button
              type="button"
              className="zh-burger"
              aria-expanded={mobileOpen}
              aria-label="Open navigation"
              onClick={() => setMobileOpen(true)}
            >
              <Icon name="menu" size={22} />
            </button>
          </div>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
