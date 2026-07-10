# iniobongbenson.com

Personal portfolio of Iniobong Benson, built with [Eleventy (11ty)](https://www.11ty.dev/) v3. Every
page is plain HTML rendered at build time — no client-side framework, no JS required to read the
site. Deployed to GitHub Pages via GitHub Actions.

This site used to be a client-side-rendered stack of near-empty HTML files populated by
`shared.js` in the browser. That's gone now — everything below is the new setup.

## Local preview

```bash
npm install        # first time only
npm run serve       # build + watch + serve at http://localhost:8080
```

`npm run build` produces a static build in `_site/` (gitignored) without starting a server —
that's what CI runs before deploying.

## How the site is put together

```
eleventy.config.js      Eleventy config: passthrough copy, collections, filters
src/
  _data/                 Global data, read into every page as plain variables
    site.json             Personal info, social links, podcast links, skills, education, experience
    projects.json          Every project (home page shows the ones with "featured": true)
    episodes.json          All podcast episodes
    publications.json      Papers / thesis / preprints
    nav.json                Top nav + mobile drawer links
  _includes/
    layouts/               base.njk (the <html> shell) and post.njk (blog post layout)
    partials/              Reusable chunks: nav, footer, SEO meta, project card, episode row, etc.
  content/blog/            One Markdown file per blog post — see "Add a blog post" below
  assets/                 CSS, JS, images — copied to the build output as-is
  *.njk                    One template per top-level page (index, about, projects, ...)
```

Eleventy reads `src/` as input and writes fully-rendered HTML to `_site/`. Nothing under `src/`
ships to the browser directly — assets are the exception, copied byte-for-byte.

## Adding things

**A project** — open `src/_data/projects.json`, copy an existing entry, fill in `title`, `status`,
`desc`, `tech` (array), optional `url` (opens in a new tab from the card) and `img` (path under
`/assets/img/`), and set `"featured": true` if it should also show on the home page (home shows
all featured projects, so keep that list short — 3 or 4).

**A blog post** — add one Markdown file to `src/content/blog/`, e.g. `my-new-post.md`:

```markdown
---
title: "Your Post Title"
date: 2026-03-01
tags: ["GIS", "Python"]
description: "One or two sentences — used as the excerpt and the meta description."
readTime: 6
---

Your content here. Plain HTML tags (`<h2>`, `<blockquote>`, `<ul>`, etc.) work directly in the
body, same as the old `POSTS` array in `shared.js` did.
```

The file's name becomes the URL slug (`/blog/my-new-post/`). It's picked up automatically by the
blog index, the home page's "From the Blog" section, the tag filter, and `/feed.xml` — nothing
else to wire up.

**A podcast episode** — add an entry to `src/_data/episodes.json` (newest at the top; `num` should
keep counting up).

**Publications** — add an entry to `src/_data/publications.json`.

**Site info, social links, CV/thesis links, skills strip, education, experience** — all in
`src/_data/site.json`.

**Styling** — one stylesheet, `src/assets/css/style.css`, using CSS custom properties defined at
the top (`--accent`, `--bg`, `--ink`, fonts). Change a token once, it updates everywhere.

## Design system

- Display font: **Fraunces** (headings, italic accents). Body font: **Inter**. Monospace accents
  (status pills, dates, nav labels): **JetBrains Mono**. Loaded from Google Fonts in
  `layouts/base.njk`.
- One accent color (`--accent`, a rust orange) used sparingly for links, tags, and hover states on
  a near-white background with near-black text. A dark theme is included via
  `prefers-color-scheme` at no extra cost — it isn't a toggle, it just follows the OS setting.
- Cards and tags use borders and spacing, not drop shadows.
- The only JavaScript on the site (`src/assets/js/main.js`) is progressive enhancement: the mobile
  nav drawer, the blog/project tag filters, and the blog post table-of-contents scroll-spy. Every
  page is fully readable and navigable with JS disabled — the filters just show everything
  unfiltered, and the TOC list doesn't build (but the headings are still in the page).

## SEO

- Per-page `<title>` / meta description come from front matter (`title`, `description` in each
  page's `.njk`/`.md` file) via `src/_includes/partials/seo.njk`, with sitewide fallbacks from
  `site.json`.
- Canonical URLs, Open Graph, and Twitter card tags are generated automatically from `site.url` +
  the current page path — no per-page boilerplate needed.
- JSON-LD: `Person`/`Researcher` + `WebSite` schema on the home page, `PodcastSeries` schema on
  `/podcast/`.
- `/sitemap.xml` and `/feed.xml` (RSS) are generated at build time from the same page/post data —
  nothing to update by hand when you add a post.
- `robots.txt` lives at `src/robots.txt` and is copied through as-is.

## URLs vs. the old site

The old site was flat `.html` files (`about.html`, `projects.html`, ...). The new site uses
"pretty" directory URLs (`/about/`, `/projects/`, ...), which is the Eleventy default and what
most modern static sites do. Search engines that already indexed the `.html` URLs will naturally
re-crawl and pick up the new ones via the sitemap; there's no traffic to preserve yet on a very new
personal site, so no redirect shim was added. If that ever matters, the fix is a one-line addition
per old path in `eleventyConfig.addPassthroughCopy` or a tiny `<meta http-equiv="refresh">` stub —
not done here to avoid adding files that immediately become dead weight.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `master`:

1. Checks out the repo, sets up Node 20, runs `npm ci`.
2. `npm run build` → Eleventy writes the site to `_site/`.
3. `actions/upload-pages-artifact` uploads `_site/` and `actions/deploy-pages` publishes it to
   GitHub Pages.

This requires GitHub Pages to be set to deploy from **GitHub Actions** (not "Deploy from a
branch") in the repo's Settings → Pages — a one-time setting to check after this branch is
merged. The `CNAME` file (`www.iniobongbenson.com`) lives at `src/CNAME` and is copied straight
into the build output, so the custom domain keeps working.

See `TODO.md` for what's still outstanding (images, CV PDF, a handful of podcast episode links).
