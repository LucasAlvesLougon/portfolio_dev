---
title: "GovIntel AI — Inteligência documental"
status: "em-desenvolvimento"
featured: true
date: "2026-09"
summary: "MVP local para analisar editais: processamento assíncrono de PDFs, busca semântica e respostas com citações verificáveis."
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
  - "Arquitetura multi-tenant"
  - "Processamento assíncrono com outbox"
  - "Busca semântica e RAG"
  - "Citações verificáveis"
links:
  repository: "https://github.com/LucasAlvesLougon/gov_intel_ai"
---

## O problema

Editais públicos reúnem prazos, exigências e critérios em PDFs extensos. Encontrar uma informação é apenas parte do trabalho: quem usa a resposta também precisa conferir o documento, a página e o trecho que a sustentam.

## O que o MVP faz

O GovIntel AI permite cadastrar uma empresa, enviar editais privados, acompanhar o processamento dos arquivos, pesquisar o conteúdo por significado e fazer perguntas sobre um documento. As respostas do chat são acompanhadas de citações vinculadas ao texto persistido. O fluxo é executado localmente com Docker Compose; o repositório documenta a configuração e os limites atuais.

## A decisão de arquitetura

O upload não espera pela leitura e indexação do PDF. A API Django registra o edital e um evento de processamento na mesma transação. Um relay publica o evento no RabbitMQ, e um worker Celery extrai o texto por página, aplica OCR quando necessário, divide o conteúdo em trechos e gera embeddings locais. O PostgreSQL com pgvector mantém os vetores usados na busca; Redis apoia cache e limitação de requisições.

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

A outbox evita publicar uma tarefa para um edital que não foi salvo. Identificadores estáveis e uma chave de idempotência tratam uploads repetidos e entregas duplicadas da fila.

## Respostas que podem ser conferidas

O chat recebe apenas trechos recuperados para a consulta. Antes de entregar uma resposta, o backend valida as citações contra o documento, o trecho e a página persistidos, dentro do tenant do usuário. Quando a evidência é insuficiente ou o provedor não está disponível, o fluxo declara a limitação em vez de apresentar uma resposta sem base verificável.

O isolamento por empresa também é aplicado às consultas, ao cache, aos arquivos e às tarefas. Os PDFs permanecem fora da árvore pública da aplicação.

## Interface do protótipo

As imagens abaixo mostram a interface local. A tela de conversa está em estado vazio; ela apresenta a área reservada para as fontes, sem simular uma resposta gerada.

![Tela de acesso do GovIntel AI no ambiente local](/projetos/govintel-ai/login.png)

![Tela de conversa vazia do GovIntel AI, com painel de fontes](/projetos/govintel-ai/chat-empty.png)

## Evidências e estágio atual

O estudo de caso registrado em setembro de 2026 informa **167 testes de backend e 43 de frontend passando em 18/09/2026**. O fluxo de ponta a ponta foi exercitado com Playwright e um provedor de IA simulado para manter o teste determinístico. Essa validação não substitui um teste real de latência, custo e qualidade do provedor.

O projeto segue como MVP local. Entre os próximos passos documentados estão armazenamento privado adequado à hospedagem, operação periódica da outbox e revisão do fluxo autenticado em dispositivos móveis. A implementação e as instruções para executá-la estão no [repositório do GovIntel AI](https://github.com/LucasAlvesLougon/gov_intel_ai).
