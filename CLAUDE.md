# Douglas Plant Healthcare Services LLC — Website

## Project Overview
Static HTML/CSS/JS website for a family-owned NJ arborist business serving Ocean & Monmouth Counties.

**Live site:** https://douglasplanthealthcare.com
**Repo:** https://github.com/Douglas-Plant-Healthcare-Services-LLC/website.git

**Pages:** `index.html`, `about.html`, `services.html`, `guardian.html`, `commercial.html`, `quote.html`, `thankyou.html`

Shared nav/header injected via `script.js`. Styling in `style.css` (`--primary-green: #2e7d32`).

---

## SEO — Always Keep This in Mind

Every change to this site should be made with local SEO in mind. The business name contains "Healthcare" which triggers wrong search results — every signal we send to Google must clearly communicate **arborist / tree care / plant health**.

### Core SEO rules for this site

**Titles & headings**
- One H1 per page — the page topic, keyword-rich
- Services and major sections → H2
- H3 used sparingly
- `<p>` tags for body copy only, no SEO weight

**Content**
- All pages should target 600+ words for SEO weight
- Weave symptom-based search phrases naturally into body copy: "why is my tree dying", "tree losing leaves", "tree turning brown", "sick tree", "yellowing leaves", "bark falling off"
- Use credential terms throughout: "ISA Certified Arborist", "NJ Licensed Tree Expert", "Certified Arborist"
- Use "PHC" as shorthand but always alongside the spelled-out "plant health care" — Google needs context
- Location signal on every page: Ocean County, Monmouth County, Jersey Shore, and specific towns (Brick, Spring Lake, Sea Girt, Manasquan, Wall Township, Brielle, etc.)

**Meta tags — every page must have:**
- Unique `<title>` — format: `[Specific Topic] | Douglas Plant Healthcare`
- `<meta name="description">` — under 160 chars, includes service + location
- `<meta name="keywords">` — wide permutation set (credentials, locations, symptom queries)
- `<link rel="canonical">` — pointing to its own `https://douglasplanthealthcare.com/[page].html`

**Images**
- Every `<img>` must have a descriptive, keyword-conscious `alt` attribute
- Include "serving Ocean and Monmouth County, NJ" in logo alt text

**Files**
- `robots.txt` — disallows `/thankyou.html` and `/city-pages/`; references sitemap
- `sitemap.xml` — lists all public pages; `thankyou.html` excluded

### Keyword categories to draw from
- **Credentials:** certified arborist, ISA certified arborist, NJ licensed tree expert, licensed tree expert, NJ LTE, board certified arborist
- **Services:** plant health diagnosis, tree disease treatment, insect treatment, root care, tick control, mosquito control, deer repellent, shrub pruning, nutrient management, soil treatment, tree fertilization
- **Symptom queries:** why is my tree dying, tree losing leaves, tree turning brown, sick tree, yellowing leaves, bark falling off, plant not growing, dying shrub, diseased tree, tree dropping leaves early
- **Locations:** Monmouth County NJ, Ocean County NJ, Jersey Shore, Brick NJ, Spring Lake NJ, Sea Girt NJ, Manasquan NJ, Wall Township NJ, Brielle NJ, Belmar NJ, Asbury Park NJ, Red Bank NJ, Rumson NJ, Toms River NJ, Point Pleasant NJ
- **Business type:** arborist near me, local arborist NJ, tree care company NJ, PHC company NJ, plant healthcare NJ

### Future work (do not implement without explicit approval)
- **Word count expansion (Step 7):** Requires human review of copy. Strategy: 2–3 compelling sentences at top of each section, then deeper informational content below. Index and about pages need the most work.
- **City landing pages (Step 10):** Hidden from main nav, indexed by Google only. One page per target city. Must be fully unique original content per city — never duplicate content with just a location swapped. Requires careful human approval of copy before publishing.

---

## Tooling Notes
- Git push must be done from Claude Code terminal — Cowork sandbox blocks outbound GitHub connections
- Always branch before making changes; merge to `main` when approved

## Quote Form
- Submits to ArborGold Web Leads API (native POST — do not wrap in `fetch()`)
- reCAPTCHA Enterprise site key: `6LezVm0rAAAAAFmqD38-XeMW6yos-UdlLAaeFVrR`
- CompanyCode: `R91-XMW5KR-Y4POL2-S8TUUP`
- RedirectUrl: `https://douglasplanthealthcare.com/thankyou.html`
