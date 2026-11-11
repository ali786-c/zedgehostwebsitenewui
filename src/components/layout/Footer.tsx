import { footerColumns, legalLinks, payments, site } from '../../content/site';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

export function Footer() {
  return (
    <footer className="zh-footer">
      <Container>
        <div style={{ paddingTop: 'clamp(48px, 6vw, 72px)' }}>
          <div className="zh-footer__cta">
            <div>
              <h2>Enjoy exclusive savings of up to 45% and a complimentary domain.</h2>
              <p>Get started with fast, secure and locally supported hosting today.</p>
            </div>
            <Button href="index.html#plans" variant="on-dark" size="lg">
              Get Started
            </Button>
          </div>
        </div>

        <div className="zh-footer__main">
          <div className="zh-footer__brand">
            <img src="/assets/img/logo.svg" alt="ZedgeHost" width="160" height="34" />
            <p>
              Zedgehost provides reliable, ultra-fast and secure web hosting, VPS and domain
              registration services to empower your online journey.
            </p>
            <div className="zh-footer__contact">
              <a href={site.phoneHref}>
                <Icon name="phone" size={16} />
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.supportEmail}`}>
                <Icon name="mail" size={16} />
                {site.supportEmail}
              </a>
              <span>
                <Icon name="map-pin" size={16} />
                {site.address}
              </span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3>{column.title}</h3>
              <ul className="zh-footer__links">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="zh-footer__payments" aria-label="Accepted payment methods">
          {payments.map((payment) => (
            <span key={payment}>{payment}</span>
          ))}
        </div>

        <div className="zh-footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="zh-footer__legal">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a href="https://stats.uptimerobot.com/XKR1gTaget">Service Status</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
