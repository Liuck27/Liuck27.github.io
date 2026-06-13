# Liuck27.github.io

Personal portfolio site for Luca Secchieri. A single page, statically built
with Vite, React, and TypeScript, styled with Tailwind CSS, and deployed to
GitHub Pages.

## Tech stack

- Vite + React (react-ts template)
- TypeScript (strict, no `any`)
- Tailwind CSS (v4, via the `@tailwindcss/vite` plugin)
- GitHub Actions for build and deploy

## Run locally

Requires Node 20 or newer.

```bash
npm install   # install dependencies
npm run dev   # start the dev server (printed local URL, usually http://localhost:5173)
```

Other scripts:

```bash
npm run build     # type-check (tsc -b) and produce a production build in dist/
npm run preview   # serve the production build locally
```

## Project structure

- `src/data.ts` holds all site content as typed structures (profile, skills,
  projects, background). Update copy there; the section components render from it.
- `src/components/` contains one component per section plus shared helpers
  (`Nav`, `Hero`, `About`, `Skills`, `Projects`, `Background`, `Contact`,
  `Footer`, `Reveal`, `SectionHeading`, `icons`).
- The page is a single route with smooth-scroll anchor navigation, so there
  are no client-side routes and no GitHub Pages refresh (404) issues.

## Deployment

Deployment is automated by `.github/workflows/deploy.yml`:

1. On every push to `main` (or a manual run from the Actions tab), the workflow
   installs dependencies, runs `npm run build`, and uploads the `dist/` folder
   as a Pages artifact.
2. The official Pages actions (`configure-pages`, `upload-pages-artifact`,
   `deploy-pages`) publish that artifact to the `github-pages` environment.

This is a GitHub Pages user site served from the domain root
(`https://liuck27.github.io`), so the Vite `base` stays at its default of `/`.

### One-time setup

In the repository, go to Settings > Pages and set the build and deployment
Source to "GitHub Actions". This cannot be done from code and only needs to be
done once.
