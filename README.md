# Saud Nadaf | Cybersecurity & Technology Portfolio

<p align="center">
  <strong>A Personal Portfolio Showcasing Cybersecurity, Development, Research & Technical Projects</strong>
</p>

<p align="center">
  A modern, responsive and performance-focused personal portfolio built with Next.js, TypeScript and Tailwind CSS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-000000?logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployment-Render-46E3B7?logo=render&logoColor=black" alt="Render" />
  <img src="https://img.shields.io/badge/License-MIT-20B879" alt="MIT License" />
</p>

<p align="center">
  <a href="https://github.com/saudnadaf09">GitHub</a> •
  <a href="https://www.linkedin.com/in/saud-nadaf-41b015343/">LinkedIn</a> •
  <a href="mailto:saudnadaf854325@gmail.com">Email</a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Objectives](#objectives)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Website Sections](#website-sections)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Updating Website Content](#updating-website-content)
- [Project Management](#project-management)
- [Contact Form and Security](#contact-form-and-security)
- [Accessibility and SEO](#accessibility-and-seo)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Testing and Quality Assurance](#testing-and-quality-assurance)
- [Pre-launch Checklist](#pre-launch-checklist)
- [Future Roadmap](#future-roadmap)
- [License](#license)
- [Author](#author)

---

## Overview

**Saud Nadaf — Cybersecurity & Technology Portfolio** is a personal portfolio website designed to present my technical background, cybersecurity interests, projects, certifications, academic journey and professional activities in one place.

The website serves two primary purposes:

1. **Professional Presence:** Present my profile, technical skills, practical work and achievements to recruiters, internship providers and organizations.
2. **Technical Portfolio:** Showcase projects, development work, cybersecurity research, security assessments and technical learning.

The portfolio is designed around a premium dark interface with a restrained emerald-green accent, clean typography, subtle interactions and a responsive layout.

### Design Philosophy

- **Professional:** Clean, modern and recruiter-friendly presentation.
- **Authentic:** Every public claim should be supported by actual work or documentation.
- **Performance-focused:** Optimized images, lightweight components and efficient rendering.
- **Maintainable:** Structured, reusable components and centralized content management.
- **Accessible:** Semantic HTML, keyboard navigation and reduced-motion support.
- **Responsive:** Consistent experience across mobile, tablet and desktop devices.

---

## Objectives

The primary objectives of this portfolio are:

- Establish a professional online identity.
- Showcase practical cybersecurity and development projects.
- Present technical skills and relevant certifications.
- Document project contributions and technical experience.
- Demonstrate interest in VAPT, Web Security, API Security, Network Security and Digital Forensics.
- Provide recruiters with easy access to my resume and contact information.
- Maintain a centralized platform for future technical work and achievements.

---

## Features

### Core Features

- Modern, premium dark UI with emerald-green accents.
- Responsive homepage with professional introduction.
- Interactive navigation and smooth scrolling.
- About Me and technical expertise sections.
- Project showcase with category-based filtering.
- Dedicated project detail pages.
- GitHub repository and live demonstration links.
- Professional experience and training timeline.
- Education and academic background.
- Certifications and credentials section.
- Achievements, security assessments and research.
- Leadership and technical activities.
- Downloadable resume.
- Functional contact form.
- Professional social media integration.

### Advanced Features

- Dynamic project routes using `/projects/[slug]`.
- Keyboard-accessible project filters.
- Responsive mobile navigation.
- Subtle animations and transitions.
- Reduced-motion support.
- Contact form validation and spam protection.
- Server-side email delivery using Resend.
- SEO-friendly metadata and Open Graph previews.
- Automatically generated sitemap and robots.txt.
- Optimized images and typography.
- Custom 404 page.
- Production-ready deployment configuration.

---

## Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 |
| Architecture | App Router |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide Icons |
| Typography | Inter, Space Grotesk, JetBrains Mono |
| Fonts | Next.js Font Optimization |
| Contact Email | Resend API |
| Version Control | Git & GitHub |
| Deployment | Render / Vercel |
| Package Manager | npm |

### Development Principles

- Reusable React components.
- Type-safe content management.
- Server-side processing where appropriate.
- Minimal unnecessary dependencies.
- Consistent design tokens.
- Clean and maintainable code.
- Secure handling of environment variables.

---

## Website Sections

The portfolio is organized into the following sections:

| Section | Description |
|---|---|
| Home | Introduction, professional positioning and primary actions. |
| About | Academic background, interests and professional introduction. |
| Expertise | Cybersecurity, development and technical skills. |
| Projects | Practical projects with descriptions, screenshots and links. |
| Experience | Internship, training and professional activities. |
| Education | Academic qualifications and institutions. |
| Certifications | Verified certifications and credentials. |
| Achievements | Competitions, security assessments and achievements. |
| Research | Technical research and cybersecurity-related activities. |
| Leadership | Team leadership and organizational responsibilities. |
| Contact | Contact form, email and professional profiles. |

---

## Project Structure

```text
saud-nadaf-portfolio/
│
├── public/
│   ├── resume/
│   │   └── Saud_Nadaf_Resume.pdf
│   │
│   ├── projects/
│   │   ├── vaultx.png
│   │   ├── sectrace.png
│   │   └── project-images/
│   │
│   ├── certificates/
│   │
│   ├── saud.jpg
│   ├── og.png
│   └── icon.svg
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   │
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   │
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── index.ts
│   │
│   └── lib/
│       ├── validation.ts
│       └── utils.ts
│
├── .env.example
├── .gitignore
├── render.yaml
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Install the following tools:

- Node.js 18.18 or newer.
- npm.
- Git.
- Visual Studio Code or another code editor.

### 1. Clone the Repository

```bash
git clone https://github.com/saudnadaf09/saud-nadaf-portfolio.git
```

### 2. Navigate to the Project

```bash
cd saud-nadaf-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a local environment file:

```bash
cp .env.example .env.local
```

On Windows:

```powershell
copy .env.example .env.local
```

### 5. Start the Development Server

```bash
npm run dev
```

Open the following URL:

```text
http://localhost:3000
```

The development server supports hot reloading, allowing changes to appear automatically during development.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server. |
| `npm run build` | Generate production build. |
| `npm start` | Start production server. |
| `npm run lint` | Run lint checks, if configured. |

Before deployment, verify that the production build completes successfully.

```bash
npm run build
```

---

## Environment Variables

The project uses environment variables for configuration and secure integration with external services.

Create a `.env.example` file:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
NEXT_PUBLIC_SITE_URL=
```

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | API key for server-side email delivery. |
| `CONTACT_TO_EMAIL` | Email address receiving contact messages. |
| `CONTACT_FROM_EMAIL` | Verified sender address. |
| `NEXT_PUBLIC_SITE_URL` | Production website URL for SEO and metadata. |

**Security Notice:**

- Never commit `.env.local`.
- Never expose API keys in frontend code.
- Keep private credentials server-side.
- Use `.env.example` only for variable names and placeholders.

The website should remain usable without email configuration, with a clear email fallback.

---

## Updating Website Content

Most website content should be maintained centrally inside:

```text
src/data/index.ts
```

The content structure should include:

| Content | Data Object |
|---|---|
| Name, introduction and links | `profile` |
| Technical skills | `skills` |
| Projects | `projects` |
| Experience and training | `experience` |
| Education | `education` |
| Certifications | `certifications` |
| Achievements and research | `achievements` |
| Leadership activities | `leadership` |

### Adding a New Project

1. Add a new project object with a unique slug.
2. Write an accurate project description.
3. Add the actual technology stack.
4. Add screenshots inside `public/projects/`.
5. Include repository and demo URLs only when available.
6. Clearly identify the project status.
7. Describe personal contributions separately from team contributions.

### Project Status

Use only the following statuses:

- `Concept`
- `In Progress`
- `Completed`

Do not label a project as completed if important functionality is still under development.

### Updating Resume

Replace the existing file:

```text
public/resume/Saud_Nadaf_Resume.pdf
```

Maintain a consistent filename so the download link does not need to change.

---

## Project Management

The portfolio showcases the following technical projects:

### 1. VAULTX

**Zero-Trust Secure File Sharing & Access Management**

A security-focused file-sharing and access-management project.

- Authentication and access-control functionality.
- Secure file-sharing workflow.
- Security-focused application design.
- Repository: [VAULTX GitHub](https://github.com/saudnadaf09/VAULTX)
- Live Demo: [VAULTX](https://vaultx-secure-rqbd.onrender.com/)

### 2. SecTrace

**Unified Digital Forensics Automation & Scripting Framework**

A team-based digital forensics project focused on evidence management, integrity verification, investigation workflows and reporting.

- Case management.
- Evidence acquisition and preservation.
- SHA-256 integrity verification.
- Findings and timeline management.
- Audit history and reporting.
- Repository: [SecTrace GitHub](https://github.com/cyber-sudhir/SecTrace)
- Live Demo: [SecTrace](https://sec-trace-sage.vercel.app/)

### 3. Trace

**Digital Forensics & Evidence Analysis Platform**

A project focused on digital artifacts, logs, event correlation and evidence analysis.

### 4. NetPulse v1.0

**Python-Based SOC Monitoring Dashboard**

A security monitoring project involving network traffic visualization, packet analysis and heuristic alerting.

### 5. CareerGuard

**AI-Assisted Career Guidance Platform**

A Python/Flask-based application developed as part of an AI/ML learning project.

### 6. LSB Steganography Utility

**Least Significant Bit Steganography**

A utility for experimenting with data hiding and extraction using the Least Significant Bit technique.

### 7. EngiGrid

**Local Service Provider Platform**

A concept-stage platform intended to connect users with local service providers.

> Project descriptions and functionality must be reviewed against the actual repositories before publication. Planned features must not be presented as completed functionality.

---

## Contact Form and Security

The contact form is implemented through:

```text
src/app/api/contact/route.ts
```

### Form Functionality

- Name validation.
- Email validation.
- Message validation.
- Client-side and server-side checks.
- Loading, success and error states.
- Server-side email delivery through Resend.
- Spam protection.
- Rate limiting.

### Security Measures

- Server-side API key handling.
- Input validation and sanitization.
- HTML escaping in email content.
- Honeypot-based spam protection.
- Rate limiting.
- Safe error messages.
- HTTPS in production.

The proposed in-memory rate limit is three messages per IP address per ten minutes. This limit resets when the server restarts and is instance-specific.

For more reliable production rate limiting, a shared service such as Upstash Redis can be integrated.

Sensitive information, private assessment evidence and confidential credentials must never be exposed through the website.

---

## Accessibility and SEO

### Accessibility

The website should follow practical accessibility standards.

- Semantic HTML elements.
- Logical heading hierarchy.
- One primary H1 heading.
- Skip-to-content navigation.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Accessible form labels.
- Screen-reader-friendly feedback.
- Appropriate image alternative text.
- Sufficient color contrast.
- `prefers-reduced-motion` support.

### SEO

Search engine optimization includes:

- Unique page titles.
- Descriptive meta descriptions.
- Canonical URLs.
- Open Graph metadata.
- Social sharing preview image.
- Automatically generated sitemap.
- Robots.txt.
- Descriptive project URLs.
- Appropriate favicon.
- Search-friendly content structure.

---

## Responsive Design

The portfolio is designed to work across different screen sizes.

| Device | Design Requirements |
|---|---|
| Mobile | Single-column layout, compact navigation and touch-friendly controls. |
| Tablet | Balanced grids and readable content sections. |
| Desktop | Spacious layouts, complete navigation and project grids. |
| Wide Desktop | Controlled content width and consistent visual hierarchy. |

The website should be tested at widths starting from 320px.

No horizontal overflow, broken layouts or inaccessible controls should remain.

---

## Deployment

The project supports deployment through Render and Vercel.

### Option 1: Render

1. Push the project to GitHub.
2. Open [Render](https://render.com/).
3. Select **New → Web Service**.
4. Connect the GitHub repository.
5. Configure the build and start commands.

**Build Command:**

```bash
npm install && npm run build
```

**Start Command:**

```bash
npm start
```

**Environment Configuration:**

```text
NODE_VERSION=20
```

6. Add the required environment variables.
7. Deploy the application.
8. Test the production URL.

Alternatively, use Render Blueprint deployment through `render.yaml` if correctly configured.

**Note:** Render free instances may sleep when idle, depending on the current plan. The first request after inactivity may take longer.

### Option 2: Vercel

1. Open [Vercel](https://vercel.com/).
2. Import the GitHub repository.
3. Configure environment variables.
4. Verify the project settings.
5. Deploy the application.
6. Test all website functionality.

Vercel provides native support for Next.js deployment.

---

## Testing and Quality Assurance

Before production deployment, verify the following:

### Functional Testing

- Navigation works correctly.
- Project filters return correct results.
- Project detail routes load correctly.
- GitHub and live demo links work.
- Resume downloads correctly.
- Certificate links open correctly.
- Contact form submits successfully.
- Invalid form submissions are handled.
- Mobile navigation works correctly.

### Technical Testing

- Production build succeeds.
- No missing dependencies.
- No broken images.
- No console errors.
- No exposed environment variables.
- No broken internal routes.
- No unnecessary client-side errors.

### UI Testing

- Mobile layout.
- Tablet layout.
- Desktop layout.
- Typography consistency.
- Button interactions.
- Card spacing.
- Image positioning.
- Dark theme consistency.

---

## Pre-launch Checklist

- [ ] All personal information verified.
- [ ] Education and academic details accurate.
- [ ] Experience and training correctly labelled.
- [ ] Project descriptions reviewed.
- [ ] Individual contributions accurately presented.
- [ ] Project screenshots added.
- [ ] GitHub and live demo links tested.
- [ ] Resume PDF updated.
- [ ] Certificates verified.
- [ ] Contact form tested.
- [ ] No private information exposed.
- [ ] SEO metadata configured.
- [ ] Open Graph image configured.
- [ ] Responsive design tested.
- [ ] Accessibility reviewed.
- [ ] Production build successful.
- [ ] GitHub repository updated.
- [ ] Deployment verified.

---

## Future Roadmap

Potential improvements for future versions:

- [ ] Replace placeholders with authentic project screenshots.
- [ ] Add detailed technical case studies.
- [ ] Add verified certificate previews.
- [ ] Add project architecture diagrams.
- [ ] Improve project filtering and search.
- [ ] Add more detailed research documentation.
- [ ] Add an improved contact management workflow.
- [ ] Add privacy-conscious analytics if needed.
- [ ] Integrate a custom domain.
- [ ] Continuously update projects and professional achievements.

---

## License

The source code of this project is released under the **MIT License**.

Copyright (c) 2026 Saud Nadaf

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

**Personal content is not covered by the MIT License and remains all rights reserved by Saud Nadaf.**

This includes:

- Personal photographs and portrait images.
- Resume and personal information.
- Written content and biography.
- Project descriptions and documentation.
- Certificates and credentials.
- Personal branding assets and logos.

---

## Author

<p align="center">
  <strong>Saud Nadaf</strong><br/>
  CSE (Cybersecurity) Student<br/>
  Darbhanga College of Engineering, Bihar, India
</p>

<p align="center">
  <a href="https://github.com/saudnadaf09">GitHub</a> •
  <a href="https://www.linkedin.com/in/saud-nadaf-41b015343/">LinkedIn</a> •
  <a href="mailto:saudnadaf854325@gmail.com">Email</a>
</p>

<p align="center">
  <em>Build. Secure. Innovate.</em>
</p>

---

## Changelog

### Version 1.1.0

- Updated portfolio design and visual theme.
- Added project illustrations and portrait support.
- Improved responsive layouts.
- Added Render deployment configuration.
- Improved content organization and documentation.

### Version 1.0.0

- Initial portfolio release.
- Basic profile and project sections.
- Initial responsive dark theme.

---

<p align="center">
  <sub>Designed and maintained by Saud Nadaf · 2026</sub>
</p>
