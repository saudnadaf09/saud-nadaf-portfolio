# Saud Nadaf — Cybersecurity & Technology Portfolio

<p align="center">
  <a href="https://saudnadaf-dev.onrender.com">
    <img src="https://img.shields.io/badge/Portfolio-Live-10B981?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Portfolio">
  </a>
  <a href="https://github.com/saudnadaf09">
    <img src="https://img.shields.io/badge/GitHub-saudnadaf09-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.linkedin.com/in/saud-nadaf-41b015343/">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin" alt="LinkedIn">
  </a>
</p>

<p align="center">
  <strong>A personal portfolio showcasing cybersecurity interests, technical projects, academic background, certifications, and professional journey.</strong>
</p>

<p align="center">
  Built with Next.js, TypeScript, and Tailwind CSS.
  <br>
  Designed for recruiters, internship opportunities, collaborators, and the cybersecurity community.
</p>

---

## 🌐 Live Website

**Visit Portfolio:** https://saudnadaf-dev.onrender.com

The portfolio brings together my technical background, cybersecurity interests, development projects, training, certifications, and professional contact information in one place.

---

## 📌 About the Project

This repository contains the source code for my personal portfolio website.

The website is designed to provide a clear and structured overview of my academic journey, technical interests, hands-on projects, and professional development as a Computer Science and Engineering student specializing in Cybersecurity.

Rather than presenting an exaggerated list of skills or achievements, the portfolio focuses on genuine work, verifiable projects, practical learning, and relevant technical experience.

### Key Objectives

- Present my professional profile and technical background.
- Showcase cybersecurity and software development projects.
- Highlight relevant certifications and technical training.
- Provide access to project repositories and live demonstrations.
- Make my resume accessible to recruiters.
- Create a direct communication channel for professional opportunities.
- Maintain a clean, responsive, and accessible user experience.

---

## ✨ Features

| Feature | Description |
|---|---|
| Personal Introduction | Professional profile and introduction |
| About Section | Academic background and technical interests |
| Skills & Expertise | Organized technical skills and cybersecurity domains |
| Projects Showcase | Project descriptions, technologies, repositories, and demos |
| Project Details | Dedicated pages for individual projects |
| Experience & Training | Relevant technical training and professional activities |
| Education | Academic qualifications and background |
| Certifications | Technical certifications and credentials |
| Achievements | Relevant achievements and research activities |
| Leadership | Teamwork, coordination, and leadership contributions |
| Resume Download | Downloadable PDF resume |
| Contact Form | Direct communication through a contact interface |
| Responsive Design | Optimized layouts for mobile, tablet, and desktop |
| SEO Optimization | Metadata, sitemap, robots.txt, and Open Graph support |
| Accessibility | Semantic structure and keyboard-friendly navigation |

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide |
| Typography | Inter, Space Grotesk, JetBrains Mono |
| UI Architecture | React Components |
| Email Integration | Resend API |
| Deployment | Render |
| Version Control | Git & GitHub |

### Development Principles

- Component-based architecture.
- Type-safe content management.
- Reusable UI components.
- Server-side handling of sensitive operations.
- Responsive-first design.
- Performance-conscious implementation.
- Maintainable and structured codebase.

---

## 🗂️ Project Structure

```text
saud-nadaf-portfolio/
│
├── public/
│   ├── resume/
│   │   └── Saud_Nadaf_Resume.pdf
│   │
│   ├── projects/
│   │   └── Project images and screenshots
│   │
│   ├── certificates/
│   │   └── Verified certificate files
│   │
│   ├── saud.jpg
│   └── icon.svg
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── globals.css
│   │   ├── not-found.tsx
│   │   ├── projects/
│   │   │   └── [slug]/
│   │   ├── api/
│   │   │   └── contact/
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── Navbar
│   │   ├── Section
│   │   ├── Reveal
│   │   ├── ProjectCard
│   │   ├── ProjectsGrid
│   │   └── ContactForm
│   │
│   └── data/
│       └── index.ts
│
├── .env.example
├── render.yaml
├── tailwind.config.ts
├── package.json
├── README.md
└── LICENSE
```

*Note: This structure represents the intended project organization. Individual files and folders may vary with subsequent development.*

---

## 🚀 Getting Started

You can run this project locally by following the steps below.

### Prerequisites

Make sure you have installed:

- Node.js 18.18 or newer
- npm
- Git
- A code editor such as Visual Studio Code

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

Create a `.env.local` file in the project root.

```bash
cp .env.example .env.local
```

On Windows:

```powershell
Copy-Item .env.example .env.local
```

Configure the required environment variables as described below.

### 5. Start Development Server

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

### Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Generate production build |
| `npm start` | Start production server |

Before deployment, verify the production build:

```bash
npm run build
```

---

## ⚙️ Environment Variables

The project supports environment-based configuration.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public website URL for SEO and canonical metadata |
| `RESEND_API_KEY` | Server-side email delivery API key |
| `CONTACT_TO_EMAIL` | Destination email address for contact submissions |
| `CONTACT_FROM_EMAIL` | Verified sender email address |

### Example Configuration

```env
NEXT_PUBLIC_SITE_URL=https://saudnadaf-dev.onrender.com

RESEND_API_KEY=your_resend_api_key

CONTACT_TO_EMAIL=your_email@example.com

CONTACT_FROM_EMAIL=your_verified_sender@example.com
```

**Important:**

- Never commit `.env.local` to GitHub.
- Never expose API keys in client-side code.
- Keep sensitive credentials in Render's environment settings.
- Configure email-related variables only when using the Resend integration.

---

## 🔧 Content Management

The portfolio uses a centralized content structure to make profile updates easier.

Where applicable, update the relevant data in:

```text
src/data/index.ts
```

| Content | Update |
|---|---|
| Personal Profile | Name, introduction, contact details, social links |
| Skills | Technical skills and areas of interest |
| Projects | Project descriptions, status, stack, links |
| Education | Academic qualifications |
| Experience | Relevant experience and training |
| Certifications | Verified certifications |
| Achievements | Relevant accomplishments |
| Leadership | Team and coordination activities |

### Adding a New Project

1. Create a project entry with a unique slug.
2. Add relevant screenshots to `public/projects/`.
3. Include a concise project description.
4. Mention the actual technologies used.
5. Add GitHub and live demo links if available.
6. Specify the correct project status.
7. Describe your actual contribution.

Project status should accurately reflect the development stage:

- Concept
- In Progress
- Completed

---

## 🔐 Contact Form & Security

The portfolio includes a contact interface for professional communication.

The contact API is organized under:

```text
src/app/api/contact/route.ts
```

The documented implementation includes:

- Client-side and server-side input validation.
- Honeypot-based spam protection.
- Basic rate limiting.
- Server-side email delivery using Resend.
- Safe handling of user-submitted content.
- Controlled error responses.
- Protection of server-side API credentials.

### Security Considerations

The in-memory rate limiter is instance-dependent and resets when the server restarts.

For production environments requiring stronger rate limiting, a shared storage solution such as Redis can be considered.

The portfolio does not publish confidential assessment details, private information, or exploitable vulnerability information.

---

## ♿ Accessibility & SEO

### Accessibility

The website is designed with accessibility considerations, including:

- Semantic HTML structure.
- Proper heading hierarchy.
- Keyboard navigation support.
- Visible focus indicators.
- Accessible form labels.
- Screen-reader-friendly status messages.
- Reduced-motion preferences.

### SEO

The project includes the following SEO capabilities:

- Page metadata and descriptions.
- Open Graph metadata.
- Canonical URL support.
- Dynamic sitemap generation.
- Robots configuration.
- Structured page organization.

---

## 🚀 Deployment

The website is deployed using **Render**.

### Live Deployment

**Production URL:**

https://saudnadaf-dev.onrender.com

### Deployment Configuration

| Setting | Value |
|---|---|
| Platform | Render |
| Service Type | Web Service |
| Runtime | Node.js |
| Repository | GitHub |
| Branch | `main` |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| Instance | Free |

### Deployment Process

1. Push the latest code to GitHub.
2. Connect the repository to Render.
3. Select the Node.js runtime.
4. Configure build and start commands.
5. Add the required environment variables.
6. Deploy the web service.
7. Verify the production website.

Render can automatically deploy new commits when automatic deployments are enabled.

**Hosting Note:** Free Render web services can spin down after periods of inactivity. The first request after inactivity may take additional time.

---

## 📋 Pre-Launch & Maintenance Checklist

- [x] Portfolio deployed successfully.
- [x] Public Render URL available.
- [ ] Verify all project repository links.
- [ ] Verify live project demonstrations.
- [ ] Check resume download functionality.
- [ ] Verify contact form email delivery.
- [ ] Test mobile and tablet layouts.
- [ ] Review SEO metadata and social previews.
- [ ] Check keyboard navigation and accessibility.
- [ ] Run a final production build.
- [ ] Review public content for accuracy.
- [ ] Keep certificates and resume updated.

---

## 🗺️ Future Improvements

The following improvements may be introduced as the portfolio evolves:

- [ ] Dedicated project case studies.
- [ ] Improved project screenshots and visual previews.
- [ ] Verified certificate viewing and links.
- [ ] Enhanced project filtering.
- [ ] Additional performance optimizations.
- [ ] Improved social sharing previews.
- [ ] Further accessibility improvements.
- [ ] Custom domain integration.

---

## 📜 License

This repository's source code is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

**Personal Content Notice:**

The MIT License applies to the source code only. Personal materials remain the property of their respective rights holders, including:

- Personal photographs.
- Resume and personal information.
- Original written content.
- Certificates and credentials.
- Personal branding assets.

Permission should be obtained before reusing personal materials.

---

## 👨‍💻 Author

**Saud Nadaf**

Computer Science & Engineering Student  
Cybersecurity Specialization  
Darbhanga College of Engineering, Bihar

### Professional Interests

- Web & Application Security
- Vulnerability Assessment and Penetration Testing (VAPT)
- Network Security
- Security Operations and Blue Team
- Digital Forensics
- Vulnerability Research
- Security Automation

### Connect With Me

| Platform | Link |
|---|---|
| Portfolio | [saudnadaf-dev.onrender.com](https://saudnadaf-dev.onrender.com) |
| GitHub | [@saudnadaf09](https://github.com/saudnadaf09) |
| LinkedIn | [Saud Nadaf](https://www.linkedin.com/in/saud-nadaf-41b015343/) |
| Email | [Contact Me](mailto:saudnadaf854325@gmail.com) |

---

<p align="center">
  <strong>Built with purpose, continuous learning, and a focus on practical cybersecurity.</strong>
  <br>
  <sub>© 2026 Saud Nadaf. All rights reserved for personal content.</sub>
</p>
