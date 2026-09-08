---
title: "Cine Random"
status: "concluido"
featured: true
date: "2026-08"
summary: "Plataforma colaborativa e PWA com sorteios dinâmicos, WebSockets em tempo real e votação estilo 'Match da Galera' para grupos de cinema."
technologies:
  - "Python 3.11"
  - "FastAPI"
  - "PostgreSQL"
  - "SQLAlchemy 2.0"
  - "React 19"
  - "WebSockets"
  - "PWA"
  - "Pytest / Vitest"
skills:
  - "Arquitetura Desacoplada"
  - "Comunicação em Tempo Real (WebSockets)"
  - "Clean Architecture (Routers, Services, Repositories)"
  - "OAuth 2.0 (Google Identity)"
  - "Testes Automatizados (54+ Testes Unitários e Integração)"
  - "Integração com TMDB API"
metrics:
  architecture: "Clean Arch / Layered"
  tests: "54/54 PASS (100%)"
  documentation: "ADRs & Swagger Prontos"
links:
  demo: "https://cinerandomseven.vercel.app"
  repository: "https://github.com/LucasAlvesLougon/cine_random"
---

## 1. Problema

Escolher um filme para assistir em grupo costuma gerar indecisão prolongada, listas espalhadas no WhatsApp e dificuldade para conciliar os gostos de múltiplos participantes em tempo real.

## 2. Público-Alvo

Grupos de amigos, casais e entusiastas de cinema que desejam um modo interativo, gamificado e rápido de organizar listas, sortear e votar no próximo filme a ser assistido.

## 3. Solução

O **Cine Random** foi desenvolvido como uma aplicação completa e instalável (PWA) composta por um backend robusto em **FastAPI** e frontend reativo em **React 19**. A plataforma combina:

- **Sorteador Inteligente:** Algoritmo ponderado por filtros (gênero, streaming, ano de lançamento, notas).
- **Match da Galera em Tempo Real:** Votação estilo *Tinder* sincronizada via **WebSockets**, onde os participantes entram na mesma sala e deslizam filmes até encontrar um consenso unânime.
- **Gerador de Convites:** Criação de cartões de convite com detalhes do filme e data da sessão.

## 4. Arquitetura e Decisões Técnicas

```text
┌────────────────────────────────────────────────────────┐
│                   Frontend (React 19 + PWA)            │
│  - Vite + CSS Modules + Framer Motion                  │
│  - 31/31 Testes Automatizados com Vitest               │
└──────────────────────────┬─────────────────────────────┘
                           │ (HTTPS REST / WSS WebSockets)
┌──────────────────────────▼─────────────────────────────┐
│                 Backend API (FastAPI + Python 3.11)    │
│  - Clean Architecture (Routers → Services → Repos)     │
│  - Gerenciador de WebSockets com reconexão resiliente  │
│  - Cache em Memória & Rate Limiting                    │
│  - 23/23 Testes com Pytest                             │
└──────────────────────────┬─────────────────────────────┘
                           │ (SQLAlchemy 2.0)
┌──────────────────────────▼─────────────────────────────┐
│               PostgreSQL Database                      │
└────────────────────────────────────────────────────────┘
```

- **Clean Architecture & Inversão de Dependência:** Isolamento estrito entre controladores HTTP/WebSocket, regras de negócio e camada de acesso a dados.
- **WebSockets Resilientes:** Suporte a reconexão automática e sincronização instantânea de estado de salas entre múltiplos clientes.
- **PWA (Progressive Web App):** Instalável no celular e desktop com suporte a cache offline de assets.
- **Documentação com ADRs:** Todas as decisões arquiteturais fundamentais foram registradas em documentos formais de decisão (Architecture Decision Records).

## 5. Dificuldades Superadas & Aprendizados

- **Sincronização Concorrente de Votos:** Garantir que votos simultâneos em salas WebSocket não causassem condições de corrida (*race conditions*) na validação de match unânime.
- **Isolamento de Testes:** Criação de fixtures eficientes no Pytest com banco de dados isolado e mocks controlados para chamadas da API do TMDB e Google OAuth.

## 6. Resultado

- Mais de 54 testes automatizados cobrindo fluxos críticos (Pytest + Vitest).
- Sistema completo com suporte a PWA instalável, documentação Swagger interativa e arquitetura desacoplada pronta para escala.
