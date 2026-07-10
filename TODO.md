# Outstanding items after the Eleventy migration

Everything below is a content gap, not a code gap — the site builds and renders correctly without
any of it (placeholders degrade gracefully), but these are the things worth filling in before or
shortly after this branch goes live.

## Images (highest priority for how the site looks)

None of these exist yet. Drop the file in and flip the one line noted — nothing else to wire up.

- [ ] **Headshot** — save as `src/assets/img/headshot.jpg` (or `.png`) and set `"photo"` in
      `src/_data/site.json` to `/assets/img/headshot.jpg`. Until then the About page shows an
      "IB" initials avatar, which is the intended fallback, not a bug.
- [ ] **About page gallery (6 photos)** — `src/_data/aboutPhotos` entries in `site.json` already
      have captions written; add each image under `src/assets/img/` and set that entry's `"url"`.
      Captions expected, in order: *At ITC, University of Twente* (wide), *Fieldwork in Nigeria*,
      *Deltares internship, Delft*, *ISDE21 — Youth Forum*, *Mapping session*, *Tartu, Estonia*.
- [ ] **One screenshot per project** — `src/_data/projects.json`, set each project's `"img"` to a
      path under `/assets/img/`. The GHDI project previously hotlinked a Google Images thumbnail
      (`encrypted-tbn0.gstatic.com`) — that's been removed; it now shows the same icon-on-tint
      placeholder as every other project until a real screenshot is added.
- [ ] **Social preview image** (`og:image` / Twitter card) — add `src/assets/img/og-image.png` at
      1200×630px. Referenced already in `src/_includes/partials/seo.njk`; nothing to change once
      the file exists.
- [ ] **Favicon** — not configured yet. Add e.g. `src/assets/img/favicon.svg` (or `.ico`) and a
      `<link rel="icon" href="/assets/img/favicon.svg">` in `src/_includes/layouts/base.njk`.

## CV

- [ ] `src/_data/site.json` → `cv_url` points at `/assets/files/cv.pdf`, which doesn't exist yet.
      Add the file at `src/assets/files/cv.pdf`. The About page's "Download CV" button and the MSc
      thesis link are separate buttons now (per your Step 0 answer) — the thesis link
      (`thesis_url`) already works and points at `purl.utwente.nl`.

## Podcast episode links

12 of 21 episodes (numbers 10–21, the newer ones) link to their real, confirmed Spotify episode
pages. The other 9 (numbers 1–9, from May 2021–Jan 2022) could not be resolved automatically —
both the Spotify show page and Apple Podcasts page only render their most recent ~12 episodes in
static HTML; the rest load behind a "Load more" button that isn't reachable without a live browser
session. Rather than guess episode IDs, those 9 currently link to the show's main Spotify page
(`https://open.spotify.com/show/7aqyurtRoF42hTysOqNa9v`) as a safe fallback.

To fix: open the Spotify app or site, find each episode below, copy its "Share → Copy link to
episode" URL, and paste it into that episode's `"url"` in `src/_data/episodes.json`.

- [ ] EP 09 — The Future is Geospatial (Jan 2022)
- [ ] EP 08 — 2021 in Reviews and Awards in the Geosphere (Dec 2021)
- [ ] EP 07 — Being a Geospatial Engineer (Nov 2021)
- [ ] EP 06 — Digital Mapping in the Humanitarian Context with Janet Chapman / Crowd2Map (Oct 2021)
- [ ] EP 05 — Mentoring and Volunteering in the Geospatial Industry (Sep 2021)
- [ ] EP 04 — Introductions, Our Why and Some News (Aug 2021)
- [ ] EP 03 — State of the Map Africa (Jul 2021)
- [ ] EP 02 — Introducing the Digital Earth Africa Platform (Jun 2021)
- [ ] EP 01 — Using Geospatial Technology in Geohazard Mapping Saves Lives (May 2021)

## Content to sanity-check

- [ ] The new hero subtitle ("Geospatial developer building earth-observation tools & spatial
      data products · Podcast Host · GEM Erasmus+ Alumni") was drafted per your brief to lead with
      product/tool-building and make the podcast secondary — read it on the live home page and
      adjust the wording in `src/_data/site.json` (`subtitle`) if it doesn't sound like you.
  Currently showing at: [http://localhost:8080/](http://localhost:8080/) when running `npm run serve`.
- [ ] The three new in-development projects (Drone Airspace Restriction Map, Climate Risk Lens,
      Akwa Ibom Tourism Platform) have descriptions drafted from your brief — double check they
      match how far along each actually is before this goes live.

## Not done on purpose

- No redirect shim from the old `/about.html`-style URLs to the new `/about/`-style ones — see the
  "URLs vs. the old site" section in `README.md` for why.
- No dark-mode toggle — dark mode follows the OS `prefers-color-scheme` setting automatically,
  no switch in the UI. Add one later only if you actually want manual control.
