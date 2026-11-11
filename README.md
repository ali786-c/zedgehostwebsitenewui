# ZedgeHost redesign

Vite + React 19 + TypeScript front end that builds static pages into the exact
legacy filenames. The legacy site at the repo root is not modified by this app.

## Commands

```bash
npm install
npm run dev       # Vite dev server (client-side routing shell)
npm run build     # typecheck → vite build → prerender → SEO parity check
npm run lint
npm test
```

`npm run build` fails if the generated page's title, meta description, canonical,
robots, H1, JSON-LD or internal links no longer match the legacy HTML at the repo
root.

## Structure

```
src/
  app/          routes (key → output file → page → SEO), currency provider, SSR/client entries
  pages/        ProductPage + BlogPostPage templates, productRoutes (data → route
                bindings); Home/About are bespoke
  components/
    layout/     TopBar, Header, MobileNav, Footer, WhatsAppFloat, Layout
    ui/         Button, Badge, Container, Section, Accordion, Icon
    blog/       BlogCard, ArticleBody, InlineText, FaqBlock
    sections/   Hero, PlanGrid, ComparisonTable, SpecsSection, GroupsSection,
                ProseSection, StepsSection, SplitSection, FAQ, CTA …
  content/      typed page data (site nav, home, cloud, shared, wordpress, vps, about)
    blocks.ts   copy reused across pages (support CTA, feature sets, split sections)
    plans/      plan sets shared between pages (shared, catalogue, dedicated, vps)
    blog/       blog index + one JSON per post (extracted from the legacy HTML)
    seo.ts      typed entry point for seo.json + seo-products.json
  lib/          seo/head rendering, price formatting, plan helpers (unit tested)
  styles/       tokens, base, layout, components, sections, blog
scripts/
  prerender.ts      renders each route into dist/<legacy-filename>.html
  seo-parity.ts     compares dist output with the legacy root HTML
  extract-blog.ts   converts the legacy blog HTML into typed post JSON
```

Data flows one way: `content` → `pages/ProductPage` → `components`. Components
never import page data; pages never contain business logic.

## Adding a hosting product page

1. Add the page's meta + schema to `src/content/seo-products.json` (extracted from
   the legacy HTML) and expose it in `src/content/seo.ts`.
2. Create `src/content/<product>.ts` exporting a `ProductPageData`: hero, plans,
   ordered `sections` (`split`, `features`, `comparison`, `steps`, `specs`,
   `groups`, `prose`, `tld-table`, `bulk-form`), CTA and optional FAQ. Reuse
   `content/blocks.ts` copy and a plan set from `content/plans/` instead of
   copying it.

Domain pages (`src/content/domains.ts`) use the same template: they simply omit
`plans` and use `tld-table` for pricing and `bulk-form` for the bulk register /
transfer tools. Domain search forms post to the legacy WHMCS endpoint
(`site.domainSearchAction`) with the original `a` / `domain` / `query` fields.
3. Export the route component from `src/pages/productRoutes.tsx` via `productRoute`.
4. Register the route in `src/app/routes.tsx` with the exact legacy `.html` name.
5. Run `npm run build`; the parity checker must pass for that filename.

Plans carry their own billing period (`yearly` or `monthly`). The billing toggle
only appears when every plan is priced yearly; comparison tables are generated
from the plan specs, so they never drift from the cards.

## Blog

Posts are content, not code: `src/content/blog/posts/<slug>.json` holds the
meta, hero, answer callout, typed body blocks (`heading`, `paragraph`, `list`,
`table` with inline text/link/strong runs), CTA and FAQ. `BlogPostPage` renders
all of them through `ArticleBody`; `blog.html` renders `listing.json` through
`BlogCard`. Adding a post means adding one JSON file to `blogPosts` in
`src/content/blog/index.ts` and one route (the route list builds them from
`blogPosts`, so only the import is manual).

The JSON is generated from the legacy pages by `npx tsx scripts/extract-blog.ts`,
so copy never gets retyped. Re-run it if the legacy source changes.
