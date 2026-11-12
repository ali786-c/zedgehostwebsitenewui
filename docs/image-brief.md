# Image Brief — Zedgehost Redesign

Ye document redesign site ki **saari images ka ek hi brief** hai: abhi kaunsi image kahan lag rahi hai, kya masla hai, nayi image kaisi honi chahiye, aur ChatGPT mein paste karne ke liye **har image ka alag prompt**.

Kaam ka tareeqa: neeche diye gaye prompts ChatGPT (GPT-4o/GPT-5 image) mein ek hi chat thread mein chalayen, files ko exact filename ke saath `public/assets/img/` mein rakhein, phir main unhein content se wire kar ke build + SEO parity verify kar dunga.

---

## 1. Abhi kya ho raha hai (analysis)

Site par **57 prerendered pages** hain, lekin content images sirf **6** hain — is liye ek hi picture har jagah ghoom rahi hai.

| File | Size | Dimensions | Placements | Kahan |
|---|---|---|---|---|
| `hosting.webp` | 120 KB | 960×640 | **18** | Home, Shared, **saare 10 domain pages**, Reseller, Windows Reseller, Windows Shared, Business + Enterprise Email, Builder, Google Workspace (gaps) |
| `cloud-infrastructure.webp` | 283 KB | 1388×1133 | **17** | Cloud, Dedicated, Linux VPS, Basic/Standard/Professional/Pro VPS, WordPress, Shared, Reseller, Windows family (hero + split) |
| `security.webp` | 215 KB | 1254×1254 | **8** | SiteLock, Backup, DigiCert SSL + 5 pages ka "Why Choose Us" split |
| `wordpress.webp` | 135 KB | 1254×1254 | **3** | WordPress hero + split, Builder split |
| `cloud-hero.webp` | 200 KB | 1254×1254 | **1** | Cloud hosting hero |
| `blog-hosting.webp` | 70 KB | 1024×683 | **71** | Blog listing hero + 14 cards + har post ka hero + related cards |

### Asli masle (jo aap ko "ajeeb" lag rahe hain)

1. **Image ka matlab page se match nahi karta.** Domain registration, business email, reseller aur website builder — sab par wahi 3D picture hai jis ke andar screen par "VPS Hosting" likha hai. Yahi sabse bara "ajeeb" factor hai.
2. **Colour language brand se nahi milti.** Saari images bright electric **blue** hain; website ka brand green `#2A862E` / deep green `#0B3D14` / mint `#EAF6EC` hai. Is liye image page ke andar chipki hui lagti hai.
3. **Text image ke andar baked hai.** AI ne "High Performance", "99.9% Uptime", "Cloud Hosting" literally image mein likh diya hai — zoom par thora blurry hota hai, translate nahi hota, aur mobile par pixels mein ghum ho jata hai.
4. **Har jagah same picture.** 18 pages par ek hi image, aur blog ke 71 slots par ek hi image. Site "template" lagti hai, brand nahi.
5. **Square images hero ko bohat lamba kar deti hain.** `1254×1254` square image 575px column mein 575px tall hoti hai — mobile par hero bekar lamba ho jata hai.
6. **`og-card.webp` galat hai (bug).** Ye image asal mein kisi doosre project ki card hai ("Brand Build Skills for Claude") — yani WhatsApp/LinkedIn par har page ka preview galat image dikhata hai. Isko AI se nahi, main branded design se banaunga.

---

## 2. Art direction (ek hi visual language)

Sab images ek hi "family" ki honi chahiyein — warna dobara mismatch ho jayega. Ye rules **har prompt** mein already shamil hain:

- **Style:** premium soft **3D render** — matte clay + frosted glass, studio softbox lighting, soft long shadows, isometric / three-quarter view. Flat cartoon ya stock photo nahi.
- **Palette:** emerald `#2A862E`, deep forest `#0B3D14`, pale mint `#EAF6EC`, off-white `#F7F9F7`, aur **ek chhota** violet accent `#644DC5` (kabhi kabhi highlight ke liye). **Koi blue nahi.**
- **Background:** soft radial mint→white gradient, halka sa vignette. Har image light background par ho taake framed card ke andar saaf lage.
- **Composition:** subject center mein, ~10% khaali safe margin chaaron taraf (CSS card image ko crop karta hai), koi text nahi.
- **No text, no numbers, no logos, no UI labels, no watermark, no people/faces/hands.** Text AI garbles karta hai aur page ke copy se takrata hai; chehre uncanny lagte hain.
- **Mood:** saaf, shaant, mehnga — "makhan" feel, neon/glossy gamer look nahi.

---

## 3. Technical spec

| Slot | Generate | Final crop | File size target | Kahan use hoti hai |
|---|---|---|---|---|
| Page hero | 1536×1024 (3:2 landscape) | wahi | ≤ 180 KB | Product page ke hero ke framed card mein (desktop ~575px wide) |
| Section split | 1536×1024 (3:2) | center-crop 1280×880 (16:11) | ≤ 140 KB | `SplitSection` ka media card (~575px wide) |
| Blog card | 1536×1024 (3:2) | center-crop 1200×675 (16:9) | ≤ 90 KB | Listing + related posts ke cards (~380px wide) |
| Blog listing hero | 1536×1024 (3:2) | 1280×854 | ≤ 140 KB | `blog.html` hero |
| OG card | — | 1200×630 | ≤ 90 KB | **AI se nahi** — main banaunga |

- Format: **WebP**, quality 80–82. ChatGPT se PNG aayegi; neeche convert command di hui hai.
- Naming: bilkul wahi filename jo table mein hai (lowercase, hyphens) — warna wiring mein masla hoga.
- Folder: `redesign/public/assets/img/`.
- Masters (badi PNGs) repo mein commit na karein.

---

## 4. Image list (22 images)

### Priority 1 — in se sabse bara farq padega

- [ ] `hero-home.webp` — Home
- [ ] `hero-domain.webp` — 10 domain pages
- [ ] `hero-shared.webp` — Shared + Windows Shared
- [ ] `hero-cloud.webp` — Cloud
- [ ] `hero-vps.webp` — Linux VPS + 4 VPS plans
- [ ] `hero-wordpress.webp` — WordPress
- [ ] `og-card.webp` — (main banaunga, aap ko kuch nahi karna)

### Priority 2

- [ ] `hero-dedicated.webp` — Dedicated + Windows Dedicated
- [ ] `hero-reseller.webp` — Reseller + Windows Reseller
- [ ] `hero-email.webp` — Business Email + Enterprise Email + Google Workspace
- [ ] `hero-security.webp` — SiteLock + Backup + DigiCert SSL
- [ ] `hero-builder.webp` — Website Builder
- [ ] `split-infrastructure.webp` — 7 pages ka performance/infrastructure split
- [ ] `split-security.webp` — 6 pages ka security split

### Priority 3

- [ ] `split-wordpress.webp` — WordPress + Builder split
- [ ] `split-dedicated.webp` — Dedicated split
- [ ] `split-reseller.webp` — Reseller split
- [ ] `split-vps.webp` — VPS resources split
- [ ] `blog-listing.webp` — blog hero
- [ ] `blog-city-a.webp` / `blog-city-b.webp` — 12 city guides (alternate)
- [ ] `blog-domain.webp` — `.com` domain post
- [ ] `blog-cost.webp` — hosting cost post

### Jo generate nahi karni (brand assets, waise hi rahenge)

`logo.png` / `logo.svg` / `favicon.*` / `apple-touch-icon.png` / `pay-visa.png` / `pay-mastercard.png` / `pay-easypaisa.png` / `pay-jazzcash.png` — ye asli brand logos hain, AI inhein ghalat banayega.

---

## 5. Prompts — Page heroes

> Har prompt **poora aur self-contained** hai. Bas copy karein aur ChatGPT mein paste kar dein. Ek hi chat thread mein sab chalayen taake style consistent rahe.

### 1. `hero-home.webp` — Home

```
A premium 3D illustration for a web hosting company homepage. A single elegant
server tower floats at a slight three-quarter isometric angle, its front panel
softly glowing with mint-green light. Around it orbit three rounded frosted-glass
cards: one blank browser window with an abstract green line chart, one blank
storage block, one small floating globe with grid lines. Thin glowing connection
lines link them. Materials look like matte clay and frosted glass. Colour palette:
emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white
#F7F9F7, one small violet #644DC5 accent. Soft studio lighting, gentle long
shadows, subtle depth of field. Background: soft radial mint-to-white gradient.
Centered composition with about 10% empty margin on all sides. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 2. `hero-domain.webp` — saare domain pages

```
A premium 3D illustration for a domain registration page. A rounded frosted-glass
globe floats at the centre, wrapped in thin glowing latitude lines, with a small
polished key and a blank nameplate-shaped capsule hovering beside it. Two blank
pill-shaped tag chips (no letters) float nearby, and a soft green checkmark badge
sits on the globe. Materials: matte clay and frosted glass. Colour palette:
emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white
#F7F9F7, small violet #644DC5 accent. Soft studio lighting, gentle long shadows.
Background: soft radial mint-to-white gradient. Centered composition, ~10% empty
margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 3. `hero-shared.webp` — Shared hosting + Windows shared

```
A premium 3D illustration for affordable shared web hosting. One compact server
rack unit sits at the centre, and four small rounded website cards float around it
in a neat orbit, each showing an abstract blank layout (soft grey blocks, no text)
with a tiny green checkmark. A subtle circular platform underneath with mint glow.
Materials: matte clay and frosted glass. Palette: emerald green #2A862E, deep
forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7, small violet #644DC5
accent. Soft studio lighting, gentle long shadows. Background: soft radial
mint-to-white gradient. Centered composition, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 4. `hero-cloud.webp` — Cloud hosting

```
A premium 3D illustration for scalable cloud hosting. A large soft cloud built
from rounded matte volumes floats at the centre, with three server blocks nested
inside it and a frosted-glass slab in front showing abstract resource bars in mint
green (no numbers, no words). Two curved arrows suggest scaling up, and a small
floating CPU chip and storage cylinder sit beside the cloud. Palette: emerald green
#2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet
#644DC5 accent on one chip. Soft studio lighting, gentle long shadows. Background:
soft radial mint-to-white gradient. Centered composition, ~10% empty margin.
Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 5. `hero-vps.webp` — Linux VPS + Basic/Standard/Professional/Pro VPS

```
A premium 3D illustration for VPS hosting. A single lifted server slab is shown in
exploded three-quarter view, its layers slightly separated: a processor layer with
a mint-green chip, a memory layer with rounded RAM sticks, and a storage layer with
thin SSD plates. A small blank dark terminal panel floats to the side with only a
soft glowing green horizontal prompt bar and no characters. Thin glowing lines
connect the layers. Palette: emerald green #2A862E, deep forest green #0B3D14, pale
mint #EAF6EC, off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting,
gentle long shadows. Background: soft radial mint-to-white gradient. Centered
composition, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 6. `hero-wordpress.webp` — WordPress hosting

```
A premium 3D illustration for managed WordPress hosting. A frosted-glass page
composer floats at the centre: three blank rounded content blocks snapping into a
grid layout, a small colour-swatch palette strip beside it, and a soft green check
badge. A rolled-up paint brush and a small plugin puzzle-piece hover nearby. No
lettering or logos of any kind. Materials: matte clay and frosted glass. Palette:
emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white
#F7F9F7, violet #644DC5 accent in one swatch. Soft studio lighting, gentle long
shadows. Background: soft radial mint-to-white gradient. Centered composition, ~10%
empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 7. `hero-dedicated.webp` — Dedicated + Windows Dedicated

```
A premium 3D illustration for dedicated servers. A tall enterprise rack cabinet
stands in a clean bright micro data-centre, one rack glowing mint-green while the
neighbouring racks stay softly muted. Rounded floor tiles, thin cable runs, a small
floating shield badge with a check. Materials: matte metal, clay and frosted glass.
Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC,
off-white #F7F9F7, violet #644DC5 accent on one small indicator. Soft studio
lighting, gentle shadows, shallow depth of field. Background: soft mint-to-white
gradient haze. Subject centered, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 8. `hero-reseller.webp` — Reseller + Windows Reseller

```
A premium 3D illustration for reseller hosting. One large server block at the
centre splits into five smaller rounded account cards that fan outward on thin
glowing rails, each card showing an abstract blank dashboard layout with a tiny
green status dot. A small frosted-glass price tag shape (blank, no numbers) floats
above. Materials: matte clay and frosted glass. Palette: emerald green #2A862E,
deep forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet #644DC5
accent. Soft studio lighting, gentle long shadows. Background: soft radial
mint-to-white gradient. Centered composition, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 9. `hero-email.webp` — Business / Enterprise email + Google Workspace

```
A premium 3D illustration for business email hosting. Three rounded envelope
shapes fly in an arc into a soft polished mailbox node, with thin glowing trails.
Beside them a frosted-glass card shows an abstract blank message list (soft grey
rows, no text) and a green verified check badge. A small floating calendar tile and
a chat bubble complete the group. Materials: matte clay and frosted glass. Palette:
emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white
#F7F9F7, violet #644DC5 accent. Soft studio lighting, gentle long shadows.
Background: soft radial mint-to-white gradient. Centered composition, ~10% empty
margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 10. `hero-security.webp` — SiteLock / Backup / DigiCert SSL

```
A premium 3D illustration for website security and SSL. A large rounded shield with
a polished padlock floats at the centre, ringed by two thin scanning circles in mint
green. Behind it, a soft server stack and a small frosted-glass certificate card
with a green ribbon seal and blank lines (no text). A tiny violet accent particle
ring suggests malware being blocked. Materials: matte clay, frosted glass, brushed
metal. Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC,
off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting, gentle long shadows.
Background: soft radial mint-to-white gradient. Centered composition, ~10% empty
margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 11. `hero-builder.webp` — Website Builder

```
A premium 3D illustration for a drag-and-drop website builder. A frosted-glass
canvas floats at the centre with three blank rounded page sections snapping into
place; a glossy cursor arrow drags one section on a thin glowing guide line. Around
the canvas hover a small device frame, a colour palette strip and a layout-grid
block. Materials: matte clay and frosted glass. Palette: emerald green #2A862E,
deep forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet #644DC5
accent. Soft studio lighting, gentle long shadows. Background: soft radial
mint-to-white gradient. Centered composition, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

---

## 6. Prompts — Section splits (16:11 crop)

> Ye images text ke saath side-by-side dikhti hain, is liye inmein subject ke chaaron taraf **zyada** khaali jagah rakhein (upar/neeche ~15%) — CSS center-crop karta hai.

### 12. `split-infrastructure.webp` — performance / "under the hood" (7 pages)

```
A premium 3D illustration of fast hosting infrastructure. A stack of three thin
NVMe SSD plates leans at a three-quarter angle with mint-green light running along
their edges; behind it a compact server block and a network of thin glowing lines
with small node spheres. A soft speed arc wraps around the stack, suggesting
instant loading, with a frosted-glass slab showing an abstract performance line
(no numbers, no words). Materials: matte clay, brushed metal, frosted glass.
Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC,
off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting, gentle shadows.
Background: soft radial mint-to-white gradient. Centered, with extra empty margin
top and bottom. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 13. `split-security.webp` — security / "why choose us" (6 pages)

```
A premium 3D illustration of layered website security. A curved wall of rounded
green hexagon panels protects a small server stack; two glowing shield nodes hover
in front, and a few violet malformed particles bounce off the wall and dissolve.
Thin mint scanning rings sweep across the floor plane. Materials: matte clay,
frosted glass, soft metal. Palette: emerald green #2A862E, deep forest green
#0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet #644DC5 only for the blocked
particles. Soft studio lighting, gentle shadows. Background: soft radial
mint-to-white gradient. Centered, with extra empty margin top and bottom.
Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 14. `split-wordpress.webp` — WordPress + Builder split (2 pages)

```
A premium 3D illustration of assembling a website layout. A frosted-glass editor
canvas floats on a soft pedestal: three rounded blank content blocks hover slightly
above their slots on thin glowing guide rails, and a colour-swatch strip plus a
layout-grid block sit beside it. A small theme card shows an abstract blank page
thumbnail. Materials: matte clay and frosted glass. Palette: emerald green #2A862E,
deep forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet #644DC5
accent in one swatch. Soft studio lighting, gentle shadows. Background: soft radial
mint-to-white gradient. Centered, with extra empty margin top and bottom.
Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 15. `split-dedicated.webp` — Dedicated split (2 pages)

```
A premium 3D close-up of a single dedicated server chassis. The chassis is open at
a three-quarter angle showing clean internal bays, cooling fans and neat cable
routing, with mint-green indicator lights along the front. A small floating badge
with a check hovers above it. Materials: brushed dark metal, matte clay, frosted
glass. Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC,
off-white #F7F9F7, violet #644DC5 accent on one light. Soft studio lighting, gentle
shadows, shallow depth of field. Background: soft mint-to-white haze. Centered, with
extra empty margin top and bottom. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 16. `split-reseller.webp` — Reseller split (2 pages)

```
A premium 3D illustration of white-label reseller hosting. One large rounded server
block sits at the centre and fans out into four smaller blank account cards along
thin glowing rails, each card carrying an abstract dashboard layout and a small
green status dot. A blank frosted-glass price-tag shape floats nearby. Materials:
matte clay and frosted glass. Palette: emerald green #2A862E, deep forest green
#0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet #644DC5 accent. Soft studio
lighting, gentle shadows. Background: soft radial mint-to-white gradient. Centered,
with extra empty margin top and bottom. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 17. `split-vps.webp` — VPS resources / data transfer

```
A premium 3D illustration comparing server resources. Three rounded vertical blocks
of different heights stand side by side like clean bar-chart pillars, each topped
with a small icon: a processor chip, a memory stick and a storage cylinder. A thin
glowing data-transfer line loops between them with a small arrow node, and a
frosted-glass slider control floats in front (no markings). Materials: matte clay
and frosted glass. Palette: emerald green #2A862E, deep forest green #0B3D14, pale
mint #EAF6EC, off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting,
gentle shadows. Background: soft radial mint-to-white gradient. Centered, with extra
empty margin top and bottom. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

---

## 7. Prompts — Blog images (16:9 card crop / 3:2 hero)

> Ye sabse chhoti dikhti hain (~380px wide card). Is liye subject **simple** rakhein aur centre mein, kinare par kuch ahem na ho (16:9 crop kinaron se kaatta hai). Inmein thora zyada "editorial" mood theek hai lekin wahi palette.

### 18. `blog-listing.webp` — blog.html hero (3:2)

```
A premium 3D editorial illustration about web hosting knowledge. A soft mint desk
plane holds a small floating laptop shape with a blank screen, a rounded server
miniature, a globe with grid lines, a closed notebook and a pencil, plus two blank
frosted-glass article cards. Everything arranged in a light isometric flat-lay with
generous negative space. Materials: matte clay and frosted glass. Palette: emerald
green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7,
violet #644DC5 accent. Soft studio lighting, gentle shadows. Background: soft radial
mint-to-white gradient. Centered composition, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 19. `blog-city-a.webp` — city guide posts (variant A)

```
A premium 3D illustration for a local web hosting guide. A small stylised South
Asian city skyline silhouette of rounded clay buildings, a dome and a tall minaret,
sits on a floating island disc; beside it a tiny laptop shape and a small server
block rest on the same disc. Thin glowing connection lines rise from the buildings
into a soft cloud. Materials: matte clay and frosted glass. Palette: emerald green
#2A862E, deep forest green #0B3D14, pale mint #EAF6EC, off-white #F7F9F7, violet
#644DC5 accent. Soft studio lighting, gentle shadows. Background: soft radial
mint-to-white gradient. Centered composition, ~10% empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no flags, no hands, no blue tones.
```

### 20. `blog-city-b.webp` — city guide posts (variant B)

```
A premium 3D illustration for a local web hosting guide. A small stylised coastal
city skyline of rounded clay towers and a low harbour with a tiny boat sits on a
floating island disc; a laptop shape and a server block rest beside the buildings,
connected by thin glowing lines into a soft cloud above. Materials: matte clay and
frosted glass. Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint
#EAF6EC, off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting, gentle
shadows. Background: soft radial mint-to-white gradient. Centered composition, ~10%
empty margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no flags, no hands, no blue tones.
```

### 21. `blog-domain.webp` — domain buying post

```
A premium 3D illustration about choosing a domain name. A rounded frosted-glass
globe sits at the centre with a blank capsule nameplate and a blank pill-shaped
search field hovering beside it; a small key with a green check badge rests in
front, and two blank tag chips float around. Materials: matte clay and frosted
glass. Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC,
off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting, gentle shadows.
Background: soft radial mint-to-white gradient. Centered composition, ~10% empty
margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

### 22. `blog-cost.webp` — hosting cost post

```
A premium 3D illustration about hosting budget. A rounded calculator shape with
soft blank keys and a blank display sits beside three stacked coin discs and a
small frosted-glass card showing an abstract rising bar chart (no numbers). A tiny
green check badge floats above. Materials: matte clay, frosted glass, soft metal.
Palette: emerald green #2A862E, deep forest green #0B3D14, pale mint #EAF6EC,
off-white #F7F9F7, violet #644DC5 accent. Soft studio lighting, gentle shadows.
Background: soft radial mint-to-white gradient. Centered composition, ~10% empty
margin. Landscape 3:2.
No text, no letters, no numbers, no logos, no UI labels, no watermark, no people,
no faces, no hands, no blue tones.
```

---

## 8. ChatGPT mein kaam karne ka tareeqa

1. **Ek hi chat thread** rakhein aur style dobara na badlein. Pehli image ke baad likhein: *"Same style, palette, lighting and camera as the previous image — new subject:"* aur phir neeche wala prompt paste karein. Isse family consistent rehti hai.
2. Har image **landscape** maangein (prompt mein likha hai). Agar tool square de de to likhein: *"Regenerate in landscape 3:2."*
3. Agar text/label aa jaye (aksar aata hai) to poora prompt dobara na dein, sirf likhein: *"Same image, remove all text and labels, keep everything else identical."*
4. File download karte waqt seedha naam dein: `raw-hero-home.png`, `raw-split-security.png` waghera — baad mein rename ka jhanjhat nahi.
5. 1–2 images pehle banayein aur mujhe dikhayein; palette confirm hone ke baad baqi batch chalayein (warna 22 images ghalat direction mein chali jayengi).

### Har image accept karne se pehle 5 checks

- [ ] Palette mein **green/mint** hai, blue nahi
- [ ] **Koi text/letter/number/logo** nahi (zoom kar ke dekhein)
- [ ] Subject centre mein, kinaron par ~10% khaali jagah
- [ ] Background light (mint→white), dark nahi
- [ ] Koi insaan, haath ya chehra nahi; koi object toota/physical ghalat nahi

---

## 9. Files aa jayen to (conversion + wiring)

### Convert PNG → WebP (exact sizes)

Masters `raw-images/` folder mein rakhein (repo mein commit na karein), phir:

```bash
python - <<'PY'
from PIL import Image
from pathlib import Path

def save(name, size, quality=82, crop=None):
    im = Image.open(f'raw-images/raw-{name}.png').convert('RGB')
    if crop:                      # center-crop to target ratio
        tw, th = crop
        w, h = im.size
        scale = max(tw / w, th / h)
        im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
        w, h = im.size
        left, top = (w - tw) // 2, (h - th) // 2
        im = im.crop((left, top, left + tw, top + th))
    im = im.resize(size, Image.LANCZOS)
    out = Path('public/assets/img') / f'{name}.webp'
    im.save(out, 'WEBP', quality=quality, method=6)
    print(out, f'{out.stat().st_size/1024:.0f} KB', im.size)

# heroes (3:2)
for n in ['hero-home','hero-domain','hero-shared','hero-cloud','hero-vps',
          'hero-wordpress','hero-dedicated','hero-reseller','hero-email',
          'hero-security','hero-builder','blog-listing']:
    save(n, (1536, 1024))
# splits (16:11 center crop)
for n in ['split-infrastructure','split-security','split-wordpress',
          'split-dedicated','split-reseller','split-vps']:
    save(n, (1280, 880), crop=(1280, 880))
# blog cards (16:9 center crop)
for n in ['blog-city-a','blog-city-b','blog-domain','blog-cost']:
    save(n, (1200, 675), crop=(1200, 675))
PY
```

### Wiring map (main ye update karunga)

| Nayi file | Kis content module / page mein jayegi |
|---|---|
| `hero-home.webp` | `src/content/home.ts` |
| `hero-domain.webp` | `src/content/domains.ts` (ek hi `heroImage` — 10 pages) |
| `hero-shared.webp` | `shared.ts`, `windowsShared.ts` |
| `hero-cloud.webp` | `cloud.ts` |
| `hero-vps.webp` | `vps.ts`, `vpsDetail.ts` |
| `hero-wordpress.webp` | `wordpress.ts` |
| `hero-dedicated.webp` | `dedicated.ts` |
| `hero-reseller.webp` | `reseller.ts` (2 pages) |
| `hero-email.webp` | `email.ts` (2 pages), `gaps.ts` |
| `hero-security.webp` | `security.ts` (3 pages) |
| `hero-builder.webp` | `builder.ts` |
| `split-infrastructure.webp` | `blocks.ts` ka `performanceSection()` default + `home.ts`, `shared.ts`, `windowsShared.ts`, `linux-vps`, `wordpress.ts`, `cloud.ts` |
| `split-security.webp` | `blocks.ts` ka `securitySection()` default + `shared.ts`, `windowsShared.ts`, `cloud.ts`, `reseller.ts` |
| `split-wordpress.webp` | `wordpress.ts`, `builder.ts` |
| `split-dedicated.webp` | `dedicated.ts` |
| `split-reseller.webp` | `reseller.ts` |
| `split-vps.webp` | `vps.ts` / `vpsDetail.ts` |
| `blog-listing.webp` | `src/content/blog/index.ts` ka `HERO` |
| `blog-city-a/b`, `blog-domain`, `blog-cost` | `BlogCardData` mein `image` field + har post ka `hero` (city posts alternate) |

Wiring ke baad main `npm run typecheck && npm run lint && npm run build` chalaunga, SEO parity (57/57) verify karunga, aur browser mein desktop + mobile par check karunga ke koi 404 image nahi aur layout toota nahi.

### Purani files ka kya hoga

`hosting.webp`, `cloud-hero.webp`, `cloud-infrastructure.webp`, `wordpress.webp`, `security.webp`, `blog-hosting.webp` — wiring ke baad kisi page par reference nahi rahegi, phir inhein delete kar dunga (build ke baad confirm kar ke).

---

## 10. Ek line ka summary

Aap ko **22 images** banani hain (11 heroes + 6 splits + 4 blog covers + blog listing hero). Sab ek hi style: **soft 3D, green/mint palette, no text, no people, light background**. Priority 1 ki 6 images pehle banayein — usi se site ka 80% "ajeeb" pan khatam ho jayega. `og-card.webp` main khud banaunga.

