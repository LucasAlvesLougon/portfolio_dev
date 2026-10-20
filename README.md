# Software Engineering Portfolio

Software engineering portfolio featuring MuPonto, filterable projects, and individual case studies, including the local GovIntel AI MVP.

Built with **Astro 5**, **React 19**, **TypeScript**, and **Tailwind CSS**, using a **content-driven** architecture based on Markdown with strict **Zod** validation.

---

## 🛠️ Technology Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / Islands Architecture)
- **Interactive components:** [React 19](https://react.dev/) (`@astrojs/react`)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) and editorial dark-theme CSS
- **Content validation:** **Zod** through Astro Content Collections (`src/content.config.ts`)
- **Typing:** TypeScript 5+
- **Typography:** Georgia for editorial headings, Space Grotesk for project names, IBM Plex Sans for reading, and JetBrains Mono for code

---

## ⚡ Main Features

- **Static pages:** Astro generates the home page, project list, and case studies at build time; React powers the resume modal and email-copy control.
- **Typed content collections:** Add projects or progress milestones by creating `.md` files in `src/content/`.
- **Project routes:**
  - `http://localhost:4321/`: Lucas's introduction with his supplied portrait, featured MuPonto case study, projects, and contact information.
  - `http://localhost:4321/projetos/[slug]`: Individual case studies with Open Graph metadata and breadcrumb navigation.
- **Single dark theme:** Consistent editorial palette across the home page, case studies, and resume modal.
- **Project filter:** Filter by status: all, completed, in progress, and planning.
- **Context-rich projects:** Filterable list distinguishing published, completed, and planned projects, with access to case studies and repositories.
- **Resume modal:** Project summary with access to the PDF (`/curriculo.pdf`).
- **Email copy feedback:** Interactive button for quickly copying the email address with clipboard feedback.

---

## 📁 Project Structure

```text
web_portfolio/
├── public/
│   └── curriculo.pdf                 # Official resume PDF download
├── src/
│   ├── assets/
│   │   └── lucas-lougon.png          # Original portrait; Astro generates WebP at build time
│   ├── components/
│   │   ├── AboutSection.astro        # Engineering principles and technologies in use
│   │   ├── ContactSection.astro      # Contact section and links
│   │   ├── CopyEmailButton.tsx       # React island for copying email
│   │   ├── Footer.astro              # Footer links and credits
│   │   ├── Header.astro              # Navigation bar and social links
│   │   ├── Hero.astro                # Personal introduction and featured MuPonto case
│   │   ├── ProjectsFilter.astro      # Static project list with progressive filtering
│   │   ├── ProjectsSection.astro     # Project section backed by collections
│   │   ├── ResumeModal.tsx            # React island for the resume modal
│   │   └── Timeline.astro             # Progress timeline
│   ├── content/
│   │   ├── milestones/               # Timeline milestones (.md)
│   │   └── projects/                 # Project case studies (.md)
│   ├── content.config.ts             # Collection schema and Zod validation
│   ├── layouts/
│   │   └── Layout.astro              # Base HTML layout with meta tags and fonts
│   ├── pages/
│   │   ├── index.astro               # Home page
│   │   └── projetos/
│   │       └── [slug].astro          # Dynamic route for each case study
│   └── styles/
│       └── global.css                # Global styles, grid, and typography
├── astro.config.mjs                  # Astro configuration (React + Tailwind)
├── tailwind.config.mjs               # Tailwind utility configuration
├── tsconfig.json                     # Strict TypeScript configuration
└── package.json                      # Dependencies and scripts
```

---

## 🚀 Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or newer
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

To add a new case study, create a Markdown file at `src/content/projects/project-name.md` with this structure:

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

The project will be added automatically to the home page and receive a canonical route at `/projetos/project-name`.

---

## 🌐 Vercel Deployment

The project is configured with `output: 'static'` and can be deployed to [Vercel](https://vercel.com/):

1. Connect the repository in the Vercel dashboard.
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
