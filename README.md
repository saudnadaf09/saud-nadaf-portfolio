# Saud Nadaf Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Dark, minimal, emerald accent.

## Run locally (VS Code)
1. Install Node.js 18.18+ (https://nodejs.org)
2. Open this folder in VS Code, then in the terminal:
   ```bash
   npm install
   cp .env.example .env.local   # Windows: copy .env.example .env.local
   npm run dev
   ```
3. Open http://localhost:3000

Check the production build before deploying: `npm run build && npm start`

## Update content
Everything is in `src/data/index.ts`: profile, skills, projects, experience, education, certificates, achievements.
- Add a screenshot to `public/projects/` and set `image` on the project.
- Add `repositoryUrl` / `demoUrl` only when the URL is real. Buttons appear automatically.
- Confirm each project's `status` and fill in `contribution`.
- Set `profile.availability` to "" to hide the availability badge.
- Replace `public/resume/Saud_Nadaf_Resume.pdf` when your resume changes.

## Contact form
Uses Resend from the server (`src/app/api/contact/route.ts`). Create a Resend account, verify a sender, then put these in `.env.local` (and in Vercel > Settings > Environment Variables):
`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `NEXT_PUBLIC_SITE_URL`.
Without them the form shows a "not configured, email me directly" message. It has a honeypot, server validation and a rate limit.

## Deploy
1. Push to GitHub (`.env.local` is git-ignored).
2. Import the repo on https://vercel.com, add the environment variables, deploy.
3. Set `NEXT_PUBLIC_SITE_URL` to your production URL and redeploy (used for sitemap and canonical links).

## Deploy on Render
1. Push the repo to GitHub.
2. Render dashboard > New > Web Service > connect the repo (or New > Blueprint, which reads `render.yaml`).
3. Build command `npm install && npm run build`, start command `npm start`, add env var `NODE_VERSION=20`.
4. Add the contact env vars. Set `NEXT_PUBLIC_SITE_URL` to your Render URL before the build (it is baked in at build time), redeploy if you change it.
Render free instances sleep when idle, so the first visit can take about 30 seconds.

## Before launch
Verify every claim, link and certificate (blueprint section 12). Publish only a sanitized summary of the website assessment.
Add an Open Graph image at `public/og.png` if you want a social preview.

## Changelog
- 1.1.0: portrait, project illustrations, animations, richer theme, Render config
- 1.0.0: initial release
