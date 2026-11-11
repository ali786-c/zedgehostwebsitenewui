import { Layout } from '../components/layout/Layout';
import { CtaBand } from '../components/sections/CtaBand';
import { FAQSection } from '../components/sections/FAQSection';
import { Hero } from '../components/sections/Hero';
import { HostingGrid } from '../components/sections/HostingGrid';
import { PlanGrid } from '../components/sections/PlanGrid';
import { SpeedSection } from '../components/sections/SpeedSection';
import { StatsBand } from '../components/sections/StatsBand';
import { SupportSection } from '../components/sections/SupportSection';
import { TrustStrip } from '../components/sections/TrustStrip';
import { Section } from '../components/ui/Section';
import {
  domainBand,
  homeFaqs,
  homeHero,
  homePlans,
  homeTrust,
  hostingTypes,
  speedSection,
  stats,
  supportSection,
  whyChoose,
} from '../content/home';
import { site } from '../content/site';

const finalBand = {
  title: 'Still have questions?',
  text: 'Our support team is here to help you choose the right hosting plan and get online faster.',
  primary: { label: 'Contact our support team', href: site.contact },
  secondary: { label: 'Chat on WhatsApp', href: site.whatsapp },
};

export function HomePage() {
  return (
    <Layout currentPath="index.html">
      <Hero data={homeHero} />
      <TrustStrip items={homeTrust} />

      <Section
        eyebrow="Hosting Services"
        title="Get fast and reliable hosting with a free SSL"
        subtitle="Choose the hosting setup that matches your project — from a first blog to a high-traffic online store."
      >
        <HostingGrid items={hostingTypes} />
      </Section>

      <Section
        id="plans"
        tone="mint"
        center
        eyebrow={homePlans.eyebrow}
        title={homePlans.title}
        subtitle={homePlans.subtitle}
      >
        <PlanGrid plans={homePlans.plans} />
      </Section>

      <CtaBand data={domainBand} />

      <Section>
        <SpeedSection
          eyebrow={speedSection.eyebrow}
          title={speedSection.title}
          subtitle={speedSection.subtitle}
          points={speedSection.points}
          cta={speedSection.cta}
          image={{ src: '/assets/img/cloud-infrastructure.webp', alt: 'Fast hosting infrastructure' }}
        />
      </Section>

      <StatsBand
        title="Why You Should Choose Us"
        subtitle="Experience unmatched performance, reliability, and support designed to elevate your online presence."
        features={whyChoose}
        stats={stats}
      />

      <Section>
        <SupportSection
          eyebrow={supportSection.eyebrow}
          title={supportSection.title}
          cards={supportSection.cards}
          cta={supportSection.cta}
        />
      </Section>

      <FAQSection
        items={homeFaqs}
        title="Frequently Asked Questions"
        subtitle="Find quick answers to the most common questions about our hosting plans, services, and features."
        cta={{ label: 'Contact our support team', href: site.contact }}
      />

      <CtaBand data={finalBand} />
    </Layout>
  );
}
