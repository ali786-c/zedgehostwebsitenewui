import { aboutContact, aboutSections } from '../../content/about';
import { Icon } from '../ui/Icon';

export function AboutContent() {
  const contentSections = aboutSections.filter((section) => section.title !== 'Contact Us');
  const contactSection = aboutSections.find((section) => section.title === 'Contact Us');

  return (
    <div className="zh-about-grid" data-reveal-group>
      {contentSections.map((section) => (
        <article className="zh-about-card" key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      ))}

      {contactSection && (
        <article className="zh-about-card" style={{ gridColumn: '1 / -1' }}>
          <h2>{contactSection.title}</h2>
          {contactSection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="zh-about-contact">
            <a href={`mailto:${aboutContact.email}`}>
              <Icon name="mail" size={17} />
              {aboutContact.email}
            </a>
            <a href={aboutContact.phoneHref}>
              <Icon name="phone" size={17} />
              {aboutContact.phone}
            </a>
            <span>
              <Icon name="map-pin" size={17} />
              {aboutContact.address}
            </span>
          </div>
        </article>
      )}
    </div>
  );
}
