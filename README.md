# Software Engineering Portfolio

Software engineering portfolio featuring MuPonto, filterable projects, and individual case studies, including the local GovIntel AI MVP.

Built with **Astro 7**, **React 19**, **TypeScript**, and **Tailwind CSS**, using a **content-driven** architecture based on Markdown with strict **Zod** validation.

---

## 🛠️ Technology Stack

- **Framework:** [Astro 7](https://astro.build/) (Static Site Generation / Islands Architecture)
- **Interactive components:** [React 19](https://react.dev/) (`@astrojs/react`)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) and editorial dark-theme CSS
- **Content validation:** **Zod** through Astro Content Collections (`src/content.config.ts`)
- **Internationalization (i18n):** Bilingual support (English default, Português BR switch)
- **Typing:** TypeScript 5+
- **Typography:** Georgia for editorial headings, Space Grotesk for project names, IBM Plex Sans for reading, and JetBrains Mono for code

---

## ⚡ Main Features

- **Bilingual Internationalization (EN / PT-BR):** Portfolio starts in English by default, with an elegant language toggle button (EN / PT-BR) in the desktop header and mobile menu to switch seamlessly between English and Português BR.
- **Static pages:** Astro generates the home page, project list, and case studies at build time in both English (`/`) and Portuguese (`/pt/`); React powers the resume modal, mobile menu, and email-copy control.
- **Typed content collections:** Add projects or progress milestones by creating `.md` files in `src/content/`.
- **Project routes:**
  - `http://localhost:4321/`: Lucas's introduction with his supplied portrait, featured MuPonto case study, projects, and contact information in English.
  - `http://localhost:4321/pt/`: Full Portuguese version with translated case studies and timeline.
  - `http://localhost:4321/projetos/[slug]`: Individual English case studies with Open Graph metadata and breadcrumb navigation.
  - `http://localhost:4321/pt/projetos/[slug]`: Individual Portuguese case studies with Open Graph metadata and breadcrumb navigation.
- **Single dark theme:** Consistent editorial palette across the home page, case studies, and resume modal.
- **Project filter:** Filter by status: all, completed, in progress, and planning.
- **Context-rich projects:** Filterable list distinguishing published, completed, and planned projects, with access to case studies and repositories.
- **Resume modal:** Project summary with access to language-specific PDF downloads (`/curriculo.pdf` in English, `/curriculo-pt.pdf` in Portuguese).
- **Email copy feedback:** Interactive button for quickly copying the email address with clipboard feedback.

---

## 📁 Project Structure

```text
web_portfolio/
├── public/
│   ├── curriculo.pdf                 # Official English resume PDF download
│   └── curriculo-pt.pdf              # Official Portuguese resume PDF download
├── src/
│   ├── assets/
│   │   └── lucas-lougon.png          # Original portrait; Astro generates WebP at build time
│   ├── components/
│   │   ├── AboutSection.astro        # Engineering principles and technologies in use
│   │   ├── ContactSection.astro      # Contact section and links
│   │   ├── CopyEmailButton.tsx       # React island for copying email
│   │   ├── Footer.astro              # Footer links and credits
│   │   ├── Header.astro              # Navigation bar, social links, and language toggle
│   │   ├── Hero.astro                # Personal introduction and featured MuPonto case
│   │   ├── LanguageToggle.astro      # Bilingual switch toggle (EN / PT-BR)
│   │   ├── MobileMenu.tsx            # React island for mobile navigation and language switch
│   │   ├── ProjectsFilter.astro      # Static project list with progressive filtering
│   │   ├── ProjectsSection.astro     # Project section backed by collections
│   │   ├── ResumeModal.tsx           # React island for the resume modal
│   │   └── Timeline.astro            # Progress timeline
│   ├── content/
│   │   ├── milestones/               # Timeline milestones in English (.md)
│   │   ├── milestones_pt/            # Timeline milestones in Portuguese (.md)
│   │   ├── projects/                 # Project case studies in English (.md)
│   │   └── projects_pt/              # Project case studies in Portuguese (.md)
│   ├── content.config.ts             # Collection schema and Zod validation
│   ├── i18n/
│   │   └── translations.ts           # Type-safe bilingual translations
│   ├── layouts/
│   │   └── Layout.astro              # Base HTML layout with meta tags and fonts
│   ├── pages/
│   │   ├── index.astro               # Home page (English default)
│   │   ├── pt/
│   │   │   ├── index.astro           # Home page (Português BR)
│   │   │   └── projetos/
│   │   │       └── [slug].astro      # Portuguese case studies
│   │   └── projetos/
│   │       └── [slug].astro          # English case studies
│   └── styles/
│       ├── editorial-home.css        # Editorial home styles
│       ├── editorial-system.css      # Editorial layout & design token styles
│       └── global.css                # Global styles, grid, and typography
├── astro.config.mjs                  # Astro configuration (React + Tailwind)
├── tailwind.config.mjs               # Tailwind utility configuration
├── tsconfig.json                     # Strict TypeScript configuration
└── package.json                      # Dependencies and scripts
```

---

## 🚀 Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) version 22.22 or newer
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/LucasAlvesLougon/portfolio_dev.git
cd portfolio_dev
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open `http://localhost:4321/` in your browser.

### 3. Build for production

```bash
npm run build
```

Optimized static files are generated in the `dist/` directory.

### 4. Preview the production build

```bash
npm run preview
```

---

## ➕ Add a New Project

To add a new case study, create a Markdown file in `src/content/projects/project-name.md` (English) and `src/content/projects_pt/project-name.md` (Portuguese) with this structure:

```markdown
---
title: "Project name"
status: "completed" # "completed" | "in-development" | "planning"
featured: true
date: "2026-10"
summary: "One- or two-sentence summary of the solution and system impact."
technologies:
  - "Python 3.11"
  - "FastAPI"
  - "PostgreSQL"
skills:
  - "Clean Architecture"
  - "Automated testing"
links:
  demo: "https://my-project.vercel.app" # Optional
  repository: "https://github.com/LucasAlvesLougon/my-repository" # Optional
---

## 1. Problem
Explanation of the challenge.

## 2. Solution & Architecture
How the system was designed and built.

## 3. Result
Links to the delivery and available evidence.
```

The project will be added automatically to the home page and receive canonical routes at `/projetos/project-name` and `/pt/projetos/project-name`.

---

## 🌐 Vercel Deployment

The project is configured with `output: 'static'` and can be deployed to [Vercel](https://vercel.com/) or any static hosting (Hostinger, Cloudflare Pages, Netlify, etc.):

1. Connect the repository in the hosting dashboard.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

---

## 👨‍💻 Author

**Lucas Mateus Alves Lougon**
Backend & Full-Stack Software Developer
- Email: [lucas.mal2005@gmail.com](mailto:lucas.mal2005@gmail.com)
- LinkedIn: [linkedin.com/in/lucas-lougon](https://www.linkedin.com/in/lucas-lougon)
- GitHub: [github.com/LucasAlvesLougon](https://github.com/LucasAlvesLougon)
