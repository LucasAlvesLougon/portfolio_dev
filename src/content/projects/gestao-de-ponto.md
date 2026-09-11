---
title: "MuPonto — Gestão de Ponto Eletrônico"
status: "concluido"
featured: true
date: "2026-09"
summary: "Plataforma full-stack em produção para controle de ponto eletrônico, conformidade CLT, cálculo de saldo em tempo real e CI/CD automatizado."
technologies:
  - "React 19"
  - "TypeScript"
  - "PHP 8.3"
  - "Laravel 12"
  - "MySQL"
  - "Tailwind CSS"
  - "TanStack Query"
  - "GitHub Actions (CI/CD)"
  - "Vitest / PHPUnit"
skills:
  - "Arquitetura REST Desacoplada"
  - "Autenticação Híbrida (Google OAuth & Sanctum)"
  - "Regras de Negócio e Cálculos CLT"
  - "Auditoria e Isolamento Multi-Tenant"
  - "CI/CD & Deploy Automatizado"
  - "Testes Automatizados (59 Testes)"
metrics:
  architecture: "REST Modular (Laravel 12 / React 19)"
  tests: "59/59 PASS (Vitest & PHPUnit)"
  documentation: "Swagger & ADRs Documentados"
links:
  demo: "https://muponto.com"
  repository: "https://github.com/LucasAlvesLougon/gestao_ponto_web"
---

## 1. Problema

Profissionais autônomos, prestadores de serviços (PJ) e pequenas equipes necessitam controlar suas jornadas de trabalho e intervalos com precisão. Softwares tradicionais de controle de ponto corporativo (RH) costumam ser lentos, sobrecarregados de burocracias, com interfaces defasadas e sem transparência imediata sobre o saldo de horas diário e mensal.

## 2. Público-Alvo

Desenvolvedores PJ, freelancers, consultores independentes e equipes enxutas que precisam de um sistema ágil, confiável e em conformidade com as diretrizes da legislação brasileira (CLT / Portaria 671) para registrar entradas, intervalos e saídas em poucos cliques.

## 3. Solução

O **MuPonto** é uma aplicação web completa, responsiva e em produção ([muponto.com](https://muponto.com)), desenvolvida com arquitetura desacoplada e foco em usabilidade, precisão e alta disponibilidade:

- **Bater Ponto em 1 Clique:** Registro instantâneo de entradas, pausas de almoço/descanso e saídas com carimbo de tempo rigoroso.
- **Cálculo de Saldo em Tempo Real:** Motor de cálculo que processa horas trabalhadas, horas extras, débitos e tolerâncias da CLT (tolerância legal de 5 a 10 minutos).
- **Histórico Auditável e Ajustes Justificados:** Tabela completa com filtros mensais e suporte a correções manuais que exigem justificativa e mantêm trilha de auditoria completa (`edited_at`, `edited_by`).
- **Exportação de Relatórios:** Geração instantânea de relatórios nos formatos CSV e PDF formatado para envio à contabilidade.
- **Autenticação Dupla:** Login via Google OAuth 2.0 integrado com fluxo seguro de sessão e fallback para E-mail e Senha protegidos por tokens Sanctum.

## 4. Arquitetura e Decisões Técnicas

| Nível | Componente | Tecnologias Chave | Responsabilidade / Arquitetura | Testes |
| :---: | :--- | :--- | :--- | :---: |
| 1 | **Frontend SPA** | React 19, TypeScript, Vite, Tailwind CSS | Interface reativa, updates otimistas, timers e validações | 34/34 (Vitest) |
| ↕️ | *Comunicação / API* | *HTTPS REST & JSON* | *Endpoints autenticados via Bearer Token (Sanctum)* | — |
| 2 | **Backend API** | PHP 8.3, Laravel 12 (LTS) | Regras CLT, Form Requests, Services e Controllers | 25/25 (PHPUnit) |
| ↕️ | *Persistência* | *Eloquent ORM & Migrations* | *Modelagem relacional com integridade referencial* | — |
| 3 | **Database** | MySQL (Hostinger Cloud) | Armazenamento transacional com isolamento de usuário | — |
| 4 | **CI/CD & DevOps** | GitHub Actions & Hostinger FTP | Pipelines de teste, build e deploy automático contínuo | 100% Green |

<br>

- **Arquitetura Desacoplada e Multi-Tenant:** Frontend e backend hospedados de forma independente (`muponto.com` e `api.muponto.com`), garantindo isolamento total por usuário através de escopos no Eloquent e tokens Laravel Sanctum.
- **Tratamento Temporal Rigoroso:** Todas as datas e horas são gravadas em UTC no banco de dados e convertidas dinamicamente no fuso horário do usuário (America/Sao_Paulo), evitando inconsistências de horário de verão e fuso regional.
- **Atualizações Otimistas na UI:** Interações críticas como logout (0ms) e alteração de estado utilizam estratégias otimistas no TanStack Query com invalidação precisa de cache.
- **Integração e Entrega Contínua (CI/CD):** Workflows dedicados no GitHub Actions validam as suítes de testes a cada push e executam deploys automáticos via FTP diretamente para o ambiente de produção na Hostinger.

## 5. Repositórios e Links em Produção

- **Aplicação no Ar (Produção):** [https://muponto.com](https://muponto.com)
- **API em Produção (Health Check):** [https://api.muponto.com/up](https://api.muponto.com/up)
- **Repositório Frontend:** [LucasAlvesLougon/gestao_ponto_web](https://github.com/LucasAlvesLougon/gestao_ponto_web)
- **Repositório Backend:** [LucasAlvesLougon/gestao_ponto_api](https://github.com/LucasAlvesLougon/gestao_ponto_api)

## 6. Dificuldades Superadas & Aprendizados

- **Lógica Trabalhista e Jornadas Quebradas:** Implementação de algoritmo no `PunchCalculationService` capaz de calcular saldos mesmo com múltiplos intervalos e tolerâncias da CLT sem gerar saldos negativos indevidos.
- **Resolução de Deploy FTP em Shared Hosting:** Ajuste de caminhos no GitHub Actions (`SamKirkland/FTP-Deploy-Action`) para contornar o chroot da Hostinger, garantindo publicação contínua sem depender de acesso SSH manual.
- **Segurança de Autenticação Híbrida:** Unificação dos fluxos de Google OAuth 2.0 e credenciais locais no Laravel Sanctum mantendo integridade dos dados e sessão segura.

## 7. Resultado

- **59 testes automatizados com 100% de aprovação** (34 testes no frontend com Vitest + 25 testes com 76 asserções no backend com PHPUnit).
- Sistema full-stack em produção, estável, responsivo e com pipeline de integração e entrega contínua (CI/CD) ativo.
