# Contexto do Projeto — Portfólio

---

## 1. Visão Geral e Propósito
O portfólio é o **hub central** do ecossistema de projetos do desenvolvedor. Mais do que uma lista de tecnologias, ele funciona como uma coleção de **estudos de caso estruturados** que documentam a evolução técnica, a capacidade de entrega de produtos reais e as decisões de arquitetura para recrutadores e pares técnicos.

---

## 2. Público-Alvo e Necessidades
* **Recrutadores e Tech Leads:** Precisam entender rapidamente quem é o desenvolvedor, suas competências reais comprovadas, acessar demonstrações funcionais, código-fonte no GitHub e meios diretos de contato.
* **Visitantes Técnicos:** Interessados em ler estudos de caso detalhados sobre como os problemas foram solucionados.

---

## 3. Escopo do MVP

### O que INCLUI no MVP:
* **Página Inicial:** Apresentação clara, competências centrais, links para currículo, perfis e contato rápido.
* **Projetos em Destaque:** Cards com título, resumo, tags de tecnologias/skills, screenshot, link de demo, repositório e link para estudo de caso.
* **Linha do Tempo de Evolução:** Marcos de aprendizado, primeiros deploys e desafios superados.
* **Página Individual de Estudo de Caso:** Renderização a partir de Markdown/JSON com padrão fixo (Problema, Público, Solução, Funcionalidades, Decisões Técnicas, Dificuldades, Aprendizados, Resultado, Próximos Passos).
* **Motor Content-Driven:** Adição de conteúdo via arquivos locais (`content/projects/*.md`, `content/milestones/*.md`, `about.md`).
* **Design Responsivo & Acessível:** Funcional e fluido em mobile e desktop.
* **SEO e Analytics Básicos:** Metatags, OpenGraph e rastreamento simples de visitas.

### O que NÃO INCLUI no MVP:
* Painel administrativo / CMS headless.
* Autenticação e sistema de login.
* Sistema de comentários ou curtidas.
* Blog completo para artigos avulsos.
* Internacionalização (múltiplos idiomas) no primeiro momento.

---

## 4. Estrutura de Conteúdo Esperada

```text
content/
  projects/
    gestao-de-ponto.md
    gestao-financeira.md
  milestones/
    primeiro-deploy.md
    primeira-api.md
  about.md
```

### Formato dos Metadados (Frontmatter) de Projetos:
```yaml
title: Gestão de Ponto
slug: gestao-de-ponto
status: em-desenvolvimento
featured: true
date: 2026-10
summary: Sistema simples para registrar e acompanhar jornadas de trabalho.
technologies:
  - React
  - Node.js
  - PostgreSQL
skills:
  - autenticação
  - CRUD
  - relatórios
  - deploy
links:
  demo: ""
  repository: ""
```

---

## 5. Critérios de Sucesso do MVP
* Adicionar um novo projeto ou estudo de caso apenas criando um arquivo `.md` sem alterar código.
* Tempo de carregamento rápido em dispositivos móveis.
* Recrutador consegue acessar o contato e os projetos em menos de 3 cliques.
