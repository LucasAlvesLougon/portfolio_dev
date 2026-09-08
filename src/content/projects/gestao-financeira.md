---
title: "Gestão Financeira Pessoal"
status: "planejamento"
featured: true
date: "2026-10"
summary: "Ferramenta de consciência financeira rápida com visualização de receitas, despesas e gráficos por categoria."
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
metrics:
  architecture: "Clean Arch (Draft)"
  tests: "Planejamento via TDD"
  documentation: "Requisitos Definidos"
links:
  repository: "https://github.com/LucasAlvesLougon/gestao_financeira"
---

## 1. Problema

Muitas pessoas começam a anotar seus gastos em planilhas ou apps complexos, mas desistem nos primeiros dias devido à fricção e lentidão para registrar despesas diárias simples (como um café ou almoço).

## 2. Público-Alvo

Indivíduos que buscam clareza sobre onde o dinheiro está indo sem gastar mais do que alguns segundos por dia registrando seus hábitos de consumo.

## 3. Solução

Uma interface ultra otimizada para inserção rápida de transações (meta de registro em menos de 5 segundos), combinada a um dashboard visual que sintetiza saldo total, despesas por categoria e contas recorrentes em uma única visualização.

## 4. Funcionalidades Principais

- **Lançamento Rápido:** Formulário minimalista de despesa/receita com categoria e carteira.
- **Categorização Visual:** Categorias com tags visuais e cores para rápida identificação.
- **Dashboard e Gráficos:** Gráficos interativos de distribuição de despesas e evolução mensal.
- **Despesas Recorrentes:** Agendamento simplificado de custos fixos (aluguel, internet, assinaturas).
- **Exportação:** Download do histórico completo em CSV.

## 5. Decisões Técnicas

- **Precisão Financeira em Centavos:** Todos os valores são persistidos como números inteiros (`INTEGER`) representando centavos, evitando erros clássicos de arredondamento de ponto flutuante (`float`).
- **Segurança Rigorosa:** Hash de senhas, validações de entrada e isolamento estrito de dados financeiros entre usuários.

## 6. Próximos Passos

- Adicionar relatórios de comparação de orçamento previsto vs. realizado por categoria.
