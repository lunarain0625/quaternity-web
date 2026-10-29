# quaternity-web

A JavaScript rebuild of [quaternity.com.au](https://quaternity.com.au/) (originally PHP), using Next.js (App Router) + Tailwind CSS.

## Getting started

Requires Node.js 20.9+.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Structure

```
src/
  app/            # routes (one folder per page, e.g. app/about/page.js)
    layout.js     # shared <html> shell: header, footer, metadata
    page.js       # homepage
    globals.css   # Tailwind + theme tokens
  components/     # shared UI (SiteHeader, SiteFooter, ...)
  config/site.js  # site name, nav links, contact details
public/           # static assets (images, logos) served from /
```

To add a page, create `src/app/<slug>/page.js` and add it to `nav` in `src/config/site.js`.
