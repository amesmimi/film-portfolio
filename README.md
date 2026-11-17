# Amy Martin — photographs on film

A storybook-style portfolio built with [Astro](https://astro.build), deployed to GitHub Pages by GitHub Actions.

## Run it locally

```sh
npm install
npm run dev        # http://localhost:4321/film-portfolio/
npm run build      # type-check + build into dist/
npm run preview    # serve the built site
```

## Adding a chapter (one roll / one series)

Each chapter is a folder in `src/content/chapters/`:

```
src/content/chapters/03-where-the-wildflowers-grow/
  index.md      ← details + the opening story
  cover.jpg
  01.jpg
  02.jpg …
```

In `index.md`, fill in the details at the top and list the photos:

```yaml
cover: ./cover.jpg
coverAlt: "Foxgloves leaning over a stone wall"
photos:
  - src: ./01.jpg
    alt: "Describe what's in the photo"
    title: "Puddles by the gate"
    orientation: landscape   # landscape | portrait | square
    frame: plate             # optional: arch | oval | round | stamp | polaroid | snapshot | plate | album
```

- Photos appear in the order listed. The 1st is the big plate, the 2nd and 3rd are a pair, and the rest go into a grid. Every photo also appears in "The whole roll" film strip.
- Until a chapter has photos, it shows tinted placeholders.
- Put full-size scans in the folder. Astro makes resized WebP versions at build time.
- `featured: true` puts that chapter on the home page's open-book spread.
- `draft: true` hides a chapter from the live site. It still shows in `npm run dev`.
- Text in `[brackets]` is a placeholder to replace.

Site-wide text (name, bio, links, contact form) lives in `src/site.config.ts`.

## Contact postcard

GitHub Pages can't receive form posts, so letters go through [Formspree](https://formspree.io) (free tier):
create a form there, then paste its endpoint into `formEndpoint` in `src/site.config.ts`.

## Deploying

1. Create a public repo named **`film-portfolio`** on GitHub (`amesmimi/film-portfolio`) and push this folder's `main` branch to it.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
3. Every push to `main` builds and publishes to **https://amesmimi.github.io/film-portfolio/**.
   Pull requests build too, but don't publish.

If you use a different repo name, change `base` in `astro.config.mjs`. Use `/` for an `amesmimi.github.io` repo.
