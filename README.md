# Lucas Lougon — Portfólio de Engenharia de Software

Portfólio minimalista, monocromático e de alta performance desenvolvido para apresentar estudos de caso de engenharia de software, arquitetura backend desacoplada, APIs escaláveis e sistemas em tempo real.

Construído com **Astro 5**, **React 19**, **TypeScript** e **Tailwind CSS**, utilizando uma arquitetura **Content-Driven** baseada em Markdown com validação estrita via **Zod**.

---

## 🛠️ Stack Tecnológica

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / Islands Architecture)
- **Componentes Interativos:** [React 19](https://react.dev/) (`@astrojs/react`)
- **Estilização:** [Tailwind CSS v3](https://tailwindcss.com/) com paleta monocromática estrita
- **Validação de Conteúdo:** [Zod](https://zod.dev/) via Astro Content Collections (`src/content.config.ts`)
- **Tipagem:** TypeScript 5+
- **Tipografia:** Space Grotesk, IBM Plex Sans & JetBrains Mono

---

## ⚡ Principais Funcionalidades

- **Zero-JS Baseline por Padrão:** Páginas estáticas ultra-otimizadas com carregamento instantâneo e pontuação máxima no Lighthouse.
- **Content Collections Tipadas:** Adicione novos projetos ou marcos de evolução apenas criando arquivos `.md` em `src/content/`.
- **Rotas Híbridas & SEO Profundo:**
  - `http://localhost:4321/`: Página principal completa com manifesto técnico, terminal REPL, métricas, projetos e contato.
  - `http://localhost:4321/projetos/[slug]`: Páginas canônicas individuais para cada estudo de caso com metadados OpenGraph, breadcrumbs e diagramas de arquitetura.
- **Alternador de Tema Minimalista:** Modo Escuro por padrão com alternância para Modo Claro, persistência em `localStorage` e script inline anti-FOUC.
- **Filtro Reativo por Status:** Filtragem em tempo real (`TODOS`, `CONCLUÍDOS`, `EM ANDAMENTO`, `PLANEJAMENTO`) ordenados rigorosamente pelo ciclo de vida do projeto.
- **Métricas de Validação:** Bloco lateral nos cards exibindo estado real de arquitetura, testes e documentação de cada sistema.
- **Modal de Currículo:** Visualizador acessível e download em 1 clique do currículo oficial em PDF (`/curriculo.pdf`).
- **Cópia de Email com Feedback:** Botão interativo para cópia rápida com feedback visual na área de transferência.

---

## 📁 Estrutura do Projeto

```text
web_portfolio/
├── public/
│   └── curriculo.pdf                 # Arquivo PDF oficial para download
├── src/
│   ├── components/
│   │   ├── AboutSection.astro        # Princípios de engenharia e especialidades
│   │   ├── ContactSection.astro      # Seção de contato e garantias
│   │   ├── CopyEmailButton.tsx       # Ilha React para cópia de email
│   │   ├── Footer.astro              # Rodapé com links e créditos
│   │   ├── Header.astro              # Barra de navegação e redes sociais
│   │   ├── Hero.astro                # Manifesto técnico e terminal REPL
│   │   ├── Metrics.astro             # 4 cards de rigor e métricas de produção
│   │   ├── ProjectsFilter.tsx        # Ilha React para filtro de status e cards
│   │   ├── ProjectsSection.astro     # Seção de projetos (consulta collections)
│   │   ├── ResumeModal.tsx           # Ilha React para modal de currículo
│   │   ├── ThemeToggle.tsx           # Ilha React para alternador de tema
│   │   └── Timeline.astro            # Linha do tempo de evolução
│   ├── content/
│   │   ├── milestones/               # Marcos da linha do tempo (.md)
│   │   └── projects/                 # Estudos de caso de projetos (.md)
│   ├── content.config.ts             # Schema e validação Zod das collections
│   ├── layouts/
│   │   └── Layout.astro              # Layout base HTML com meta tags e fontes
│   ├── pages/
│   │   ├── index.astro               # Página inicial (Home)
│   │   └── projetos/
│   │       └── [slug].astro          # Rota dinâmica para cada estudo de caso
│   └── styles/
│       └── global.css                # Estilos globais, grid e tipografia
├── astro.config.mjs                  # Configuração do Astro (React + Tailwind)
├── tailwind.config.mjs               # Design System monocromático e tokens
├── tsconfig.json                     # Configuração estrita do TypeScript
└── package.json                      # Dependências e scripts
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/)

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/LucasAlvesLougon/portfolio_dev.git
cd portfolio_dev
npm install
```

### 2. Iniciar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:4321/` no seu navegador.

### 3. Build para Produção
```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

### 4. Visualizar o Build de Produção
```bash
npm run preview
```

---

## ➕ Como Adicionar um Novo Projeto

Para incluir um novo estudo de caso ao portfólio, crie um arquivo Markdown em `src/content/projects/nome-do-projeto.md` com o seguinte formato:

```markdown
---
title: "Nome do Projeto"
status: "concluido" # "concluido" | "em-desenvolvimento" | "planejamento"
featured: true
date: "2026-10"
summary: "Resumo em 1 ou 2 frases da solução e do impacto do sistema."
technologies:
  - "Python 3.11"
  - "FastAPI"
  - "PostgreSQL"
skills:
  - "Clean Architecture"
  - "Testes Automatizados"
metrics:
  architecture: "Clean Arch / Layered"
  tests: "100% PASS"
  documentation: "ADRs & Swagger"
links:
  demo: "https://meu-projeto.vercel.app" # Opcional
  repository: "https://github.com/LucasAlvesLougon/meu-repositorio" # Opcional
---

## 1. Problema
Explicação do desafio enfrentado.

## 2. Solução & Arquitetura
Como o sistema foi projetado e construído.

## 3. Resultado
Evidências comprovadas e métricas de qualidade.
```

O projeto será automaticamente adicionado à listagem da Home e receberá uma rota canônica exclusiva em `/projetos/nome-do-projeto`.

---

## 🌐 Deploy na Vercel

O projeto foi configurado com `output: 'static'` e está 100% preparado para deploy contínuo na [Vercel](https://vercel.com/):

1. Conecte o repositório no dashboard da Vercel.
2. Framework Preset: **Astro**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

---

## 👨‍💻 Autor

**Lucas Mateus Alves Lougon**  
Desenvolvedor de Software Backend & Fullstack  
- Email: [lucas.mal2005@gmail.com](mailto:lucas.mal2005@gmail.com)
- LinkedIn: [linkedin.com/in/lucas-lougon](https://www.linkedin.com/in/lucas-lougon)
- GitHub: [github.com/LucasAlvesLougon](https://github.com/LucasAlvesLougon)
