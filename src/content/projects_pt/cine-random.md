---
title: "Cine Random"
status: "completed"
featured: true
date: "2026-08"
summary: "Aplicação colaborativa para sortear filmes e votar em grupo, com salas sincronizadas por WebSockets."
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
links:
  demo: "https://cinerandomseven.vercel.app"
  repository: "https://github.com/LucasAlvesLougon/cine_random"
---

## 1. Problema

Escolher um filme em grupo exige reunir opções e conciliar preferências. Quando cada pessoa usa uma lista diferente, a decisão perde contexto e fica difícil acompanhar os votos.

## 2. Público-Alvo

Grupos que querem organizar opções de filmes, sortear uma escolha ou votar em uma sala compartilhada.

## 3. Solução

O **Cine Random** combina uma interface React com uma API FastAPI. A aplicação também pode ser instalada como PWA:

- **Sorteio com filtros:** Seleção de filmes por gênero, serviço de streaming, ano e nota.
- **Votação em grupo:** Participantes entram na mesma sala; WebSockets sincronizam os votos.
- **Convites:** Criação de cartões com filme e data da sessão.

## 4. Arquitetura e Decisões Técnicas

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

- **Separação de responsabilidades:** Rotas HTTP e WebSocket, serviços e repositórios organizam a entrada de dados, as regras de votação e a persistência.
- **Sincronização:** WebSockets atualizam o estado da sala para os participantes conectados.
- **PWA:** A interface inclui suporte à instalação e cache de arquivos estáticos.
- **Documentação:** O repositório inclui registros de decisões arquiteturais.

## 5. Desafios de implementação

- **Votos simultâneos:** A validação do consenso precisa considerar atualizações recebidas quase ao mesmo tempo na mesma sala.
- **Isolamento de testes:** As suítes usam fixtures e mocks para exercitar a API sem depender das respostas externas do TMDB e do Google OAuth.

## 6. Resultado

- A [aplicação publicada](https://cinerandomseven.vercel.app) permite testar o sorteio e a votação. O [repositório](https://github.com/LucasAlvesLougon/cine_random) reúne a implementação, os testes e a documentação da API.
