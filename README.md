# Joy Chang’s Portfolio

React, TypeScript, and Vite portfolio for https://joymchang.github.io/.

## Run locally

```bash
npm ci
npm run dev
```

## Edit the site

- `src/data.ts`: bio, experience, projects, publications, artwork, and profile links. Blank lines in `about` create separate paragraphs.
- `src/main.tsx`: sections and interactive components.
- `src/style.css`: colors, typography, and layout.
- `public/`: images and résumé PDF. The résumé filename must match `profile.resume` in `src/data.ts` (currently `Joy_Chang_10_14_26_Resume.pdf`).
- `index.html`: page title and description.

## Deploy to your existing GitHub repository

The remote is already configured as `https://github.com/joymchang/joymchang.github.io.git`.

1. Open the repository on GitHub, then **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Review your changes, commit, and push to `main`:

   ```bash
   git add .github/workflows/deploy.yml .gitignore README.md
   git commit -m "Prepare GitHub Pages deployment"
   git push origin main
   ```

   Include any other website files you have changed in your commit as well.

3. In the repository’s **Actions** tab, watch **Deploy Portfolio to GitHub Pages** complete.
4. Visit https://joymchang.github.io/.

Each push to `main` rebuilds and deploys the site. You can also run the workflow manually from the Actions tab.

The workflow installs locked dependencies with `npm ci`, runs the TypeScript and Vite build, and deploys `dist` using the `github-pages` environment. Build output and `node_modules` do not need to be committed.

Vite’s `base: '/'` is correct for this username repository. If you move the site to a project repository, change `base` in `vite.config.ts` to `'/REPOSITORY_NAME/'`.

## Check the production build locally

```bash
npm run build
npm run preview
```

If deployment fails, check the failed step under Actions and confirm that Pages uses GitHub Actions as its source. For missing images or PDFs, verify exact filename capitalization and that the files are committed under `public/`.
