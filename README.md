
<div align="center">

# Saud Nadaf | Cybersecurity & Technology Portfolio

A fast, accessible, data-driven personal portfolio for a CSE (Cybersecurity) student, built with Next.js, TypeScript and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render&logoColor=black)
![License](https://img.shields.io/badge/Code_license-MIT-20B879)

**Live Website:** [https://saudnadaf-dev.onrender.com](https://saudnadaf-dev.onrender.com)

</div>

---

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Updating the content](#updating-the-content)
- [Contact form and security](#contact-form-and-security)
- [Accessibility and SEO](#accessibility-and-seo)
- [Deployment](#deployment)
- [Pre-launch checklist](#pre-launch-checklist)
- [Roadmap](#roadmap)
- [License](#license)
- [Author](#author)

## Overview

This site presents my profile, projects, training, certifications and security work in one place for recruiters, internship reviewers and the technical community.

Design goals:

- **Credible:** Every public claim is backed by the resume, a repository, a certificate or a report.
- **Fast and light:** Server components, no heavy animation library, optimized images.
- **Easy to maintain:** All content lives in one typed data file, not inside page layouts.
- **Accessible:** Semantic HTML, keyboard navigation and reduced-motion support.

## Features

- Single-page homepage: Home, About, Expertise, Projects, Experience, Education, Certifications, Achievements & Research, Leadership and Contact.
- Dedicated project pages at `/projects/[slug]` with status, features, stack, contribution and links. Unknown slugs show a helpful 404.
- Project category filters that work with the keyboard and announce results to screen readers.
- Dark, restrained design with an emerald accent. Subtle entrance and scroll animations that turn off when the visitor prefers reduced motion.
- Downloadable resume.
- Contact form with client and server validation, spam protection, rate limiting and server-side email delivery.
- SEO basics: metadata, Open Graph, canonical URL, `sitemap.xml`, `robots.txt` and favicon.
- Responsive layout from 320px phones to wide desktops.

## Tech stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS with design tokens |
| Icons | Lucide |
| Fonts | Inter, Space Grotesk, JetBrains Mono (via `next/font`) |
| Email | Resend API, called only from the server |
| Hosting | Render (Vercel also works) |

## Project structure

```text
saud-nadaf-portfolio/
├── public/
│   ├── resume/                 # Downloadable resume PDF
│   ├── projects/               # Project images and illustrations
│   ├── certificates/           # Certificate files (add when verified)
│   ├── saud.jpg                # Hero portrait
│   └── icon.svg                # Favicon
├── src/
│   ├── app/
│   │   ├── page.tsx            # Homepage
│   │   ├── layout.tsx          # Fonts, metadata, skip link
│   │   ├── globals.css         # Theme, utilities, animations
│   │   ├── not-found.tsx       # Custom 404
│   │   ├── projects/[slug]/    # Project detail pages
│   │   ├── api/contact/        # Contact endpoint (server only)
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/             # Navbar, Section, Reveal, ProjectCard, ProjectsGrid, ContactForm
│   └── data/index.ts           # All site content
├── .env.example                # Environment variable template
├── render.yaml                 # Render blueprint
├── tailwind.config.ts
└── README.md
```

## Getting started

**Requirements:** Node.js 18.18 or newer and Git.

```bash
# 1. Clone
git clone https://github.com/saudnadaf09/saud-nadaf-portfolio.git

cd saud-nadaf-portfolio

# 2. Install dependencies
npm install

# 3. Create your local environment file
cp .env.example .env.local

# Windows:
copy .env.example .env.local

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create the production build and type-check |
| `npm start` | Run the production build |

Run `npm run build && npm start` before every deployment to catch errors early.

## Environment variables

Copy `.env.example` to `.env.local`. Never commit `.env.local`.

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | For contact form | Resend API key. Server only. |
| `CONTACT_TO_EMAIL` | For contact form | Inbox that receives messages |
| `CONTACT_FROM_EMAIL` | For contact form | Verified sender address in Resend |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Public site URL for sitemap, canonical and Open Graph links |

Without the Resend variables the site still works. The contact form shows a clear message asking visitors to email directly.

> `NEXT_PUBLIC_SITE_URL` is read at build time. If you change it, redeploy.

## Updating the content

Almost everything is edited in [`src/data/index.ts`](src/data/index.ts):

| To change | Edit |
| --- | --- |
| Name, intro, links, availability | `profile` |
| Skills | `skills` |
| Projects | `projects` |
| Experience and training | `experience` |
| Education | `education` |
| Certifications | `certifications` |
| Achievements and research | `achievements` |
| Leadership | `leadership` |

Adding a project:

1. Add an entry to `projects` with a unique `slug`.
2. Put the screenshot in `public/projects/` and set `image` and `imageAlt`.
3. Add `repositoryUrl` and `demoUrl` only when the URLs are real. The buttons appear automatically.
4. Set an honest `status` (`Concept`, `In Progress` or `Completed`) and describe only features that exist.

Replace the resume by overwriting `public/resume/Saud_Nadaf_Resume.pdf`.

### Content accuracy policy

- No invented metrics, skill percentages, bug counts or endorsements.
- Training, internships, roles and selections are labelled separately.
- A vulnerability report is described as *submitted*, never as accepted or fixed, unless confirmed.
- Only a sanitized summary of any security assessment is published. No exploitable details.

## Contact form and security

The form posts to `src/app/api/contact/route.ts`.

- **Validation:** Name, email and message are checked in the browser and again on the server.
- **Spam control:** Hidden honeypot field plus an in-memory rate limit (3 messages per IP per 10 minutes).
- **Output safety:** User input is HTML-escaped before it is placed in the email.
- **Secrets:** API keys are read only on the server and never sent to the browser.
- **Errors:** Visitors see a clear message, never internal error details.

The in-memory rate limit resets when the server restarts and is per instance. For stricter limits, use a shared store such as Upstash Redis.

## Accessibility and SEO

### Accessibility

- Semantic landmarks and one `h1`.
- Skip-to-content link and visible keyboard focus.
- Labelled form fields with live status messages.
- Mobile menu works with keyboard and closes with `Esc`.
- Animations respect `prefers-reduced-motion`.

### SEO

- Unique title and description per page.
- Open Graph metadata and canonical URL.
- Generated `sitemap.xml` and `robots.txt`.

## Deployment

### Render (recommended here)

1. Push this repository to GitHub.
2. In Render, choose **New > Web Service** and connect the repository. Alternatively choose **New > Blueprint**, which reads [`render.yaml`](render.yaml).
3. Use these settings:

   - **Build command:** `npm install && npm run build`
   - **Start command:** `npm start`
   - **Environment:** `NODE_VERSION=20`

4. Add the environment variables from the table above.
5. Set `NEXT_PUBLIC_SITE_URL` to `https://saudnadaf-dev.onrender.com` and redeploy.

Free Render instances sleep when idle, so the first visit after a quiet period can take about 30 seconds.

### Vercel (alternative)

Import this repository on [vercel.com](https://vercel.com), add the same environment variables and deploy.

## Pre-launch checklist

- [ ] Every claim, date and title matches the resume or supporting documents
- [ ] Project statuses and personal contributions are accurate
- [ ] All GitHub, demo, LinkedIn and certificate links open correctly
- [ ] Resume downloads and opens on desktop and mobile
- [ ] Test contact message is received, and error states behave correctly
- [ ] No secrets or sensitive assessment details in the repository
- [ ] `npm run build` passes with no errors
- [ ] Checked on mobile, tablet and desktop widths
- [ ] Keyboard-only navigation works
- [ ] Open Graph preview image added at `public/og.png` (optional)

## Roadmap

- [ ] Replace project illustrations with real screenshots
- [ ] Add certificate links or a certificate viewer
- [ ] Add Open Graph preview image
- [ ] Add a short write-up for each major project
- [ ] Publish a sanitized summary of the security assessment

## License

The source code is released under the [MIT License](LICENSE).

Personal content is **not** covered by the MIT License and remains all rights reserved. This includes the portrait photo, resume, written copy, project descriptions, certificates and logos. If you reuse this project as a template, replace all personal content with your own.

## Author

**Saud Nadaf**

CSE (Cybersecurity) student, Darbhanga College of Engineering

- GitHub: [@saudnadaf09](https://github.com/saudnadaf09)
- LinkedIn: [saud-nadaf](https://www.linkedin.com/in/saud-nadaf-41b015343/)
- Email: [saudnadaf854325@gmail.com](mailto:saudnadaf854325@gmail.com)
- Portfolio: [saudnadaf-dev.onrender.com](https://saudnadaf-dev.onrender.com)

## Changelog

- **1.1.0:** Portrait, project illustrations, animations, richer theme, Render configuration
- **1.0.0:** Initial release

---

## MIT License

MIT License

Copyright (c) 2026 Saud Nadaf

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

The MIT License above covers the source code only. Personal content (portrait
photo, resume, written copy, project descriptions, certificates and logos)
remains all rights reserved by Saud Nadaf.
