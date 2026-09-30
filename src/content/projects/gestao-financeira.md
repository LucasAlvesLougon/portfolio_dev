---
title: "Gestão Financeira Pessoal"
status: "planejamento"
featured: true
date: "2026-10"
summary: "Projeto em planejamento para registrar receitas e despesas e consultar os lançamentos por categoria."
technologies:
  - "TypeScript"
  - "React"
  - "Node.js / Express"
  - "PostgreSQL"
  - "Tailwind CSS"
skills:
  - "UX Fast-Input"
  - "Precisão Monetária"
  - "Visualização de Dados (Charts)"
  - "Agrupamento & Filtros Dinâmicos"
  - "Segurança & Privacidade"
links:
  repository: "https://github.com/LucasAlvesLougon/gestao_financeira"
---

## 1. Problema

Registrar pequenas despesas ao longo do dia pode exigir mais etapas do que o necessário. O projeto parte dessa fricção para organizar um fluxo de lançamento simples.

## 2. Público-Alvo

Pessoas que desejam registrar receitas e despesas e consultar seus lançamentos por categoria.

## 3. Solução

A proposta reúne um formulário de lançamento e uma visão de receitas, despesas e categorias. Esta página descreve o escopo planejado; as funcionalidades ainda não são apresentadas como entrega concluída.

## 4. Funcionalidades Principais

- **Lançamentos:** Formulário de receita ou despesa com categoria e carteira.
- **Categorias:** Organização dos lançamentos para consulta.
- **Visão mensal:** Resumo de saldo e despesas por categoria.
- **Despesas recorrentes:** Registro de custos fixos.
- **Exportação:** Histórico em CSV.

## 5. Decisões propostas

- **Valores em centavos:** A persistência é planejada com inteiros para evitar arredondamentos de ponto flutuante em valores monetários.
- **Dados por usuário:** O desenho prevê validação de entradas, proteção das credenciais e separação dos registros financeiros.

## 6. Próximos Passos

- Adicionar relatórios de comparação de orçamento previsto vs. realizado por categoria.
