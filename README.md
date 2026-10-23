# Jeehyeon Lee · Data, Product & People

English-first portfolio with a Korean language option, light/dark themes, and an animated Orbit background.

**Website:** https://lucyjeehyeon.github.io/

## What is here

- 15 project case studies across data analysis, cloud analytics, research, development, and service planning.
- Native charts and tables, dashboards, original project PDFs, and a public résumé with the phone number removed.
- About, research, résumé, interests, working principles, and mindset sections.

This repository contains the website. Analysis code lives in the repositories linked from each project.

## Updating the website

The site uses static HTML, CSS, and JavaScript modules. No installation or build step is required.

- `content.js`: profile and original project descriptions.
- `sprint-*.js`: cloud, experimentation, segmentation, and forecasting cases.
- `evidence-*.js` and `case-studies.js`: case data, chart definitions, and reflections.
- `assets.js` and `assets/`: images, dashboards, and public PDF copies.
- `styles.css` and `case-visuals.css`: layout, typography, and themes.

GitHub Pages publishes the root of the `main` branch. Committed changes are deployed automatically. Hash-based routes, such as `#/projects/seoul-locker`, work without a server-side router.

For a local preview, serve this folder over HTTP; opening `index.html` directly as a file will not load the JavaScript modules reliably.

## Custom domain

A custom domain is not configured yet. Register and verify ownership before adding one. Update Pages settings and DNS following the [GitHub custom-domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), then update the canonical and Open Graph URLs in `index.html`.

Keep unredacted résumés, private source data, credentials, and temporary work files out of this public repository.
