---
title: "GovIntel AI — Inteligência Documental com RAG"
status: "em-desenvolvimento"
featured: true
date: "2026-09"
summary: "MVP multi-tenant que transforma editais públicos em busca semântica e respostas fundamentadas por citações verificáveis."
technologies:
  - "Python 3.12"
  - "Django 5.2 / DRF"
  - "Next.js 15"
  - "React 19 / TypeScript"
  - "PostgreSQL 16 / pgvector"
  - "Celery / RabbitMQ"
  - "Redis"
  - "Docker Compose"
  - "OpenCode Zen"
  - "sentence-transformers / PyTorch CPU"
  - "GitHub Actions"
  - "Vitest / Playwright"
skills:
  - "Arquitetura Multi-Tenant"
  - "Pipeline Assíncrono com Outbox"
  - "Busca Semântica e RAG"
  - "Grounding e Citações Auditáveis"
  - "OCR e Processamento de PDFs"
  - "Segurança Fail-Closed"
metrics:
  architecture: "Event-driven / Multi-tenant"
  tests: "210/210 PASS (Backend + Frontend)"
  documentation: "E2E, CI/CD & Threat Model"
links:
  repository: "https://github.com/LucasAlvesLougon/gov_intel_ai"
---

## 1. Problema

Editais públicos concentram prazos, requisitos, critérios e valores em PDFs extensos. A leitura manual torna difícil localizar rapidamente uma informação, comparar documentos e comprovar de onde veio uma resposta.

## 2. Público-Alvo

Empresas que precisam analisar editais e documentos públicos com mais velocidade, contexto e rastreabilidade, sem depender de buscas literais ou de respostas de IA sem fonte verificável.

## 3. Solução

O **GovIntel AI** é um MVP demonstrável que permite criar uma conta empresarial, enviar editais privados em PDF, acompanhar o processamento assíncrono, pesquisar o conteúdo por significado e conversar com cada documento recebendo respostas fundamentadas em citações verificáveis — com documento, página e trecho literal.

O fluxo completo é executado localmente com Docker Compose:

```text
empresa/usuário
      ↓
cadastro e autenticação
      ↓
upload privado de PDF com idempotência
      ↓
outbox transacional → RabbitMQ → worker Celery
      ↓
extração por página + OCR opcional + chunking
      ↓
embeddings locais de 768 dimensões
      ↓
PostgreSQL/pgvector com índice HNSW
      ↓
busca semântica com cache Redis
      ↓
chat RAG com grounding e citações verificáveis
```

## 4. Arquitetura

```text
Browser / Next.js 15
          ↓
Django REST API
   ├── JWT + tenant derivado do usuário
   ├── PostgreSQL 16 + pgvector
   ├── Redis para cache e throttling
   └── Outbox transacional → RabbitMQ
                                  ↓
                         Celery Worker
                    ├── extração e OCR
                    ├── chunking por página
                    └── embeddings locais E5
```

O pipeline público de processamento expõe os estados `PENDING → PROCESSING → PROCESSED`, com saída `FAILED` para falhas controladas. O chat só é liberado quando o edital está processado e recebe apenas os chunks relevantes recuperados para a consulta.

## 5. Funcionalidades Entregues

- **Identidade e multi-tenancy:** cadastro atômico de empresa e usuário proprietário, login por email e senha, access token JWT em memória, refresh token protegido com rotação, blacklist e detecção de reuse.
- **Upload e processamento documental:** upload multipart com `Idempotency-Key`, validação de MIME type, assinatura `%PDF-`, tamanho e metadados, armazenamento privado e retorno assíncrono com acompanhamento por polling.
- **Pipeline resiliente:** outbox transacional, RabbitMQ, Celery, retry limitado, dead-letter queue, extração por página, OCR opcional com Tesseract em português e chunking com preservação de tabelas.
- **Busca semântica:** embeddings locais com `multilingual-e5-base`, vetores normalizados de 768 dimensões, índice HNSW no pgvector, reranking lexical complementar e cache Redis versionado por tenant e revisão dos dados.
- **Chat RAG auditável:** recuperação de contexto antes da geração, contexto delimitado como dado não confiável, respostas estruturadas e validação de cada citação contra documento, chunk, página e trecho persistidos.
- **Interface de produto:** landing page, autenticação, dashboard de editais, busca semântica e chat com painel de evidências em Next.js 15, React 19 e TypeScript.

## 6. Decisões Técnicas

- **Processamento assíncrono com outbox:** o upload não mantém uma requisição aberta enquanto o PDF é lido. O edital e o evento de processamento são persistidos na mesma transação; o relay publica no broker apenas depois do commit.
- **Idempotência e entrega at-least-once:** uploads repetidos com a mesma chave e mensagens duplicadas do RabbitMQ são absorvidos por identificadores estáveis, retries limitados e processamento seguro por `jobId`.
- **Embeddings com identidade completa:** cada chunk registra provider, modelo, revisão, dimensão, normalização, fingerprint do preprocessing e geração do pipeline. Trocas de modelo exigem reindexação explícita.
- **Grounding verificável:** o modelo pode sugerir uma resposta, mas não é a autoridade da fonte. O backend confirma se cada citação corresponde ao chunk correto, ao tenant correto e à página informada.
- **Fail-closed:** quando faltam evidências, o provider não está disponível ou a configuração vetorial é incompatível, o sistema prefere declarar a limitação a publicar uma resposta potencialmente falsa.

## 7. Segurança e Privacidade

- Tokens, senhas, chaves, prompts completos, PDFs e respostas integrais não são registrados em logs.
- Access token não é salvo em `localStorage` ou `sessionStorage`; o refresh token usa cookie protegido conforme o ambiente.
- CSRF, CORS, validação de origem e throttling são aplicados nos fluxos sensíveis.
- Querysets, cache, editais, conversas e tarefas são isolados por tenant derivado do usuário autenticado.
- PDFs permanecem fora da árvore pública e o texto do documento é tratado como dado não confiável.
- Nenhum texto do modelo executa shell, URL, ferramenta ou HTML arbitrário.

## 8. Evidências e Validação

- **Backend:** 167 testes passando em 18/09/2026, com Ruff e `manage.py check` sem erros.
- **Frontend:** 43 testes passando, além de lint, typecheck e build.
- **Integração:** PostgreSQL/pgvector, Redis e RabbitMQ executados com health checks.
- **Pipeline:** reindexação local de 29 editais e 55 chunks concluída em 88,88 segundos.
- **E2E:** fluxo cadastro → upload → processamento → busca → chat validado com Playwright.
- **Segurança:** auditoria de dependências registrada sem vulnerabilidades conhecidas no conjunto avaliado.

O teste ponta a ponta utiliza um provider de IA mockado para ser determinístico e não enviar a fixture PDF para um serviço externo. Isso valida contratos, estados, isolamento, citações e interface sem substituir um smoke test real do provider de produção.

## 9. Evidências Visuais

### Landing page

![Landing page do GovIntel AI](/projetos/govintel-ai/home.png)

### Dashboard de editais

![Dashboard de upload e listagem de editais](/projetos/govintel-ai/dashboard-empty.png)

### Busca semântica

![Tela de busca semântica](/projetos/govintel-ai/search-empty.png)

### Chat com painel de fontes

![Tela de chat com painel de fontes](/projetos/govintel-ai/chat-empty.png)

### Login

![Tela de login do GovIntel AI](/projetos/govintel-ai/login.png)

## 10. Limites Atuais e Próximos Passos

- Substituir o volume local de uploads por storage privado compatível com S3.
- Adicionar caller periódico do outbox e reconciliador de jobs em produção.
- Configurar issuer e audience dedicados para JWT.
- Executar smoke test real do OpenCode com medição de custo, latência e qualidade.
- Concluir a revisão humana em viewport móvel e no fluxo autenticado com dados.
- Executar deploy público somente após revisão e autorização explícitas.
