import { Layout } from '../components/layout/Layout';
import { CtaBand } from '../components/sections/CtaBand';
import { FAQSection } from '../components/sections/FAQSection';
import { FeatureGrid } from '../components/sections/FeatureGrid';
import { Hero } from '../components/sections/Hero';
import { PlanGrid } from '../components/sections/PlanGrid';
import { Section } from '../components/ui/Section';
import { Icon } from '../components/ui/Icon';
import {
  cloudBasics,
  cloudFaqs,
  cloudFeatures,
  cloudHero,
  cloudInfrastructure,
  cloudPlans,
  cloudSecurity,
  cloudSupport,
} from '../content/cloud';

export function CloudHostingPage() {
  return (
    <Layout currentPath="cloud-hosting.html">
      <Hero data={cloudHero} />

      <Section
        id="plans"
        center
        eyebrow={cloudPlans.eyebrow}
        title={cloudPlans.title}
        subtitle={cloudPlans.subtitle}
      >
        <PlanGrid plans={cloudPlans.plans} />
      </Section>

      <Section tone="mint">
        <div className="zh-split">
          <div>
            <span className="zh-eyebrow">{cloudInfrastructure.eyebrow}</span>
            <h2>{cloudInfrastructure.title}</h2>
            <p style={{ marginTop: 'var(--zh-space-4)', color: 'var(--zh-muted)' }}>
              {cloudInfrastructure.subtitle}
            </p>
            <ul className="zh-checklist">
              {cloudInfrastructure.points.map((point) => (
                <li key={point}>
                  <Icon name="check-circle" size={19} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="zh-split__media">
            <img
              src="/assets/img/cloud-infrastructure.webp"
              alt="Scalable cloud infrastructure by ZedgeHost"
              loading="lazy"
              width="640"
              height="440"
            />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Cloud Hosting"
        title="What Does Cloud Hosting mean for your Website?"
        subtitle="Next-level Performance and Reliability with Simplified Management."
      >
        <FeatureGrid features={cloudFeatures} />
      </Section>

      <Section tone="mint">
        <div className="zh-split">
          <div className="zh-split__media">
            <img
              src="/assets/img/security.webp"
              alt="Advanced security for cloud hosting"
              loading="lazy"
              width="640"
              height="440"
            />
          </div>
          <div>
            <span className="zh-eyebrow">{cloudSecurity.eyebrow}</span>
            <h2>{cloudSecurity.title}</h2>
            <p style={{ marginTop: 'var(--zh-space-4)', color: 'var(--zh-muted)' }}>
              {cloudSecurity.subtitle}
            </p>
            <ul className="zh-checklist">
              {cloudSecurity.points.map((point) => (
                <li key={point}>
                  <Icon name="shield" size={19} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Getting Started"
        title="Just what you need for a Basic Web Presence"
        subtitle="Build your first website with ease using essential hosting features."
      >
        <FeatureGrid features={cloudBasics} />
      </Section>

      <CtaBand
        data={{
          title: cloudSupport.title,
          text: cloudSupport.text,
          primary: cloudSupport.cta,
          secondary: { label: 'View Cloud Plans', href: '#plans' },
        }}
      />

      <FAQSection
        items={cloudFaqs}
        title="Frequently Asked Questions"
        subtitle="Explore our FAQ to find quick answers to the most common questions about our products and services."
        cta={{ label: 'Contact our support team', href: cloudSupport.cta.href }}
      />
    </Layout>
  );
}
