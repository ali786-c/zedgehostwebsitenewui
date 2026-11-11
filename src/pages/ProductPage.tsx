import type { ProductPageData } from '../content/types';
import { Layout } from '../components/layout/Layout';
import { ComparisonTable } from '../components/sections/ComparisonTable';
import { CtaBand } from '../components/sections/CtaBand';
import { FAQSection } from '../components/sections/FAQSection';
import { FeatureGrid } from '../components/sections/FeatureGrid';
import { GroupsSection } from '../components/sections/GroupsSection';
import { Hero } from '../components/sections/Hero';
import { PlanGrid } from '../components/sections/PlanGrid';
import { ProseSection } from '../components/sections/ProseSection';
import { SpecsSection } from '../components/sections/SpecsSection';
import { SplitSection } from '../components/sections/SplitSection';
import { StepsSection } from '../components/sections/StepsSection';
import { Section } from '../components/ui/Section';

/**
 * The single template shared by every hosting product page.
 * Pages differ only by the data in `content/*.ts`.
 */
export function ProductPage({ data, currentPath }: { data: ProductPageData; currentPath: string }) {
  return (
    <Layout currentPath={currentPath}>
      <Hero data={data.hero} />

      <Section
        id="plans"
        center
        eyebrow={data.plans.eyebrow}
        title={data.plans.title}
        subtitle={data.plans.subtitle}
      >
        <PlanGrid plans={data.plans.plans} note={data.plans.note} />
      </Section>

      {data.sections.map((section) => {
        switch (section.kind) {
          case 'split':
            return <SplitSection key={section.data.title} data={section.data} />;
          case 'features':
            return (
              <Section
                key={section.title}
                tone={section.tone ?? 'default'}
                eyebrow={section.eyebrow}
                title={section.title}
                subtitle={section.subtitle}
              >
                <FeatureGrid features={section.features} />
              </Section>
            );
          case 'comparison':
            return (
              <ComparisonTable key={section.data.title} data={section.data} plans={data.plans.plans} />
            );
          case 'steps':
            return <StepsSection key={section.data.title} data={section.data} />;
          case 'specs':
            return <SpecsSection key={section.data.title} data={section.data} />;
          case 'groups':
            return <GroupsSection key={section.data.title} data={section.data} />;
          case 'prose':
            return <ProseSection key={section.data.title} data={section.data} />;
        }
      })}

      <CtaBand data={data.cta} />

      {data.faq && (
        <FAQSection
          items={data.faq.items}
          title={data.faq.title}
          subtitle={data.faq.subtitle}
          cta={data.faq.cta}
        />
      )}
    </Layout>
  );
}
