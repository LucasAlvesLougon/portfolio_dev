---
title: "Cine Random"
status: "completed"
featured: true
date: "2026-08"
summary: "Collaborative application for drawing movies and voting as a group, with rooms synchronized through WebSockets."
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
  - "Decoupled architecture"
  - "Real-time communication (WebSockets)"
  - "Clean Architecture (Routers, Services, Repositories)"
  - "OAuth 2.0 (Google Identity)"
  - "Automated testing (54+ unit and integration tests)"
  - "TMDB API integration"
links:
  demo: "https://cinerandomseven.vercel.app"
  repository: "https://github.com/LucasAlvesLougon/cine_random"
---

## 1. Problem

Choosing a movie as a group requires gathering options and reconciling preferences. When everyone uses a different list, the decision loses context and votes become difficult to follow.

## 2. Target audience

Groups that want to organize movie options, draw a choice, or vote in a shared room.

## 3. Solution

**Cine Random** combines a React interface with a FastAPI. The application can also be installed as a PWA:

- **Filtered draw:** Select movies by genre, streaming service, year, and rating.
- **Group voting:** Participants join the same room; WebSockets synchronize votes.
- **Invitations:** Create cards with the movie and session date.

## 4. Architecture and technical decisions

```mermaid
flowchart LR
   A([Início])
   B["1. Frontend<br/>React 19 + PWA"]
   C["Criar ou entrar<br/>na sala via REST"]
   D["2. Backend API<br/>FastAPI"]
   E["Validar operação<br/>Router → Service"]
   F[("PostgreSQL<br/>sala e estado")]
   G["Frontend recebe<br/>o estado da sala"]
   H["Abrir conexão<br/>WebSocket"]
   I["Room Manager"]
   J{"Evento do usuário?"}

   A --> B --> C --> D --> E --> F --> G --> H --> I --> J

   J -- "Desenho" --> K["Transmitir traço"]
   K --> L["Atualizar todos<br/>os participantes"]
   L --> I

   J -- "Voto" --> M["Voting Service<br/>validar voto"]
   M --> N[("PostgreSQL<br/>votos")]
   N --> O["Transmitir resultado<br/>parcial"]
   O --> L

   J -- "Encerrar votação" --> P["Consolidar votos"]
   P --> Q[("PostgreSQL<br/>resultado final")]
   Q --> R["Transmitir resultado<br/>final"]
   R --> S([Fim da rodada])
```

- **Separation of responsibilities:** HTTP and WebSocket routes, services, and repositories organize data input, voting rules, and persistence.
- **Synchronization:** WebSockets update the room state for connected participants.
- **PWA:** The interface supports installation and static-file caching.
- **Documentation:** The repository includes architectural decision records.

## 5. Implementation challenges

- **Simultaneous votes:** Consensus validation must account for updates received almost simultaneously in the same room.
- **Test isolation:** The suites use fixtures and mocks to exercise the API without depending on external TMDB and Google OAuth responses.

## 6. Result

- The [published application](https://cinerandomseven.vercel.app) lets users test drawing and voting. The [repository](https://github.com/LucasAlvesLougon/cine_random) contains the implementation, tests, and API documentation.
