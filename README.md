# Personal Portfolio — React + TypeScript + Vite

## 1. Open in VS Code
Unzip this folder, then open **the entire `joy-portfolio` folder** using VS Code → File → Open Folder.

## 2. Run locally
Install Node.js LTS from https://nodejs.org/ if necessary. In VS Code → Terminal → New Terminal, run:

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173/). Stop with Ctrl+C.

## 3. Personalize
- **src/data.ts**: edit your name, bio, skills, experience, projects, publications, and URLs. Replace `YOUR_EMAIL`, `YOUR_USERNAME`, `YOUR_PROFILE`.
- **public/resume.pdf**: add your resume as a PDF with this exact filename. The Resume button will work after you add it.
- **index.html**: edit page title and SEO description.
- **src/style.css**: edit accent colors and design.
- **src/main.tsx**: change section layout and content components.
- Project `github` and `demo` URLs can be blank; links will only display when populated.

## 4. Publish with GitHub Pages (recommended: GitHub Actions)
1. Create a **public** GitHub repository named `YOUR_USERNAME.github.io` for a root website, OR any other repository name (e.g. `portfolio`) for a project site.
2. In the VS Code terminal, run:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

3. On GitHub, open the repository → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow at `.github/workflows/deploy.yml` will build and deploy your site after each push to `main`.
5. Open `https://YOUR_USERNAME.github.io/` for a root repository, or `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY/` for a project repository.
6. Subsequent updates: `git add . && git commit -m "Update portfolio" && git push`.

The Vite `base: './'` setting works for both root and project sites. GitHub Pages supports static hosting; this site does not need a server.

## Troubleshooting
- `npm: command not found`: install Node.js LTS and restart VS Code.
- Blank page: check GitHub Actions workflow, ensure Pages Source is GitHub Actions, and check browser console.
- Resume returns 404: place `resume.pdf` in the `public/` folder, commit, and push.
- `remote origin already exists`: use `git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git`.
