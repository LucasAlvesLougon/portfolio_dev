# Memória do Projeto — Portfólio

Este documento é incremental e serve como diário de bordo para registrar o progresso, decisões arquiteturais (ADRs), marcos concluídos e próximos passos.

---

## 1. Status Geral do Projeto
* **Fase Atual:** Fase 2 — Arquitetura de Produção em Astro + React + TypeScript
* **Estado:** Totalmente Migrado para Astro 5 (SSG) / Content Collections com Zod / Ilhas React / Rotas Dinâmicas / Pronto para Vercel
* **Última Atualização:** 2026-09-08

---

## 2. Backlog de Tarefas

### A Fazer (Sprint Atual / Próximos Passos)
- [ ] Configuração de Analytics (ex: Plausible ou Vercel Analytics)
- [ ] Conectar ao repositório GitHub para Deploy Automático na Vercel

### Concluído
- [x] Criação da estratégia e documentação base (`AGENT.md`, `context.md`, `memory.md`)
- [x] Configuração da pasta de conteúdo (`src/content/projects/`, `src/content/milestones/`, `src/content/config.ts`)
- [x] Restauração das stacks originais (Cine Random, Gestão de Ponto, Gestão Financeira Pessoal)
- [x] Migração de HTML estático para **Astro 5 + React 19 + TypeScript**
- [x] Validação de coleções com esquemas estritos Zod
- [x] Alternador de tema Escuro / Claro (Dark mode por padrão, persistência em localStorage e anti-FOUC) com ícones minimalistas SVG
- [x] Ícones minimalistas SVG para GitHub, LinkedIn e Botão de Tema (Sol / Lua) no header e em toda a interface
- [x] Navegação direta e exclusiva para páginas completas de estudo de caso (`/projetos/[slug]`) com metadados OpenGraph, breadcrumbs e SEO profundo (modal lateral removido)
- [x] Linha do tempo de evolução populada dinamicamente a partir dos marcos
- [x] Filtro dinâmico por status com contadores atualizados automaticamente
- [x] Visualizador e download do currículo oficial (`curriculo.pdf`)
- [x] Criação de `README.md` completo e profissional com documentação de arquitetura, execução e content workflow
- [x] Build de produção 100% validado gerando páginas estáticas otimizadas

---

## 3. Registro de Decisões Técnicas (ADRs)

### [ADR-001] Estrutura Content-Driven via Markdown & Frontmatter
* **Data:** 2026-09-08
* **Contexto:** Necessidade de adicionar e atualizar projetos e marcos na linha do tempo apenas criando ou editando arquivos `.md` com metadados YAML.
* **Decisão:** Utilizar arquivos Markdown estruturados em `src/content/projects/` e `src/content/milestones/`.
* **Consequência:** Facilidade máxima de manutenção e desacoplamento do código visual.

### [ADR-002] Alternador de Tema Dark / Light com Dark Mode por Padrão
* **Data:** 2026-09-08
* **Contexto:** Manter a identidade visual técnica de alta precisão (Dark Mode `#08080a`) oferecendo conforto de leitura com opção de Modo Claro.
* **Decisão:** Implementação via classe `.dark` no `documentElement`, persistência em `localStorage.theme` e script inline de execução antecipada no `<head>`.
* **Consequência:** Zero flash de tela branca (anti-FOUC), transições suaves e contraste otimizado.

### [ADR-003] Migração para Astro 5 + React 19 + TypeScript & Rotas Híbridas
* **Data:** 2026-09-08
* **Contexto:** Evolução do portfólio para um padrão corporativo/profissional com geração estática ultrarrápida (SSG), validação de tipos de conteúdo via Zod em tempo de compilação, ilhas React para interatividade e rotas canônicas `/projetos/[slug]` para SEO e compartilhamento.
* **Decisão:** Adotar Astro com `@astrojs/react` e `@astrojs/tailwind`, gerando build estático (`output: 'static'`) pronto para Vercel.
* **Consequência:** Desempenho máximo (Zero-JS baseline nos conteúdos estáticos), tipagem estrita com TypeScript, suporte a SEO profundo e DX moderna.

---

## 4. Histórico de Sessões e Marcos Concluídos

### [2026-09-08] — Migração Completa para Astro 5 & React 19
* Estruturada base com Astro 5, TypeScript, Tailwind CSS e React 19.
* Content Collections configuradas com Zod em `src/content/config.ts`.
* Criada página principal `src/pages/index.astro` e rota dinâmica `src/pages/projetos/[slug].astro`.
* Componentes interativos implementados como ilhas React (`ThemeToggle`, `ProjectsFilter`, `CopyEmailButton`, `CaseStudyModal`, `ResumeModal`).
* Build estático validado e testado com sucesso.
