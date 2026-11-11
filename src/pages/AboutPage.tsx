import { Layout } from '../components/layout/Layout';
import { AboutContent } from '../components/sections/AboutContent';
import { CtaBand } from '../components/sections/CtaBand';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { aboutIntro } from '../content/about';
import { site } from '../content/site';

export function AboutPage() {
  return (
    <Layout currentPath="about-us.html">
      <div className="zh-page-hero">
        <Container>
          <h1>About Us</h1>
          <p>{aboutIntro}</p>
        </Container>
      </div>

      <Section>
        <AboutContent />
      </Section>

      <CtaBand
        data={{
          title: 'Ready to build your online presence?',
          text: 'Talk to our team about hosting, domains and everything you need to launch with confidence.',
          primary: { label: 'Get Started', href: 'index.html#plans' },
          secondary: { label: 'Contact us', href: site.contact },
        }}
      />
    </Layout>
  );
}
