---
title: "GovIntel AI - Document intelligence"
status: "in-development"
featured: true
date: "2026-09"
summary: "Local MVP for analyzing public tenders: asynchronous PDF processing, semantic search, and answers with verifiable citations."
technologies:
  - "Python 3.12"
  - "Django 5.2 / DRF"
  - "Next.js 15"
  - "React 19 / TypeScript"
  - "PostgreSQL 16 / pgvector"
  - "Celery / RabbitMQ"
  - "Redis"
  - "Docker Compose"
skills:
  - "Multi-tenant architecture"
  - "Asynchronous processing with an outbox"
  - "Semantic search and RAG"
  - "Verifiable citations"
links:
  repository: "https://github.com/LucasAlvesLougon/gov_intel_ai"
---

## The problem

Public tenders bring deadlines, requirements, and criteria together in lengthy PDFs. Finding an answer is only part of the work: the person using it also needs to verify the document, page, and excerpt that support it.

## What the MVP does

GovIntel AI lets users register a company, upload private tenders, track file processing, search content by meaning, and ask questions about a document. Chat answers include citations linked to persisted text. The workflow runs locally with Docker Compose; the repository documents its setup and current limitations.

## The architectural decision

The upload does not wait for the PDF to be read and indexed. The Django API records the tender and a processing event in the same transaction. A relay publishes the event to RabbitMQ, and a Celery worker extracts text by page, applies OCR when needed, splits the content into excerpts, and generates local embeddings. PostgreSQL with pgvector stores the vectors used for search; Redis supports caching and rate limiting.

```text
Next.js → API Django → PostgreSQL + outbox
                           ↓
                       RabbitMQ
                           ↓
                    worker Celery
                           ↓
               PDF → trechos → embeddings
                           ↓
                   pgvector → busca → chat
```

The outbox prevents publishing a task for a tender that was not saved. Stable identifiers and an idempotency key handle repeated uploads and duplicate queue deliveries.

## Answers that can be verified

The chat receives only excerpts retrieved for the query. Before returning an answer, the backend validates citations against the persisted document, excerpt, and page within the user's tenant. When evidence is insufficient or the provider is unavailable, the workflow states the limitation instead of presenting an answer without verifiable support.

Company isolation also applies to queries, cache, files, and tasks. PDFs remain outside the application's public tree.

## Prototype interface

The images below show the local interface. The conversation screen is empty; it shows the area reserved for sources without simulating a generated answer.

![GovIntel AI sign-in screen in the local environment](/projetos/govintel-ai/login.png)

![GovIntel AI empty conversation screen with sources panel](/projetos/govintel-ai/chat-empty.png)

## Evidence and current stage

The case study recorded in September 2026 reports **167 backend tests and 43 frontend tests passing on September 18, 2026**. The end-to-end flow was exercised with Playwright and a simulated AI provider to keep the test deterministic. This validation does not replace a real-world test of provider latency, cost, and quality.

The project remains a local MVP. Documented next steps include private storage suitable for hosting, periodic outbox operation, and a review of the authenticated flow on mobile devices. The implementation and setup instructions are in the [GovIntel AI repository](https://github.com/LucasAlvesLougon/gov_intel_ai).
